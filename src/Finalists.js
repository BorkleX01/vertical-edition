import React, { Component } from 'react';
import ShareIcons from './ShareButtons';
import {parse} from './html-parser';
import Collapsible from 'react-collapsible';
import SideNav from './SideNav.js';

class Finalists extends Component{
  constructor(props) {
    super(props)
  }

    render(){
      const { data } = this.props

      return(
        <div className="post-wrapper finalists">
          <article className={"post Xtorial"}>
            <div className="poppy-outie" >

              <h4 className="post-ranking">Top List</h4>
              <h2 className="post-title">{data.title.rendered}</h2>
              <h3 className="post-sub-title">{data.acf.post_excerpt}</h3>

              <hr />

              <ShareIcons acf={data.acf} slug={data.slug} title={data.title.rendered} excerpt={data.acf.post_excerpt}/>

              <div className="post-body">
                {buildRows(data.acf.award)}
              </div>

              <SideNav mode={'static-side-nav'} acf={data}/>

            </div>
          </article>
        </div>
      );
    }
}
const handleClickOpen = (item) => {
    //console.log(item);
    console.log(item.organisation+" "+item.name_of_award);

    if(window.gtag){
        window.gtag('event', 'View Award', {'event_category':'Clicks', 'event_label':item.organisation+" "+item.name_of_award});
    }
};

   
function buildRows(arr){
    
    return(
        arr.map((item, ind)=>{
            
            buildFinalists(item.finalists);
            return(
                <div key={ind} className="finalists-award">
                  <h3>{item.organisation}<br />
                    {item.name_of_award}</h3>
                  <Collapsible trigger={TriggerWidget} onOpening={()=>handleClickOpen(item)} >
                    {buildFinalists(item.finalists)}
                  </Collapsible>
                </div>
            );
        }));
}

const TriggerWidget = <div><span className="trigger-widget"></span></div>;

function buildFinalists(arr){
    return(
    arr.map((item, ind)=>{
        return(
            <div key={ind} className="graduate">
              <div className="graduate-name">{item.awardee_name}</div>
              <div className="graduate-institution" >{parse(item.awardee_qualification.toString())}</div>
            </div>
        );
    }));
}

export default Finalists;
