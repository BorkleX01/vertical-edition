import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {serverString} from './serverInfo';
import HtmlToReact, {Parser} from 'html-to-react';
import {Helmet} from "react-helmet";
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';
import Collapsible from 'react-collapsible';

class App extends Component {
    constructor(){
        super();
        this.state = {
            title:"Waiting",
            post:"Waiting",
            
        };
        // console.log("App AFR Grad Guide 2017");
        // console.log("Server: " + serverString);
        // console.log(window.location.pathname.split('/')[1]);
        var wp_allPosts_URL = serverString+"/wp-json/wp/v2/posts?0";
        var wp_post_URL = serverString+"/wp-json/wp/v2/posts?filter[name]="+slug;
        axios.get(wp_allPosts_URL)
            .then((response) => {
                // console.log(response.data[0]);

                var parsedHTML = new Parser();
                var wp_native_slug = parsedHTML.parse(response.data[0].title.rendered);

                var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
                var isValidNode = function () {
                    return true;
                };
                var procHTML = [
                    /*{
                        replaceChildren: true,
                        shouldProcessNode: function (node) {
                            return node.attribs && (node.attribs.class === 'case-study') ;
                        },
                        processNode: function (node, children, index) {
                            console.log("detect case study");
                            console.log(node);
                            console.log(children[0].props.children.props.src);
                            console.log(children[0].props.href);
                            console.log(index);
                        }
                    },*/
                     {
                        replaceChildren: true,
                        shouldProcessNode: function (node) {
                            return node.attribs && (node.attribs.class === 'case-study alignleft') ;
                        },
                         processNode: function (node, children, index) {
                             // console.log("case-study alignleft");
                            return (<TestComponent key={index} position="left" children={children} node={node}/>)
                        }
                    },
                    {
                        replaceChildren: true,
                        shouldProcessNode: function (node) {
                            return node.attribs && (node.attribs.class === 'case-study alignright') ;
                        },
                        processNode: function (node, children, index) {
                            // console.log("case-study alignright");
                            return (<TestComponent key={index} position="right" children={children} node={node}/>)
                        }
                    },
                    {
                        shouldProcessNode: function (node) {
                            //console.log(node);
                            return true;
                        },
                        processNode: processNodeDefinitions.processDefaultNode
                    }];
                var wp_native_post = parsedHTML.parseWithInstructions(response.data[0].content.rendered, isValidNode, procHTML);

                //Update state
                this.setState({title:wp_native_slug , post: wp_native_post});
            });

        
    }
    componentDidMount(){
        
    }  
    render() {
        if(this.state.title !== "Waiting"){
        return (
            <div className="App">
              <Helmet>
                <link rel='stylesheet' type='text/css' href={process.env.PUBLIC_URL + "/css/afr-grad.css"}/>
              </Helmet>
              <TestPost state={this.state}/>
            </div>
        );}else return (<div/>)
    }
}

export default App;

const TestPost = (props) => {
    const shareUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const LinkedinIcon = generateShareIcon('linkedin');
    const EmailIcon = generateShareIcon('email');
    const {
        FacebookShareButton,
        LinkedinShareButton,
        TwitterShareButton,
        EmailShareButton,
    } = ShareButtons;
    
    return(
        <div className={""} style={{ backgroundColor:"white", color:"black"}}>

          <div className="hero" style={{width:"100%"}}>
            <img style={{width:"100%"}} src={serverString+"/wp-content/uploads/2017/12/Test-image-2.png"}/>
          </div>

          <div className="poppy-outie" style={{marginTop:"-17vh", width:"70vw", marginLeft: "auto", marginRight: "auto",  backgroundColor:"white", color:"", position:"relative"}}>

            <div className="presenter" style={{fontFamily:"ProximaNova", fontSize:"1em", display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center", height:"8vh", backgroundColor:"#0d3960", color:"white"}}>
              <div>Advertising Content brought to you by the NSW Government<span className="brand-logo"> LOGO </span></div>
            </div>

            
            
            <div className="ranking" style={{color:"#1E88E5", fontSize: "0.75em", paddingTop:"3vh", paddingBottom:"3vh"}}>Ranked: 40th in Top 100</div>

            <div className="title" style={{fontWeight:"bold", fontSize:"3em",  paddingBottom:"4vh" , paddingLeft: "15%", paddingRight: "15%"}}>{props.state.title}</div>

            <div className="sub-title" style={{color:"grey", fontSize:"1.25em", paddingLeft: "15%", paddingRight: "15%"}}>The NSW Government Graduate Program is the star mover of the 2017 Top 100 Graduate Employer rankings.</div>

            <div className="dotted-divider-horizontal" style={{borderTop:"1px dotted grey", width:"50%", marginLeft:"auto", marginRight:"auto"}}></div>

            <div className={'share-icons'} style={{display: 'flex', flexDirection:'row', justifyContent: 'center'}} >
              <FacebookShareButton> <FacebookIcon size={32} round={true}/></FacebookShareButton>
              <LinkedinShareButton> <LinkedinIcon size={32} round={true}/></LinkedinShareButton>
              <TwitterShareButton> <TwitterIcon size={32} round={true}/></TwitterShareButton>
              <EmailShareButton> <EmailIcon size={32} round={true}/></EmailShareButton>
            </div>

            <div className="org-profile">
              <Collapsible trigger="View Organisation Profile +">
                <div className="org-profile-field">
                  <div className="field-name">LOCATION</div>
                  <div className="field-value">State wide across NSW</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">NO EMPLOYEES</div>
                  <div className="field-value">326,706 (full time equivalent)</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">GRADUATE INTAKE</div>
                  <div className="field-value">To be announced later in 2018</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">GRADUATE INTAKE 2017</div>
                  <div className="field-value">109</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">DISCIPLINES HIRED</div>
                  <div className="field-value"></div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">MALE/FEMALE RATIO</div>
                  <div className="field-value">1:2</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">DIVERSITY INTAKE FIGURES</div>
                  <div className="field-value">
                    Aboriginal and Torres Strait Islander people: 3.1%
                    <br/>People who identify as LGBTI: 3.8%
                    <br/>People with disability: 2.8%
                    <br/>People whose language first spoken as a child was not English: 18%
                  </div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">APPLICATION DATES</div>
                  <div className="field-value">Applications open July 2018</div>
                </div>
                
                <div className="apply-now-button" style={{marginLeft:"auto", marginRight:"auto", backgroundColor:"#1E88E5", color:"white", width:"250px"}}>APPLY NOW</div>
              </Collapsible>
            </div>
            
            <div className="post-body" style={{textAlign:"left", fontSize:"0.85em", paddingLeft: "5%", paddingRight: "5%"}}>
              <div>{props.state.post}</div>
            </div>

          </div>
        </div>);
};

const TestComponent = (props) => {
    //insert into wp like this. line breaks are counted by html-to-react
    //eg. <div class="callout right">CALLOUT HEADING 2q
    //<img src="http://www.smh.com.au/content/dam/images/g/w/n/v/g/1/image.related.articleLeadwide.620x349.gwntil.png/1503318085785.jpg" alt="Light Rail Station" /></div> 
    //eg. <div class="callout left">CALLOUT HEADING
    //<img src="https://qzprod.files.wordpress.com/2016/12/arpanet-logical-map-of-the-internet-september-1973.gif?w=1600" alt="Map of the internet" /></div>
    //console.log(props.children[3].props.src);
    //console.log(props.node);
    return(
        <div style={{textAlign:"center", border:"1px solid black"}}>
          Case Study
        </div>
    )
}

const TestSVGComponent = (props) => {
    return(
        <div>
          <div id="inner" style={{marginTop: "0px", height:window.innerHeight+"px", display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
          <svg width="100" height="100"  style={{border:"1px solid black", width:"75vw", height:"75vw"}}>
              <circle cx="50%" cy="50%" r="25%" stroke="black" fill="none"/>
              <line x1="0%" x2="25%" y1="50%" y2="50%" stroke="black"/>
              <line x1="50%" x2="50%" y1="100%" y2="75%" stroke="black"/>
            </svg>
          </div>
        </div>);
};
