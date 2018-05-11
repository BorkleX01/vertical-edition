import React, { Component } from 'react';
import { connect } from 'react-redux';
import {serverString} from './serverInfo';
import ShareIcons from './ShareButtons';

class SideNav extends Component {
    constructor(){
        super();
        //console.log("Side Navigation Constructed");
        this.navArr = [];
    }
    componentDidMount() {
        //console.log(this.props);
    }
    componentDidUpdate(){
        
        //console.log(this.props.interface.sideNavPayload.navItems);
        navTitles = this.props.interface.sideNavPayload.navItems;
        //console.log(this.props.mode);
    }
    handleClick = () => {
        //console.log("SideNAV Click"),
        document.querySelector('#grid').scrollIntoView({block: 'start', behavior: 'smooth'});
    };
    //navTitles && window.innerWidth>768?(
    render(){
        //console.log("==================sidenav render=======================");
        //console.log(this.props.interface.sideNavPayload.navItems);
        //console.log(this.props.acf);
        //console.log(this.props.sequence);
        //console.log(window.innerWidth);
        
        navTitles = this.props.interface.sideNavPayload.navItems;
        
        return(navTitles?(
            
            <div ref={(div)=>{this.navDOM = div;}} className={this.props.mode + ' side-nav'}>
              <div className="side-nav-top grid">
                <div className="tablet-33 desktop-100">
                    <img alt="mag cover" src={serverString+"/wp-content/uploads/2018/02/mag-cover18.jpg"}/>
                </div>
                <div className="tablet-66 desktop-100">
                    <h3>
                      Top 100 Graduate Employers 2018
                    </h3>
                    <ShareIcons/>
                    <div className="side-nav-items">
                      <div className="side-nav-item">
                        <div className="side-nav-dot"></div>
                        <h5 className="side-nav-heading">{navTitles[0]?navTitles[0].isAd:null}</h5>
                        <h4 className="side-nav-title">{navTitles[0]?navTitles[0].title:null}</h4>
                      </div>
                      {navTitles[1]?<div className="side-nav-item">
                        <div className="side-nav-dot"></div>
                        <h5 className="side-nav-heading">{navTitles[1]?navTitles[1].isAd:null}</h5>
                        <h4 className="side-nav-title">{navTitles[1]?navTitles[1].title:null}</h4>
                      </div>:null}
                      {navTitles[2]?<div className="side-nav-item">
                        <div className="side-nav-dot"></div>
                        <h5 className="side-nav-heading">{navTitles[2]?navTitles[2].isAd:null}</h5>
                        <h4 className="side-nav-title">{navTitles[2]?navTitles[2].title:null}</h4>
                      </div>:null}
                    </div>
                    <button className="afr-button" onClick={this.handleClick}>READ MORE</button>
                </div>
              </div>
            </div>):null);
    }
}
var navTitles = [];

const mapStateToProps = (state) => ({
    interface: state.interfaceState,
    sequence: state.returnSequencedPosts
});

export default connect(mapStateToProps)(SideNav);
//export default SideNav;
