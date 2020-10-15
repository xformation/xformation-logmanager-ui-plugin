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
                label: "Monitor",
                route: `/`
            }
        ];
        this.createStreamRef = React.createRef();
    }

    onClickOpenCreateStreamPopup = (e: any) => {
        this.createStreamRef.current.toggle();
    };


    render() {
        return (
            <div className="">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="Log Managment" />
                <div className="container">
                    <div className="row">
                        <button>Search</button>
                        <button>Streams</button>
                        <button>Alerts</button>
                        <button>Dashboard</button>
                        <button>Input</button>
                        <button>Pipeline</button>
                    </div>
                    <div className="">
                        <h3>STREAMS</h3>
                        <span>You can route incoming messeges into streams by applying rules against them. Messages matching the rules of a stream are routed it. A message can also be routed into multiple streams</span>
                    </div>
                    <div className="">
                        <div className="">
                            <button>
                                <i className="fa fa-search"></i>
                            </button>
                            <input type="text" className="input-group-text" />
                        </div>
                        <div className="">
                            <button>Filter</button>
                            <button>Reset</button>
                        </div>
                    </div>
                    <div className="TableContainer">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <span>All Events</span>
                                <span>Index set: Graylog Events</span>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-6">
                                <span>Stream containing all events created by synetics Log Managment 0 Messages/second. No configured rules.<a>Show Stream Rules</a></span>
                                <button>Manage Rules</button>
                                <button>Manage Output</button>
                                <button>Manage Alerts</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <span>All Messages</span>
                                <span>Index set: Graylog Events</span>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-6">
                                <span>Stream containing all Messages 0 Messages/second. No configured rules.<a>Show Stream Rules</a></span>
                                <button>Manage Rules</button>
                                <button>Manage Output</button>
                                <button>Manage Alerts</button>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <span>All System Events</span>
                                <span>Index set: Graylog Events</span>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-6">
                                <span>Stream containing all events created by synetics Log Managment 0 Messages/second. No configured rules.<a>Show Stream Rules</a></span>
                                <button>Manage Rules</button>
                                <button>Manage Output</button>
                                <button>Manage Alerts</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <span>All Events</span>
                                <span>Index set: Graylog Events</span>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-6">
                                <span>Stream containing all events created by synetics Log Managment 0 Messages/second. No configured rules.<a>Show Stream Rules</a></span>
                                <button>Manage Rules</button>
                                <button>Manage Output</button>
                                <button>Manage Alerts</button>
                            </div>
                        </div>
                    </div>
                </div>
                <CreateStreamPopup ref={this.createStreamRef} />
            </div>
        );
    }
};