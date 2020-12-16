import { Checkbox } from '@material-ui/core';
import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { config } from '../../config';
export class LaunchTcpInputPopup extends React.Component<any, any> {
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            isSubmitted: false,
            removeMatches: false,
            global: false,
            node: "",
            title: "",
            bindAddress: "0.0.0.0",
            port: 5044,
            reciveBufferSize: 1048576,
            noOfWorkerthreads: 4,
            tlsCertFile: "",
            tlsPrivateKeyFile: "",
            enableTls: "",
            tlsKeyPassword: "",
            tlsClientAuthentication: "",
            tlsClientAuthTrustedCerts: "",
            tcpKeepAlive: false,
            overrideSource: "",






        };
    }
    onStateChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    checkboxChange = (e: any) => {
        let isState = e.target.checked;
        let name = e.target.name;
        console.log("state : ", isState)
        console.log("Name : ", name);
        this.setState({
            [name]: isState
        })
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
        if (errorData?.title.isValid) {
            const {  global, node, title, bindAddress, port, reciveBufferSize, noOfWorkerthreads, tlsCertFile, tlsPrivateKeyFile, enableTls, tlsKeyPassword, tlsClientAuthentication, tlsClientAuthTrustedCerts, tcpKeepAlive, overrideSource } = this.state;
            var myHeaders = new Headers();
            myHeaders.append("X-Requested-By", "XMLHttpRequest");
            myHeaders.append("Authorization", "Basic YWRtaW46YWRtaW4=");
            myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Access-Control-Allow-Origin", "*");

            var raw = JSON.stringify({ "global-checkbox":global,"configuration[title]": title,"node-select":node });
            console.log("Data : ", raw)
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
            node: validObj,
            title: validObj,
        };
        if (isSubmitted) {
            const { node, title, global } = this.state;
            if (!global) {
                if (!node) {
                    retData.title = {
                        isValid: false,
                        message: "Please  select node"
                    }
                }
            }
            if (!title) {
                retData.title = {
                    isValid: false,
                    message: "Please enter title"
                }
            }
            return retData;
        }

    }

    render() {
        const { modal, isSubmitted, global, node, title, bindAddress, port, reciveBufferSize, noOfWorkerthreads, tlsCertFile, tlsPrivateKeyFile, enableTls, tlsKeyPassword, tlsClientAuthentication, tlsClientAuthTrustedCerts, tcpKeepAlive, overrideSource } = this.state;
        const errorData = this.validate(isSubmitted);
        const state = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container logmanager-modal-container">
                <ModalHeader toggle={this.toggle}>Launch new Beats (deprecated) input</ModalHeader>
                <ModalBody style={{ height: 'calc(60vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 stream-popup-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">

                                    <input type="checkbox" id="global" name="global" value={global} onChange={this.checkboxChange} /> Global
                                    <span>Should this input start on all nodes</span>
                                </div>
                            </div>
                        </div>
                        {
                            global == false &&
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="description">Node</label>
                                        <select className="input-group-text" name="node" value={node} onChange={this.onStateChange}>
                                            <option>Select Node</option>
                                            <option value="bfae0af3-0a33-4df4-bad1-8c5e952ed6a4">bfae0af3 / DESKTOP-FFBF9FD.localdomain</option>
                                        </select>
                                        <span style={{ color: "red" }}>{errorData?.node.message}</span>
                                    </div>
                                </div>
                            </div>
                        }

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" name="title" value={title} onChange={this.onStateChange} className="input-group-text" placeholder="A description name of stream" />
                                    <span>Select a name of your new input that describes it.</span>
                                    <span style={{ color: "red" }}>{errorData?.title.message}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title">Bind address</label>
                                    <input type="text" id="bindAddress" name="bindAddress" value={bindAddress} onChange={this.onStateChange} className="input-group-text" placeholder="A description name of stream" />
                                    <span>Address to listen on. For example 0.0.0.0 or 127.0.0.1</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title">Port</label>
                                    <input type="text" id="port" name="port" value={port} onChange={this.onStateChange} className="input-group-text" placeholder="A description name of stream" />
                                    <span>Port to listen on.</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title">Receive Buffer Size   &nbsp;<sub>(optional)</sub></label>
                                    <input type="text" id="reciveBufferSize" name="reciveBufferSize" value={reciveBufferSize} onChange={this.onStateChange} className="input-group-text" placeholder="A description name of stream" />
                                    <span>The size in bytes of the reciveBufferSize of nework connections to this input.</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title">No. of worker threads &nbsp;<sub>(optional)</sub></label>
                                    <input type="text" id="noOfWorkerthreads" name="noOfWorkerthreads" value={noOfWorkerthreads} onChange={this.onStateChange} className="input-group-text" placeholder="A description name of stream" />
                                    <span>Number of worker threads processing network connections network connections for this input.</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title">TLS cert file  &nbsp;<sub>(optional)</sub></label>
                                    <input type="text" id="tlsCertFile" name="tlsCertFile" value={tlsCertFile} onChange={this.onStateChange} className="input-group-text" placeholder="A description name of stream" />
                                    <span>path of the TLS certificate file.</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title"> TLS private key file &nbsp;<sub>(optional)</sub></label>
                                    <input type="text" id="tlsPrivateKeyFile" name="tlsPrivateKeyFile" value={tlsPrivateKeyFile} onChange={this.onStateChange} className="input-group-text" placeholder="A description name of stream" />
                                    <span>path of the TLS private key file.</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <input type="checkbox" id="enableTls" name="enableTls" value={enableTls} onChange={this.checkboxChange} /> Enable TLS
                                    <span>Accept TLS connections</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title"> TLS key password &nbsp;<sub>(optional)</sub></label>
                                    <input type="text" id="tlsKeyPassword" name="tlsKeyPassword" value={tlsKeyPassword} onChange={this.onStateChange} className="input-group-text" placeholder="A description name of stream" />
                                    <span>The password for the encrypted key file.</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="index">TLS client authentication &nbsp;<sub>(optional)</sub></label>
                                    <select className="input-group-text" name="tlsClientAuthentication" value={tlsClientAuthentication} onChange={this.onStateChange}>
                                        <option>Select TLS client authentication</option>
                                        <option value="disable">disable</option>
                                        <option value="optional">optional</option>
                                        <option value="required">required</option>
                                    </select>
                                    <span>Whether client need to authentication themselves in TLS connections</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title"> TLS Client Auth Trusted Certs &nbsp;<sub>(optional)</sub></label>
                                    <input type="text" id="tlsClientAuthTrustedCerts" name="tlsClientAuthTrustedCerts" value={tlsClientAuthTrustedCerts} onChange={this.onStateChange} className="input-group-text" placeholder="A description name of stream" />
                                    <span>TLS Client Auth Trusted Certs (File or Directory).</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <input type="checkbox" name="tcpKeepAlive" onChange={this.checkboxChange} value={tcpKeepAlive} id="RemoveMessages" /> &nbsp;TCP keepalive
                                    <span>Enable TCP keep alive packets</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title"> Override Source  &nbsp;<sub>(optional)</sub></label>
                                    <input type="text" id="overrideSource" name="overrideSource" value={overrideSource} onChange={this.onStateChange} className="input-group-text" placeholder="A description name of stream" />
                                    <span>TLS Client Auth Trusted Certs (File or Directory).</span>
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