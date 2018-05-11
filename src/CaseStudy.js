import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateModal } from './ClickHandlers';

class CaseStudy extends Component {
    componentDidUpdate()
    {
        /*
        this.props.acf.case_studies?
            console.log(this.props.acf.case_studies[this.props.count].image.sizes)
            :null;
        */
    }

    handleClick = (p1) => {
        // console.log("CS click");
        //console.log(p1.currentTarget);
        //console.log(this.props.count);
        //console.log(this.props.acf.case_studies[this.props.count]);
        this.props.activateModal(true, this.props.acf.case_studies[this.props.count]);
    }

    render(){

        var record = this.props.acf.case_studies?
            this.props.acf.case_studies[this.props.count]
            :null;
        return(
            record !== null?
                <div className="case-study-inner">
                    {record.image.sizes?<img alt='case-study-thumb' src={record.image.sizes.medium}/>:null}
                    <div className="case-study-body">
                        <h4>CASE STUDY</h4>
                        <h3>{record.title}</h3>
                        <p><button onClick={this.handleClick}>LEARN MORE</button></p>
                    </div>
                </div>
                :
            <div></div>
        );};
    
    };

const mapStateToProps = (state) => ({
    modal: state.interfaceState
});
export default connect(mapStateToProps, {activateModal}, null, {pure:false})(CaseStudy);
