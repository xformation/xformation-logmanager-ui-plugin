import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../Breadcrumbs';
import { CreateStreamPopup } from './createStreamPopup';
import { NewStreamRulePopup } from './newStreamRulePopup';
import { SetOutputPopup } from './setOutputParameter';
import { AllEventsPopup } from './allEventPopup';

export class Dashboard extends React.Component<any, any> {
    breadCrumbs: any;
    createStreamRef: any;
    newStreamRef: any;
    manageOutputRef: any;
    allEventRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            openCreateMenu: false,
            StreamTableData: [
                {
                    title: 'All Events',
                    eventName: 'Index set: Graylog Events',
                    description1: 'Stream containing all events created by synetics Log Managment',
                    description2: '0 Messages/second. No configured rules.',
                    descriptionLink: 'Show Stream Rules',
                },
                {
                    title: 'All Messages',
                    eventName: 'Index set: Graylog Events',
                    description1: 'Stream containing all Messages',
                    description2: '0 Messages/second. No configured rules.',
                    descriptionLink: 'Show Stream Rules',
                },
                {
                    title: 'All System Events',
                    eventName: 'Index set: Graylog Events',
                    description1: 'Stream containing all events created by synetics Log Managment',
                    description2: '0 Messages/second. No configured rules.',
                    descriptionLink: 'Show Stream Rules',
                }, {
                    title: 'All Events',
                    eventName: 'Index set: Graylog Events',
                    description1: 'Stream containing all events created by synetics Log Managment',
                    description2: '0 Messages/second. No configured rules.',
                    descriptionLink: 'Show Stream Rules',
                }
            ]
        }
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
        this.newStreamRef = React.createRef();
        this.manageOutputRef = React.createRef();
        this.allEventRef = React.createRef();
    }

    onClickOpenCreateStreamPopup = (e: any) => {
        this.createStreamRef.current.toggle();
    };

    openNewStreamPopup = (e: any) => {
        this.newStreamRef.current.toggle();
    }
    OpenManageOutputPopup = (a: any) => {
        this.manageOutputRef.current.toggle();
    }
    OpenAllEventsPopup = (a: any) => {
        this.allEventRef.current.toggle();
    }
    onClickOpenSubLink = () => {
        let menu = !this.state.openCreateMenu;
        this.setState({
            openCreateMenu: menu,
        });
    }

    displayTableOfStream = () => {
        const { StreamTableData, openCreateMenu } = this.state;
        let retData = [];
        for (let i = 0; i < StreamTableData.length; i++) {
            let rowData = StreamTableData[i];
            retData.push(
                <tr>
                    <td>
                        <h4 onClick={this.OpenAllEventsPopup}>{rowData.title}</h4>
                        <span>{rowData.eventName}</span>
                    </td>
                    <td>
                        <table className="inner-table">
                            <tr>
                                <td>
                                    <p>{rowData.description1}</p>
                                    <p>{rowData.description2}&nbsp;&nbsp; <a href="#">{rowData.descriptionLink}</a></p>
                                </td>
                                <td>
                                    <div className="d-inline-block">
                                        <button className="blue-button m-b-0" onClick={this.openNewStreamPopup}>Manage Rules</button>
                                        <button className="blue-button m-b-0" onClick={this.OpenManageOutputPopup}>Manage Output</button>
                                        <button className="blue-button m-b-0">Manage Alerts</button>
                                    </div>
                                    <div className="d-inline-block">
                                        <button className="btn btn-link"><i className="fa fa-edit"></i></button>
                                        <button className="btn btn-link"><i className="fa fa-trash"></i></button>
                                        <button className="btn btn-link" onClick={this.onClickOpenSubLink}><i className="fa fa-ellipsis-h"></i></button>
                                        {openCreateMenu == true && <div className="text-center open-create-menu">
                                            <a>
                                                Manage Rules
                                                                    </a>
                                            <a>
                                                MAnage Outputs
                                                                    </a>
                                            <a>
                                                MAnage Alerts
                                                                    </a>
                                            <a>
                                                Edit Stream
                                                                    </a>
                                            <a>
                                                Quick Add Rule
                                                                    </a>
                                            <a>
                                                Clone this Stream
                                                                    </a>
                                        </div>
                                        }
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            );
        }
        return retData;
    }

    render() {
        const { openCreateMenu } = this.state;
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
                            <button className="blue-button m-b-0 m-r-0" onClick={this.onClickOpenCreateStreamPopup}>New Stream</button>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="table-container">
                            <div className="table-container-inner">
                                <table className="table">
                                    <tbody>
                                        {this.displayTableOfStream()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <CreateStreamPopup ref={this.createStreamRef} />
                <NewStreamRulePopup ref={this.newStreamRef} />
                <SetOutputPopup ref={this.manageOutputRef} />
                <AllEventsPopup ref={this.allEventRef} />
            </div>
        );
    }
};