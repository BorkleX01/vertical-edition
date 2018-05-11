import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import {parse} from './html-parser';
import ApplyNowButton from './ApplyNowButton';
class OrgProfile extends Component {
    handleClickOpen = () => {
        console.log("org view");
        if(window.gtag){
            window.gtag('event', 'View Org Profile Open', {'event_category':'Clicks', 'event_label':this.props.data.acf.name});
        }
    }

    handleClickClose = () => {
        if(window.gtag){
            window.gtag('event', 'View Org Profile Close', {'event_category':'Clicks', 'event_label':this.props.data.acf.name});
        }
    }
    
    render(){
        const procValue = (field) => {
            //console.log(field);
            
            var value = this.props.data.acf[field];
            if (field === 'diversity_intake_figures')
            {
                value = parse(value); 
            }
            return value;
        };
        return(
            <div className="org-profile">
              <Collapsible trigger={TriggerWidget} onOpening={this.handleClickOpen} onClose={this.handleClickClose}>
                <div className="org-profile-field">
                  <div className="field-name">LOCATION</div>
                  <div className="field-value">{procValue('location')}</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">GRADUATE INTAKE 2017</div>
                  <div className="field-value large">{procValue('graduate_intake_2017')}</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">DISCIPLINES HIRED</div>
                  <div className="field-value">{procValue('disciplines_hired')}</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">DIVERSITY INTAKE FIGURES</div>
                  <div className="field-value">{procValue('diversity_intake_figures')}</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">NO EMPLOYEES</div>
                  <div className="field-value large">{procValue('no_employees')}</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">GRADUATE INTAKE 2016</div>
                  <div className="field-value large">{procValue('graduate_intake')}</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">MALE/FEMALE RATIO</div>
                  <div className="field-value">{procValue('malefemale_ratio')}</div>
                </div>
                <div className="org-profile-field">
                  <div className="field-name">APPLICATION DATES</div>
                  <div className="field-value">{procValue('application_dates')}</div>
                </div>
                <ApplyNowButton acf={this.props.data.acf}/>
                
              </Collapsible>
            </div>);};
};
const TriggerWidget = <div>View organisation profile<span className="trigger-widget"></span></div>;
export default OrgProfile;
