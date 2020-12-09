import { Checkbox } from '@material-ui/core';
import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { config } from '../../config';


export class CreateStreamPopup extends React.Component<any, any> {
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            title: "",
            description: "",
            indexSet: '',
            isSubmitted: false,
            removeMatches: false,

        };
    }
    onStateChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    removeMatchesCheckboxChange=(e:any)=>{
        let isState = e.target.checked;
        console.log("state : ",isState)
        if(isState){
            this.setState({removeMatches: true})
        }else{
            this.setState({removeMatches: false})
        }
       
          
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
    saveStream = async (event: any) => {
        event.preventDefault();
        this.setState({
            isSubmitted: true,
        });
        const errorData = this.validate(true);
        if (errorData?.title.isValid && errorData.description.isValid && errorData.indexSet.isValid) {
            const { title, description, indexSet,removeMatches } = this.state;
            var myHeaders = new Headers();
            myHeaders.append("X-Requested-By", "XMLHttpRequest");
            myHeaders.append("Authorization", "Basic YWRtaW46YWRtaW4=");
            myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Access-Control-Allow-Origin", "*");

            var raw = JSON.stringify({ "title": title, "description": description, "index_set_id": indexSet, "remove_matches_from_default_stream": removeMatches });
            console.log("Data : ",raw)
            var requestOptions: RequestInit = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(config.STREAM, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }

    }
    validate = (isSubmitted: any) => {
        const validObj = {
            isValid: true,
            message: ""
        };
        const retData = {
            title: validObj,
            description: validObj,
            indexSet: validObj,
        };
        if (isSubmitted) {
            const { title, description, indexSet, } = this.state;
            if (!title) {
                retData.title = {
                    isValid: false,
                    message: "Please enter title"
                }
            }
            if (!description) {
                retData.description = {
                    isValid: false,
                    message: "Please enter description"
                }
            }
            if (!indexSet) {
                retData.indexSet = {
                    isValid: false,
                    message: "Please select indexset"
                }
            }
            return retData;
        }

    }

    render() {
        const { modal, title, description, indexSet, isSubmitted, removeMatches } = this.state;
        const errorData = this.validate(isSubmitted);
        const state = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container logmanager-modal-container">
                <ModalHeader toggle={this.toggle}>Creating Stream</ModalHeader>
                <ModalBody style={{ height: 'calc(60vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 stream-popup-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" name="title" value={title} onChange={this.onStateChange} className="input-group-text" placeholder="A description name of stream" />
                                    <span style={{ color: "red" }}>{errorData?.title.message}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" id="description" name="description" value={description} onChange={this.onStateChange} className="input-group-text" placeholder="What kind of messages are routed to this Stream" />
                                    <span style={{ color: "red" }}>{errorData?.description.message}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="index">IndexSet</label>
                                    <select className="input-group-text" name="indexSet" value={indexSet} onChange={this.onStateChange}>
                                        <option>Select index set</option>
                                        <option value="5fb950ef6439c846ee76f455">Default index set</option>
                                        <option value="5fb95bb004a35d1e34e9baa6">GrayLog Events</option>
                                        <option value="5fb95bb004a35d1e34e9baa8">GrayLog System Event</option>
                                    </select>
                                    <span style={{ color: "red" }}>{errorData?.indexSet.message}</span>
                                    <span>messages that match this stream will be Written to the configured index set</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-check">
                                    <input type="checkbox" name="removeMatches"  onChange={this.removeMatchesCheckboxChange}   className="form-check-input" id="RemoveMessages" />
                                    <label className="form-check-label" htmlFor="RemoveMessages">Remove Matches from "All messages" Stream</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-block text-right p-t-20 contact-popup-buttons">
                                    <button className="cancel m-r-0" onClick={this.handleClose}>Cancel</button>
                                    <button className="save" onClick={this.saveStream} >Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}