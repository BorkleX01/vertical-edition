import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from './FetchAllPosts';
import debounce from 'lodash.debounce';
import { fetchOptions } from './FetchOptions';
import Post from './Post';
import Infographic from './components/infographic';
import Overview from './Overview';

import ModalWrapper from './ModalWrapper';
import LazyLoad from 'react-lazyload';

import SideNav from './SideNav';
import Top100 from './TopOneHundred';
import Finalists from './Finalists';

import imgHamburger from './images/hamburger.svg';
import imgAfrLogo from './images/afr-logo.svg';
import imgSearch from './images/search-icon.svg';

import Observer from '@researchgate/react-intersection-observer';
import HeadObject from './HeadObject';
import Header from './Header';
import Footer from './Footer';
import Favicon from 'react-favicon';
import {serverString} from './serverInfo';

class App extends Component {
    constructor(){
        super();
        window.slug_register_exit = 'initial';
        window.slug_register_enter = 'initial';
        window.timer_register_exit = 0;
        window.timer_register_enter = 0;
        window.collDetect = function(){
            
            var sn = document.querySelector('.fixed-side-nav');
            
            var hr = window.currentHero;

            var ad = window.currentAd?window.currentAd:null;

            var cp = window.currentPost;

            var collided = false;

            var snDIM; 
            var targetDIM;
            var targetDIMAdvert;
            var collisionBounds;            
            var collisionBoundsAd;
            var hero_collide = false;
            var ad_collide = false;
            
            var marginTop;
            var belowGrid = false;

            
            function sn_overlap(targetDIM){
                var partial_overlap = ((snDIM.bottom >= targetDIM.top) && (snDIM.bottom <= targetDIM.bottom))||((snDIM.top >= targetDIM.top) && (snDIM.top <= targetDIM.bottom));
                var full_overlap_over = (((snDIM.bottom >= targetDIM.top) && (snDIM.bottom >= targetDIM.bottom))&&((snDIM.top <= targetDIM.top)&&(snDIM.top <= targetDIM.bottom)));
                var is_collided = partial_overlap || full_overlap_over;
                return is_collided;
            }
            window.onscroll = function(){
                //console.log(window.scrollY);

                window.firstPost = document.querySelectorAll(['.post-container'])[0].offsetTop;
                //console.log(document.querySelectorAll(['.post-container'])[0].offsetTop);
                marginTop = window.firstPost;
                belowGrid = window.scrollY > marginTop;
                //console.log(window.scrollY + " " + marginTop);
                
                if(sn){
                    snDIM = sn.getBoundingClientRect();
                    //targetDIM = hr.getBoundingClientRect();
                    //collisionBounds = ((snDIM.bottom >= targetDIM.top) && (snDIM.bottom <= targetDIM.bottom))||((snDIM.top >= targetDIM.top) && (snDIM.top <= targetDIM.bottom));

                    if(ad){
                        //console.log("advert in view: " + ad.getBoundingClientRect().top);
                        //targetDIMAdvert = ad.getBoundingClientRect();
                        //collisionBoundsAd = ((snDIM.bottom >= targetDIMAdvert.top) && (snDIM.bottom <= targetDIMAdvert.bottom))||((snDIM.top >= targetDIMAdvert.top) && (snDIM.top <= targetDIMAdvert.bottom));
                        ad_collide = sn_overlap(ad.getBoundingClientRect()); 
                    }
                    

                    if(hr){
                        hero_collide = sn_overlap(hr.getBoundingClientRect());
                    }
                    //if(((collisionBounds || collisionBoundsAd) || belowGrid)&&sn){
                    if(((hero_collide || ad_collide) || !belowGrid)&&sn){
                        collided = true;

                        sn.style.visibility = "hidden";
                    }
                    else
                    {

                        sn.style.visibility = "visible";
                    }
                };
            };
        };

        this.handleResize = debounce(this.handleResize.bind(this), 50);
    }
    
    componentWillMount(){
        //Google script load used to be here
        //console.log(this.props.selection.data);
        var segment = window.location.pathname.split('/')[1];
        this.props.fetchAllPosts(segment);
        this.props.fetchOptions();

    }
    
    
    componentDidUpdate(){
        // console.log("===============App update==============");
        // console.log("options");
        // console.log(this.props.options.data.acf);
        //console.log("scroll to: "+window.localStorage.getItem('scrollY'));
        //window.scrollTo(0,window.localStorage.getItem('scrollY'));
        var segment = window.location.pathname.split('/')[1];
        if (this.props.selection.data.length > 1){
            // console.log("** Data loaded **");
            //console.log(this.state);
            window.sequence = this.props.selection.data;
            var gridItems = document.querySelectorAll('.grid-item');
            if(gridItems.length > 0){
                var p_id = '#'+segment;
                //console.log(document.querySelector(p_id));
                if(p_id !== '#' && document.querySelector(p_id) ){
                    // console.log('scrollIntoView');
                    document.querySelector(p_id).scrollIntoView({block: 'start', behavior: 'smooth'});
                }    
            }
        }

        //document.documentElement.scrollTo(0, localStorage.getItem('scrollPos'));
    }

    componentDidMount()
    {
        //console.log("Post loaded: " + this.props.data.slug);
        //window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        //window.collDetect();
        document.querySelector('body').scrollIntoView();
        
        
    }

    handleScroll() {
        //var scrollPos = document.documentElement.scrollTop;
        //add timer
        //localStorage.setItem('scrollPos', scrollPos);
    }

    handleResize() {
        this.props.windowResize();
    }

    // dom only observer code --- end    
    render(){
        return(
            <div className="App">
              <Favicon url={serverString+"/wp-content/uploads/2018/01/gradguide-32x32.gif"}/>
              <HeadObject options={this.props.options.data.acf}/>
              <SideNav mode={'fixed-side-nav'}/>
              <Header/>
              <ModalWrapper />
              <Overview posts={this.props.posts}/>
              <section>
                {buildPosts(this.props)}
              </section>
              <Footer/>
            </div>
        );
    }
}

function buildPosts(props){
    return(
        props.selection.data.map((item, ind)=>{
            //console.log(ind +" " + item.slug + " " + item.acf.article_type);
            if ( item.acf ){
                if (item.acf.article_type){
                    if ( item.acf.article_type === 'infographic' ){
                        // Infographic
                        return(
                            <Observer rootMargin="7% 0% -15% 0%"  key={item.slug} onChange={(inView) => RIO(props, item, inView)}>
                              <LazyLoad height={'200vh'} once offset={1800}>
                              <div id={item.slug} className="infographic-container">
                                <Infographic data={item} />
                              </div>
                              </LazyLoad>
                            </Observer>
                        );
                    } else if ( item.acf.article_type === 'top100' ){
                        return(
                            <Observer rootMargin="7% 0% -15% 0%" key={item.slug} onChange={(inView) => RIO(props, item, inView)}>
                              <LazyLoad height={'200vh'} once offset={1200}>
                              <div id={item.slug} className="top100-container">
                                <Top100 data={item} />
                              </div>
                              </LazyLoad>
                            </Observer>
                        );
                    } else if ( item.acf.article_type === 'finalists' ){
                        return(
                            <Observer rootMargin="7% 0% -15% 0%" key={item.slug} onChange={(inView) => RIO(props, item, inView)}>
                             <LazyLoad height={'200vh'} once offset={1200}>
                             <div id={item.slug} className="finalists-container">
                                <Finalists data={item} />
                              </div>
                            </LazyLoad>
                            </Observer>
                        );
                    }
                    else {
                        return(
                            <Observer rootMargin="7% 0% -15% 0%" key={item.slug} onChange={(inView) => RIO(props, item, inView)}>
                              <div id={item.slug} className="post-container" style={{marginTop:"120px"}}>
                                <LazyLoad height={'200vh'} once offset={1200}>
                                  
                                  <div>
                                    <Post data={item} windowState={props.windowState} />
                                  </div>
                                  
                                </LazyLoad>
                              </div>
                            </Observer>
                        )
                    }
                    
                }
                else {
                    // Post
                    
                    return(
                        <Observer rootMargin="7% 0% -15% 0%" key={item.slug} onChange={(inView) => RIO(props, item, inView)}>
                          <div id={item.slug} className="post-container">
                            <LazyLoad height={'200vh'} once={true} offset={500}>
                              
                              <div>
                                <Post data={item} windowState={props.windowState} />
                              </div>
                              
                            </LazyLoad>
                          </div>
                        </Observer>
                    );
                }
            }
        })
    );
};


const RIO = function(props, item, inView){
    //console.log(inView);
    var cta_post = inView.isIntersecting?'enter: '+inView.target.id+' time: '+inView.time:'exit: '+inView.target.id+' time: '+inView.time;
    var selection = props.selection.data;
    var ind = selection.findIndex((el)=>el.slug === slug);

    var dir = inView.isIntersecting?'enter':'exit';
    if(window.gtag){
        if (inView.isIntersecting){
            var previous_enter = window.slug_register_enter;
            window.slug_register_enter = inView.target.id;
            window.timer_register_enter = inView.time;
            var diffTime = window.timer_register_enter - window.timer_register_exit;
            //console.log('enter: ' + inView.target.id + ' from ' + previous_enter + ' after '+ Math.round(diffTime/1000) + " seconds");
            //console.log(previous_enter + ' after '+ Math.round(diffTime/1000) + " seconds");

            window.gtag('event', 'enter', {'event_category':'Scroll Actions','event_label':inView.target.id});
            window.gtag('config', window.google_analytics_app_id, {'page_title' : inView.target.id, 'page_location':window.location.pathname.split('/')[1]});
        }
        if (window.slug_register_exit !== 'initial'){
            if(!inView.isIntersecting){
                window.slug_register_exit = inView.target.id;
                window.timer_register_exit = inView.time;
                var diffTime = window.timer_register_exit-window.timer_register_enter;
                //console.log("exit: " + window.slug_register_exit + " after: " + Math.round(diffTime/1000) + " seconds");
                window.gtag('event', 'exit', {'event_category':'Scroll Actions','event_label':inView.target.id, 'value':Math.round(diffTime/1000)});
                //window.gtag('config', window.google_analytics_app_id, {'page_title' : inView.target.id, 'page_location':window.location.pathname.split('/')[1]});
            }
        }
    }

    if(inView.isIntersecting){
        var navArr = [];
        var slug = inView.target.id;
        var selection = props.selection.data;
        var ind = selection.findIndex((el)=>el.slug === slug);
        //console.log(selection[hind].acf.kicker);
        var heading = (hind)=> selection[hind].acf.is_advertorial[0]?selection[hind].acf.name:selection[hind].acf.kicker?selection[hind].acf.kicker:'SPECIAL REPORT';
        
        navArr[0] = selection[ind]?{title: selection[ind].title.rendered, isAd: heading(ind)}:null;
        navArr[1] = selection[ind+1]?{title: selection[ind+1].title.rendered, isAd: heading(ind+1)}:null;
        navArr[2] = selection[ind+2]?{title: selection[ind+2].title.rendered, isAd: heading(ind+2)}:null;
        props.sideNavIns({navItems:navArr});
    };

};



const sideNavIns = (obj) => {
    //console.log('dispatch side nav instruction');
    return function(dispatch){
        dispatch({type:'sideNav_control', payload: obj});
    };
};

const windowResize = () => {
    //console.log('dispatch side nav instruction');
    return function(dispatch){
        dispatch({type:'window_resize'});
    };
};

const mapStateToProps = (state) => ({
    
    posts: state.returnMatchedPosts,
    selection: state.returnSequencedPosts,
    options: state.appOptions,
    windowState: state.windowState
});

export default connect(mapStateToProps, {fetchAllPosts, sideNavIns, windowResize, fetchOptions}, null, {pure:true})(App);
