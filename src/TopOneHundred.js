import React, { Component } from 'react';
import {parse, parse2} from './html-parser';
import ShareIcons from './ShareButtons';
import Observer from '@researchgate/react-intersection-observer';
import SideNav from './SideNav.js';
import ViewMore from './components/view-more';

class Top100 extends Component{
    constructor(props) {
      super(props)
    }
    
    render(){
      const { data } = this.props

      return(
        <div className="post-wrapper top100">
          <article className={"post Xtorial"}>
            <div className="poppy-outie" >

              <h4 className="post-ranking">Top List</h4>
              <h2 className="post-title">{data.title.rendered}</h2>
              <h3 className="post-sub-title">{data.acf.post_excerpt}</h3>

              <hr />

              <ShareIcons acf={data.acf} slug={data.slug} title={data.title.rendered} excerpt={data.acf.post_excerpt}/>

              <div className="post-body">
                
                <div className="table">

                    <div className="table-header">
                      <div className="organisation">
                        Organisation
                      </div>
                      <div className="rank">
                        Rank
                      </div>
                      <div className="percentage">
                        Percentage of Student Engagement
                      </div>
                    </div>

                    <ViewMore
                      id="top100-view-more"
                      parentSelector=".table-body"
                      itemSelector=".table-row"
                      large="12"
                      desktop="12"
                      tablet="12"
                      mobile="8">
                      <div className="table-body">
                        { buildRows(data.acf.entrant) }
                      </div>
                    </ViewMore>

                </div>

                <p className="footnote"><small>This figure represents the percentage of the 34,186 logged-in users of the GradConnection website who expressed interest in graduate positions at each employer in the 12 months to October 2017. SOURCE: GRADCONNECTION</small></p>

              </div>

            </div>
          </article>
          <Advert acf={this.props.data.acf}/>
          <div className="post-nav">
                <div className="post-nav-inner">
                  <SideNav mode={'static-side-nav'} acf={this.props.data}/>
                </div>
              </div>
        </div>
      )
    }
}
function AdvertObserver(p1){
    //console.log("Ad");
    //console.log(p1.boundingClientRect);
    window.currentAd = p1.target;
    window.collDetect();

    
}
const Advert = (props)=> {
    // console.log(props.acf);
    // console.log("advert");
    // console.log(parse2(props.acf.advert));
    var adClass;
    if (parse2(props.acf.advert) == 960){
        // console.log("static-scroller");
        adClass = "static-scroller";
    } else if (parse2(props.acf.advert) == 970)
    {
        // console.log("billboard");
        adClass = "billboard";
    } else if (parse2(props.acf.advert) == 1500){
        // console.log("ss-fullwidth1500");
        adClass = "ss-fullwidth1500";
    } else {
        // console.log("ss-fullwidth2000");
        adClass = "ss-fullwidth2000";
    }

    if (props.acf.advert || props.acf.advert_tablet || props.acf.advert_mobile){
        return(
            <Observer options={{root:window}} onChange={AdvertObserver}>
            <div className="advert">
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
function buildRows(data){
    return(
        data.map((item, ind)=>{
            return(
                <div className="table-row" key={ind}>
                  <div className="organisation">
                      {item.organisation}
                  </div>
                  <div className="rank">
                      {item.rank}
                  </div>
                  <div className="percentage">
                      {item.percentage}%
                  </div>
                </div> 
            );
        })  
    );
}
export default Top100;
