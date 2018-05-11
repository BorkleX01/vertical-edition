import {ShareButtons, generateShareIcon} from 'react-share';
import React, { Component } from 'react';
import {serverString} from './serverInfo';

import imgLink from './images/link-icon.svg'

//import { FacebookButton, FacebookCount } from "react-social";

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const LinkedinIcon = generateShareIcon('linkedin');
const EmailIcon = generateShareIcon('email');
const {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton
} = ShareButtons;

const thisURL = serverString; //change this to env variable
// console.log("FB App at: ");
// console.log(thisURL);
//const thisURL = "https://top-graduate-employers-2018.afr.com"; //change this to env variable 
const ShareableElement = (props) => {
    return(<div>
           <img alt='Hero Image' src={props.acf?props.acf.hero_image.sizes.small:null}/>
           </div>);
};
//<FacebookShareButton  quote={this.props.title+" - "+this.props.excerpt} url={thisURL+"/"+this.props.slug}></FacebookShareButton>
//<div onClick={this.handleClick}></div>
class ShareIcons extends Component {

    linkback =(slug)=>{
        return slug?thisURL+"/"+slug:thisURL;
    }
    quoteString =()=>{return this.props.title?this.props.title+" - "+this.props.excerpt:''};
    componentDidMount (){
        //console.log("Social");
        //console.log(this.props.acf);
        
        //console.log(thisURL);
    }
    handleClickFB =(slug) => {
        if(window.gtag){
            console.log('FB');
            console.log(slug);
            //console.log(this.props);
            console.log(this.linkback(this.props.slug));
            console.log(this.props.title);
            console.log(this.props.excerpt);
            console.log(this.props);
            window.gtag('event', 'Facebook Share', {'event_category':'Social','event_label':slug});
        }
        window.shareOverrideOGMeta(this.linkback(this.props.slug), this.props.title?this.props.title:window.grad_guide_share_title, this.props.excerpt?this.props.excerpt:window.grad_guide_share_description, this.props.acf?this.props.acf["hero-mobile"].url:window.mag_cover_url);
    };

    handleClickLI = (slug) => {
        if(window.gtag){
            console.log(slug);
            window.gtag('event', 'LinkedIn Share', {'event_category':'Social','event_label':slug});
        }
    }

    handleClickTW = (slug) => {
        

        if(window.gtag){
            console.log(slug);
            window.gtag('event', 'Twitter Share', {'event_category':'Social','event_label':slug});
        }
    }

    handleClickEM = (slug) => {
        

        if(window.gtag){
            console.log(slug);
            window.gtag('event', 'Email', {'event_category':'Social','event_label':slug});
        }
    }
    handleCopyClick = () => {
        
        const copyText = document.querySelector('#' + this.props.slug + '-shares .copy-link');
        copyText.select();
        document.execCommand("Copy");
        //alert("Copied the text: " + copyText.value);
        if(window.gtag){
            console.log(this.props.slug);
            window.gtag('event', 'Copy Link Share', {'event_category':'Social','event_label':this.props.slug});
        }
    }
    render(){
        return (
          <div className="share-icons" id={this.props.slug + '-shares'}>
            <div onClick={()=>this.handleClickFB(this.props.slug)} className="SocialMediaShareButton">
              <FacebookIcon iconBgStyle={{fill:"white", stroke:"black"}} logoFillColor='black' size={32} round={true} />
            </div>
            <LinkedinShareButton onClick={()=>this.handleClickLI(this.props.slug)} url={this.linkback(this.props.slug)} title={this.props.title} description={this.props.excerpt}>
              <LinkedinIcon iconBgStyle={{fill:"white", stroke:"black"}} logoFillColor='black' size={32} round={true} />
            </LinkedinShareButton>
            <TwitterShareButton onClick={()=>this.handleClickTW(this.props.slug)} url={this.linkback(this.props.slug)} title={this.props.title} via="AFR Grad Guide 2018">
              <TwitterIcon iconBgStyle={{fill:"white", stroke:"black"}} logoFillColor='black' size={32} round={true} />
            </TwitterShareButton>
            <EmailShareButton onClick={()=>this.handleClickEM(this.props.slug)} url={this.linkback(this.props.slug)} subject={this.props.title} body={this.props.excerpt}>
              <EmailIcon iconBgStyle={{fill:"white", stroke:"black"}} logoFillColor='black' size={32} round={true} />
            </EmailShareButton>
            <div onClick={this.handleCopyClick} role="button" tabIndex="0" className="SocialMediaShareButton SocialMediaShareButton--link" title="Copy to clipboard">
                <input type="text" className="copy-link" defaultValue={this.linkback(this.props.slug)} />
                <div style={{width: '32px', height: '32px'}}>
                    <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="social-icon social-icon--email">
                        <g id="link-icon" fillRule="nonzero">
                            <circle id="Oval" stroke="#000000" fill="#FFFFFF" cx="32" cy="32" r="31"></circle>
                            <polygon id="Shape" fill="#000000" points="26 34 26 30 38 30 38 34"></polygon>
                            <path d="M40,24 C44.4,24 48,27.6 48,32 C48,36.4 44.4,40 40,40 L34,40 L34,36 L40,36 C42.2,36 44,34.2 44,32 C44,29.8 42.2,28 40,28 L34,28 L34,24 L40,24 Z M20,32 C20,34.2 21.8,36 24,36 L30,36 L30,40 L24,40 C19.6,40 16,36.4 16,32 C16,27.6 19.6,24 24,24 L30,24 L30,28 L24,28 C21.8,28 20,29.8 20,32 Z" id="Shape" fill="#000000"></path>
                        </g>
                    </svg>
                </div>
            </div>
          </div>
        );
    }
};

export default ShareIcons;
