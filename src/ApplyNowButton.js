import React, { Component } from 'react';

class ApplyNowButton extends Component {
    constructor(){
        super();
        this.button_handler = this.button_handler.bind(this);
    }
    button_handler = () => {
        //window.location = this.props.acf.apply_now_details;
        window.open(this.props.acf.apply_now_details);
        if(window.gtag){
            window.gtag('event', 'Apply Now', {'event_category':'Clicks', 'event_label':this.props.acf.apply_now_details});
        }
    }
    componentWillMount(){
        //console.log(this.props.acf.apply_now_details);
    }
    componentDidUpdate(){
        
    }
    render(){
        return(
            <button className="afr-button" onClick={this.button_handler} >APPLY NOW</button>
        );
    }
}

export default ApplyNowButton;
