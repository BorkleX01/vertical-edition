import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import {parse} from './html-parser';
import { activateModal } from './ClickHandlers';
import { connect } from 'react-redux';

class ModalWrapper extends Component {
    constructor(){
        super();
        this.onCloseModal=()=>{
            this.props.activateModal(false);
        };
    }
    componentDidMount(){
    }
    componentDidUpdate(){
        //console.log("Modal:");
        //console.log(this.props.modal.modalVisible);
        //console.log(this.props.modal.modalPayload.image != undefined);
        //console.log(this.props.modal.modalPayload.image === true);
    }
    render(){
        return(
            (this.props.modal.modalPayload !== undefined)?
                <Modal classNames={{overlay:"modal-overlay", modal:"modal-window"}} open={this.props.modal.modalVisible} onClose={this.onCloseModal} little>
                    <div className="modal-inner">
                        <h4 className="post-ranking">Case Study</h4>
                        {this.props.modal.modalPayload.image?<div className="modal-image"><img alt='case-study-modal' src={this.props.modal.modalPayload.image.sizes.large} /></div>:null}
                        <h2 className="modal-title">{this.props.modal.modalPayload.title}</h2>
                        <h3 className="modal-sub-title">{this.props.modal.modalPayload.excerpt}</h3>
                        <div className="modal-body">{parse(this.props.modal.modalPayload.body)}</div>
                    </div>
                </Modal>
                :
                <div></div>
        );};
}

const mapStateToProps = (state) => ({
    modal: state.interfaceState
});

export default connect(mapStateToProps, {activateModal}, null, {pure:false})(ModalWrapper);
