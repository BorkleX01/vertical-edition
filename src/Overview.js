import React, { Component } from 'react';
import {serverString} from './serverInfo';
import ShareIcons from './ShareButtons';
import ViewMore from './components/view-more';
import Observer from '@researchgate/react-intersection-observer';
import LazyLoad from 'react-lazyload';

import LoadImage from './components/hero-image'

class Overview extends Component {
    componentDidUpdate(){
        //console.log("Overview Update");
        //console.log(this.props);
    }
    button_handler(){
        //console.log("READ MORE");
        if(window.gtag){
            window.gtag('event', 'Start Reading', {'event_category':'Clicks', 'event_label':navigator.userAgent});
        }
        var segment = window.location.pathname.split('/')[1];
        var p_id = '#'+segment;
        if(p_id !== '#' && document.querySelector(p_id) ){
            document.querySelector(p_id).scrollIntoView({block: 'start', behavior: 'smooth'});
        }else{
            document.querySelector('#grid').scrollIntoView({block: 'start', behavior: 'smooth'});
            
        }
    }
    
    render(){
        return(
            <section className="overview">
              <header> 
                <div id="top" className="overview-top">
                  <div className="overview-top-bg"></div>
                  <div className="overview-top-inner">
                    <div className="overview-top-left">
                      <h4>
                        MAGAZINE
                      </h4>
                      <h1>
                        Top 100 Graduate
                        Employers 2018
                      </h1>
                      <p className="h3">
                        Australia's leading companies and what they look for in graduates
                      </p>

                      <ShareIcons inverted={true}/>

                      <p className="hidden-mobile">
                        <button className="button afr-button" onClick={this.button_handler}>START READING</button>
                      </p>
                      
                    </div>

                    <div className="overview-top-right">
                      <LazyLoad once><LoadImage id={'over-cover-img'} alt='mag cover' src={serverString+"/wp-content/uploads/2018/02/mag-cover18.jpg"} /></LazyLoad>
                    </div>

                    <div className="overview-top-button hidden-tablet hidden-desktop">
                      <button className="button afr-button" onClick={this.button_handler}>START READING</button>
                    </div>
                    
                  </div>
                </div>
              </header>
                
              {this.props.posts.allPosts === 'no data'?
                  <div className="loader"></div>
                      :
                      
                            <Grid  posts={this.props.posts} allPosts={this.props.posts.allPosts}/>
                          
                      }
                        
            </section>
        );
    }
}
const RIO = (inView) => {
    //console.log('Overview intersection state change');
    if(inView.isIntersecting && window.gtag){
        // console.log("enter grid");
        window.slug_register_enter = 'overview-grid';
        window.timer_register_enter = inView.time;
        //window.gtag('event', 'enter', {'event_category':'Scroll Behaviour','event_label':'overview-grid'+" " +inView.time});
        //window.gtag('config', window.google_analytics_app_id, {'page_title' : inView.target.id, 'page_location':window.location.pathname.split('/')[1]});
    }

    if(!inView.isIntersecting){
        window.slug_register_exit = 'overview-grid';
        window.timer_register_exit = inView.time;
        var diffTime = window.timer_register_exit-window.timer_register_enter;
        //console.log("exit grid after: " + Math.round(diffTime/1000) + " seconds");
    }
};

function addThumb(acf){
    if(acf["hero-mobile"]){return acf["hero-mobile"]}
};

const handleClick = (p1) => {
    // console.log("grid click");
    
    var p_id = '#'+p1;
    if(window.gtag){
        window.gtag('event', 'Grid Item', {'event_category':'Clicks', 'event_label':p1});
    }
    // console.log(p1);
    // console.log(document.querySelector(p_id));
    //document.querySelector(p_id).scrollIntoView({block: 'start', behavior: 'smooth'});
};
const buildGrid = (posts) => {
    return posts.map((item, index)=>{
        //console.log(item.acf["hero-mobile"]);
        var heading;
        if (item.acf.is_advertorial[0]==="Yes"){
            var nameExists = (item.acf.name != null && item.acf.name != undefined);
            nameExists?heading=item.acf.name:heading='NAMELESS';
        } else {
            if (item.acf.kicker){heading = item.acf.kicker;}
            else{
                heading = 'SPECIAL REPORT';
            }
        }
        var thumb;
        
        thumb=addThumb(item.acf);
        
        return(
            <div className="grid-item" style={{}}key={index}>
              <a href={item.slug} onClick={()=>handleClick(item.slug)}>
                <div className="grid-item-thumb">
                  <div className="grid-item-thumb-overlay"></div>
                  <div className="grid-item-thumb-bg" style={{backgroundImage: 'url(' + thumb.sizes['menu-48x48'] + ')'}}></div>
                  <LazyLoad once><LoadImage id={item.slug + '-grid'} alt='thumbnail' src={thumb.url}/></LazyLoad>
                </div>
                <div className="grid-item-heading">{heading}</div>
                <div className="grid-item-title" style={{}}>
                  {item.title.rendered}
                </div>
              </a>
            </div>);
    });
    
};

const Grid = (props) => {
    return(
        <Observer key='overview-grid' onChange={(inView) => RIO(inView)}>
          <div id="grid" className="overview-grid">
            <ViewMore 
              id="grid-view-more"
              parentSelector=".overview-grid-inner"
              itemSelector=".grid-item"
              large="2"
              desktop="2"
              tablet="2"
              mobile="3">

              <div className="overview-grid-inner">
                {buildGrid(props.posts.menuSelectablePosts)}
              </div>

            </ViewMore>
          </div>
        </Observer>
    );
  };

export default Overview;
