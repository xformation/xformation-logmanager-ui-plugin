import { Checkbox } from '@material-ui/core';
import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';


export class NewStreamRulePopup extends React.Component<any, any> {
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
                            <h4 className="d-block">New Stream Rule</h4>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="field">Field</label>
                                    <input type="text" id="field" name="field" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="type">Type</label>
                                    <select>
                                        <option value="match exactly">Match Exactly</option>
                                        <option value="match regular expression">Match regular expression</option>
                                        <option value="greaterthan">Grater than</option>
                                        <option value="smallerthan">Smaller than</option>
                                        <option value="field presence">Field Presence</option>
                                        <option value="contain">Contain</option>
                                        <option value="always match">Always match</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="value">Value</label>
                                    <input type="text" id="value" name="value" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Checkbox />Inverted
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" id="description" name="description" placeholder="Optional"/>
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