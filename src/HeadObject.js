import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {serverString} from './serverInfo';
class HeadObject extends Component{
    constructor(){
        super();
        
    }
    componentWillMount(){
        
    }
    componentDidUpdate(){
        // console.log("HeadObject");
        // console.log(this.props.options?this.props.options:"no options");

        if(this.props.options){
            window.mag_cover_url = this.props.options.mag_cover.url;
            if(this.props.options.grad_guide_share_title){
                window.grad_guide_share_title = this.props.options.grad_guide_share_title;
            }else{
                window.grad_guide_share_title = 'AFR Grad Guide 2018 Title' ;
            }


            if(this.props.options.grad_guide_share_description){
                window.grad_guide_share_description = this.props.options.grad_guide_share_description;
            } else {
                window.grad_guide_share_description = 'AFR Grad Guide 2018 Description';
            }
        }else
        {
            window.mag_cover_url = "https://top-graduate-employers-2018.afr.com/wp-content/uploads/2018/02/mag-cover18.jpg";
        }

        
        
        
        if(this.props.options)
        {
            //Google start
            if (this.props.options.google_analytics_app_id){
                // console.log("Google gtag load with ID: ");
                // console.log(this.props.options.google_analytics_app_id);
                window.google_analytics_app_id = this.props.options.google_analytics_app_id;
                const script = document.createElement("script");

                script.src = "https://www.googletagmanager.com/gtag/js?id="+this.props.options.google_analytics_app_id;
                script.async = true;

                document.body.appendChild(script);

                window.dataLayer = window.dataLayer || [];

                function gtag(){
                    window.dataLayer.push(arguments);
                }
                //window.gtag = gtag;
                //window.gtag('js', new Date());
                //window.gtag('config', this.props.options.google_analytics_app_id);
                
                //window.gtag('event', 'User Agent', {'event_category':'Environment','event_label':navigator.userAgent});
                //window.gtag('event', 'App Version', {'event_category':'Environment','event_label':navigator.appVersion});
                //window.gtag('event', 'Retrieval Site', {'event_category':'Environment','event_label':serverString});


                //window.gtag('event', 'Display Width', {'event_category':'Environment','event_label':window.innerWidth});
                //window.gtag('event', 'Display Height', {'event_category':'Environment','event_label':window.innerHeight});
                
                //console.log(navigator.userAgent);
            }
            //Google end. window.gtag() defined.

            //FB start
            if (this.props.options.facebook_app_id){
                // console.log("FB using: " + this.props.options.facebook_app_id);
                var fb_id = this.props.options.facebook_app_id;
                window.fbAsyncInit = function() {
	            window.FB.init({
	                appId            : fb_id,
	                autoLogAppEvents : true,
	                xfbml            : true,
	                version          : 'v2.12'
	            });
	            window.FB.AppEvents.logPageView();
                };
                
                (function(d, s, id){
	            var js, fjs = d.getElementsByTagName(s)[0];
	            if (d.getElementById(id)) {return;}
	            js = d.createElement(s); js.id = id;
	            js.src = "//connect.facebook.net/en_US/sdk.js";
	            fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

                
                window.shareOverrideOGMeta = function(overrideLink, overrideTitle, overrideDescription, overrideImage)
                {
	            window.FB.ui({
		        method: 'share_open_graph',
		        action_type: 'og.shares',
		        action_properties: JSON.stringify({
		            object: {
			        'og:url': overrideLink,
			        'og:title': overrideTitle,
			        'og:description': overrideDescription,
			        'og:image': overrideImage
		            }
		        })
	            },function (response) {
	                // Action after response
                        // console.log("FB Response: ");
                        // console.log(response);
	            });
                };
            }                
            //FB end. window.shareOverrideOGMeta() defined.
            //LinkedIn start
            (function(d, s, id){
	        var js, fjs = d.getElementsByTagName(s)[0];
	        if (d.getElementById(id)) {return;}
	        js = d.createElement(s); js.id = id;
	        js.src = "//platform.linkedin.com/in.js";
	        fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'linkedIn-jssdk'));
            //LinkedIn App ID 1628885
            //LinkIn end


            //Twitter App ID 19050000
        }
    }
    render(){
        return(<Helmet>
	        <link rel='stylesheet' type='text/css' href={process.env.PUBLIC_URL + "/static/css/main.css"}/>
        </Helmet>);
    }
}
export default HeadObject;
