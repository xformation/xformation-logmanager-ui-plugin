import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../Breadcrumbs';
import { CreateStreamPopup } from './createStreamPopup';
import { NewStreamRulePopup } from './newStreamRulePopup';
export class Dashboard extends React.Component<any, any> {
    breadCrumbs: any;
    createStreamRef: any;
    constructor(props: any) {
        super(props);
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Log Managment | Dashboard",
                isCurrentPage: true
            }
        ];
        this.createStreamRef = React.createRef();
    }

    onClickOpenCreateStreamPopup = (e: any) => {
        this.createStreamRef.current.toggle();
    };


    render() {
        return (
            <div className="logmanager-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="LOG MANAGMENT" />
                <div className="logmanager-page-container">
                    <div className="common-container">
                        <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Search</button>
                        <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Streams</button>
                        <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Alerts</button>
                        <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Dashboard</button>
                        <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Input</button>
                        <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Pipeline</button>
                        <button className="white-button float-right back-btn"><i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back</button>
                    </div>
                    <div className="common-container">
                        <div className="streams-text">
                            <h3>STREAMS</h3>
                            <p>You can route incoming messeges into streams by applying rules against them. Messages matching the rules of a stream are routed it. A message can also be routed into multiple streams</p>
                        </div>
                    </div>
                    <div className="common-container">
                        <div className="d-inline-block form-group search-control">
                            <button>
                                <i className="fa fa-search"></i>
                            </button>
                            <input type="text" className="input-group-text" />
                        </div>
                        <div className="d-inline-block">
                            <button className="blue-button m-b-0">Filter</button>
                            <button className="blue-button m-b-0">Reset</button>
                        </div>
                        <div className="float-right new-stream-btn">
                            <button className="blue-button m-b-0 m-r-0">New Stream</button>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="table-container">
                            <div className="table-container-inner">
                                <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>All Events</h4>
                                            <span>Index set: Graylog Events</span>
                                        </td>
                                        <td>
                                            <table className="inner-table">
                                                <tr>
                                                    <td>
                                                        <p>Stream containing all events created by synetics Log Managment</p>
                                                        <p>0 Messages/second. No configured rules.&nbsp;&nbsp; <a href="#">Show Stream Rules</a></p>
                                                    </td>
                                                    <td>
                                                        <div className="d-inline-block">
                                                            <button className="blue-button m-b-0">Manage Rules</button>
                                                            <button className="blue-button m-b-0">Manage Output</button>
                                                            <button className="blue-button m-b-0">Manage Alerts</button>
                                                        </div>
                                                        <div className="d-inline-block">
                                                            <button className="btn btn-link"><i className="fa fa-edit"></i></button>
                                                            <button className="btn btn-link"><i className="fa fa-trash"></i></button>
                                                            <button className="btn btn-link"><i className="fa fa-ellipsis-h"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>All Messages</h4>
                                            <span>Index set: Graylog Events</span>
                                        </td>
                                        <td>
                                            <table className="inner-table">
                                                <tr>
                                                    <td>
                                                        <p>Stream containing all Messages</p>
                                                        <p>0 Messages/second. No configured rules.&nbsp;&nbsp; <a href="#">Show Stream Rules</a></p>
                                                    </td>
                                                    <td>
                                                        <div className="d-inline-block">
                                                            <button className="blue-button m-b-0">Manage Rules</button>
                                                            <button className="blue-button m-b-0">Manage Output</button>
                                                            <button className="blue-button m-b-0">Manage Alerts</button>
                                                        </div>
                                                        <div className="d-inline-block">
                                                            <button className="btn btn-link"><i className="fa fa-edit"></i></button>
                                                            <button className="btn btn-link"><i className="fa fa-trash"></i></button>
                                                            <button className="btn btn-link"><i className="fa fa-ellipsis-h"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>All System Events</h4>
                                            <span>Index set: Graylog Events</span>
                                        </td>
                                        <td>
                                            <table className="inner-table">
                                                <tr>
                                                    <td>
                                                        <p>Stream containing all events created by synetics Log Managment</p>
                                                        <p>0 Messages/second. No configured rules.&nbsp;&nbsp; <a href="#">Show Stream Rules</a></p>
                                                    </td>
                                                    <td>
                                                        <div className="d-inline-block">
                                                            <button className="blue-button m-b-0">Manage Rules</button>
                                                            <button className="blue-button m-b-0">Manage Output</button>
                                                            <button className="blue-button m-b-0">Manage Alerts</button>
                                                        </div>
                                                        <div className="d-inline-block">
                                                            <button className="btn btn-link"><i className="fa fa-edit"></i></button>
                                                            <button className="btn btn-link"><i className="fa fa-trash"></i></button>
                                                            <button className="btn btn-link"><i className="fa fa-ellipsis-h"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>All Events</h4>
                                            <span>Index set: Graylog Events</span>
                                        </td>
                                        <td>
                                            <table className="inner-table">
                                                <tr>
                                                    <td>
                                                        <p>Stream containing all events created by synetics Log Managment</p>
                                                        <p>0 Messages/second. No configured rules.&nbsp;&nbsp; <a href="#">Show Stream Rules</a></p>
                                                    </td>
                                                    <td>
                                                        <div className="d-inline-block">
                                                            <button className="blue-button m-b-0">Manage Rules</button>
                                                            <button className="blue-button m-b-0">Manage Output</button>
                                                            <button className="blue-button m-b-0">Manage Alerts</button>
                                                        </div>
                                                        <div className="d-inline-block">
                                                            <button className="btn btn-link"><i className="fa fa-edit"></i></button>
                                                            <button className="btn btn-link"><i className="fa fa-trash"></i></button>
                                                            <button className="btn btn-link"><i className="fa fa-ellipsis-h"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
                <CreateStreamPopup ref={this.createStreamRef} />
            </div>
        );
    }
};