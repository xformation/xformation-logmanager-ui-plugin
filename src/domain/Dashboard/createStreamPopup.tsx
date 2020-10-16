import { Checkbox } from '@material-ui/core';
import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';


export class CreateStreamPopup extends React.Component<any, any> {
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,

        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }
    handleClose = () => {
        this.setState({
            modal: false,
        });
    }


    render() {
        const { modal } = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container logmanager-modal-container">
                <ModalHeader toggle={this.toggle}>Creating Stream</ModalHeader>
                <ModalBody style={{ height: 'calc(60vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 stream-popup-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" name="title" className="input-group-text" placeholder="A description name of stream" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" id="description" name="description" className="input-group-text" placeholder="What kind of messages are routed to this Stream" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="index">IndexSet</label>
                                    <select className="input-group-text">
                                        <option value="">Select index set</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <span>messages that match this stream will be Written to the configured index set</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="RemoveMessages" />
                                    <label className="form-check-label" htmlFor="RemoveMessages">Remove Matches from "All messages" Stream</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-block text-right p-t-20 contact-popup-buttons">
                                    <button className="cancel m-r-0" onClick={this.handleClose}>Cancel</button>
                                    <button className="save">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}