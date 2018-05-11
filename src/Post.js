import React, { Component } from 'react';
import {parse_for_ad_url, parse, parse2} from './html-parser';
import OrgProfile from './OrgProfile';
import ShareIcons from './ShareButtons';
import Observer from '@researchgate/react-intersection-observer';
import ApplyNowButton from './ApplyNowButton';
import SideNav from './SideNav.js';
import LazyLoad from 'react-lazyload';

import LoadImage from './components/hero-image'

class Post extends Component {
    componentWillMount(){
    }
    componentDidUpdate()
    {
        //document.documentElement.scrollTo(0, localStorage.getItem('scrollPos'));

    }
    componentDidMount()
    {
        //console.log("Post loaded: " + this.props.data.slug);
        //window.addEventListener('scroll', this.handleScroll);

    }

    handleScroll() {
        //var scrollPos = document.documentElement.scrollTop;
        //add timer
        //localStorage.setItem('scrollPos', scrollPos);
    }

    render() {
        return (
              <Advertorial data={this.props.data} windowState={this.props.windowState} />
        );
    }
}
function heroObserver(p1){
    //console.log("Hero");
    //console.log(p1.boundingClientRect);
    window.currentHero = p1.target;
    window.collDetect();
}

function AdvertObserver(p1){
    //console.log("Ad");
    //console.log(p1.boundingClientRect);
    window.currentAd = p1.target;
    window.collDetect();
}
const Hero = (props) => {
  console.log(props)
    if ( props.windowState.isMobile ){
      return(
          <Observer onChange={heroObserver}>
            <div className="hero">
              <div className="hero-bg" style={{backgroundImage: 'url(' + props.data.acf['hero-mobile']['sizes']['menu-48x48'] + ')'}}></div>
              <LazyLoad offset={400}><LoadImage id={props.data.slug + '-hero'} alt='hero' src={props.data.acf['hero-mobile']['url']}/></LazyLoad>
            </div>
          </Observer>
      );
    } else if ( props.windowState.isTablet ){
      return(
          <Observer onChange={heroObserver}>
            <div className="hero">
              <div className="hero-bg" style={{backgroundImage: 'url(' + props.data.acf['hero-tablet']['sizes']['medium'] + ')'}}></div>
              <LazyLoad offset={400}><LoadImage id={props.data.slug + '-hero'} alt='hero' src={props.data.acf['hero-tablet']['url']}/></LazyLoad>
            </div>
          </Observer>
      );
    } else {
      return(
          <Observer onChange={heroObserver}>
            <div className="hero">
              <div className="hero-bg" style={{backgroundImage: 'url(' + props.data.acf.hero_image.sizes.medium + ')'}}></div>
              <LazyLoad offset={400}><LoadImage id={props.data.slug + '-hero'} alt='hero' src={props.data.acf.hero_image.url} /></LazyLoad>
            </div>
          </Observer>
      );
    }
    
};

const Advertorial = (props) =>
      {
          return(
            <div className="post-wrapper">
              <article className={"post Xtorial"}>
                
                {props.data.acf.hero_image !== false?<Hero data={props.data} windowState={props.windowState} />:null}

                {props.data.acf.is_advertorial[0] === 'Yes'?
                  <div className="post-presenter">
                        <div>Advertising Content brought to you by {props.data.acf.name}</div>
                      </div>
                  : null}

                <div className="poppy-outie" >
                      {props.data.acf.is_advertorial[0] === 'Yes'?
                       <h4 className="post-ranking">{props.data.acf.ranking}</h4>
                              :
                              props.data.acf.kicker?<h4 className="post-ranking">{props.data.acf.kicker}</h4>:<h4 className="post-ranking">Special Report</h4>
                          }

                          <h2 className="post-title">{props.data.title.rendered}</h2>

                          {props.data.acf.post_excerpt?
                              <h3 className="post-sub-title">{props.data.acf.post_excerpt}</h3>
                                  :
                              null}

                              {props.data.acf.by_line?<p className="post-by-line">By {props.data.acf.by_line}</p>:null}

                              <hr />

                              <ShareIcons acf={props.data.acf} slug={props.data.slug} title={props.data.title.rendered} excerpt={props.data.acf.post_excerpt}/>

                              {props.data.acf.logo?<span className="post-brand-logo"><img alt="LOGO" src={props.data.acf.logo.url}/></span>:null}

                              {props.data.acf.is_advertorial[0] === 'Yes'?
                                  <OrgProfile data={props.data}/>
                                      :
                                      null
                                      }
                                      
                                      <div className="post-body">
                                        <div>{parse(props.data.content.rendered, props.data.acf)}</div>
                                      </div>


                                      {props.data.acf.is_advertorial[0] === 'Yes'?
                                          <ApplyNowButton acf={props.data.acf}/>
                                              :
                                          null}
                                          
                                          
                </div>
              </article>
              <Advert acf={props.data.acf}/>
              <div className="post-nav">
                <div className="post-nav-inner">
                  <SideNav mode={'static-side-nav'} acf={props.data}/>
                </div>
              </div>
            </div>
        );
      };
const Advert = (props)=> {
    //console.log(props.acf);
    //console.log("advert");
    //console.log(parse2(props.acf.advert));
    var adClass;
    if (parse2(props.acf.advert) == 960){
        //console.log("static-scroller");
        adClass = "static-scroller";
    } else if (parse2(props.acf.advert) == 970)
    {
        //console.log("billboard");
        adClass = "billboard";
    } else if (parse2(props.acf.advert) == 1500){
        //console.log("ss-fullwidth1500");
        adClass = "ss-fullwidth1500";
    } else {
        //console.log("ss-fullwidth2000");
        adClass = "ss-fullwidth2000";
    }

    if (props.acf.advert || props.acf.advert_tablet || props.acf.advert_mobile){
        function adclick(e){
            console.log("ad click");
            console.log(props);
            if(window.gtag){
                window.gtag('event', 'clickout', {'event_category':'Advertisements','event_label':parse_for_ad_url(props.acf.advert)});
            }
        }
        return(
            <Observer options={{root:window}} onChange={AdvertObserver}>
              <div className="advert" onClick={adclick}>
              <div className={adClass}>
                {parse(props.acf.advert)}
                {parse(props.acf.advert_tablet)}
                {parse(props.acf.advert_mobile)}
              </div>
            </div>
            </Observer>
        );
    } else {
      return null
    }
};
export default Post;

