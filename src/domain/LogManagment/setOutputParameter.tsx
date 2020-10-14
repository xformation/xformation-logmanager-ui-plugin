import { Checkbox } from '@material-ui/core';
import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';


export class SetOutputPopup extends React.Component<any, any> {
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
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container">
                <button className="close-btn" onClick={this.handleClose}>X</button>
                <ModalBody style={{ height: 'calc(75vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 stream-popup-container">
                        <div className="d-block width-100 p-b-20 heading">
                            <h4 className="d-block">All Events | Manage Output</h4>
                        </div>
                        <div className="">
                            <span>Set your output Parameters here</span>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <select>
                                        <option value="">Select Output Type</option>
                                        <option value="stdout">STDOUT Output</option>
                                        <option value="gelf">GELF Outputs</option>
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <button>Lunch New Output</button>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <select>
                                        <option value="">Select existing Output</option>
                                        <option value="">No output Available</option>
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <button>Assign existing output</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-block text-center p-t-20 contact-popup-buttons">
                                    <button className="cancel" onClick={this.handleClose}>Cancel</button>
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