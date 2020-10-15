import { Checkbox } from '@material-ui/core';
import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';


export class AllEventsPopup extends React.Component<any, any> {
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
                            <h4 className="d-block">All Events | Manage Rules</h4>
                        </div>
                        <div className="">
                            <span>Load a message to test Rule</span>
                            <button>Recent Messages</button>
                            <button>Message Id</button>
                            <span>Select an input from the list below and click "Lod messages" to load the most recent message received by this input within the last hour.</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <select>
                                        <option value="">Select input</option>
                                        <option value="abc">ABC</option>
                                        <option value="def">DEF</option>
                                        <option value="hij">HIJ</option>
                                        <option value="klm">KLM</option>
                                    </select>
                                </div>
                                <button>Load Messages</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <h4>Manage Stream Rules</h4>
                                <button>Add Rules</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <span>Please load a message to check if it would match against these rules and therefore be routed into this stream.</span>
                            </div>
                        </div>
                        <div className="">
                            <input type="radio" value="1" name="gender" /> Stream containing all events created by synectics Log Managment
                            <input type="radio" value="2" name="gender" /> Stream containing all events created by synectics Log Managment
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