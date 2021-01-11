import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { CommonService } from '../_common/common'
import { Breadcrumbs } from '../Breadcrumbs';
import { CreateStreamPopup } from './createStreamPopup';
import { NewStreamRulePopup } from './newStreamRulePopup';
import { SetOutputPopup } from './setOutputParameter';
import { AllEventsPopup } from './allEventPopup';
import { TopMenu } from './topMenu';
import { JsxEmit } from 'typescript';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class StreamData {
    id: any;
    title: any;
    indexSet: any;
    description: any;
    rules: any;

}
let indexSetMap = new Map();
// indexSetMap.set("5fb950ef6439c846ee76f455", "Default index set");
// indexSetMap.set("5fb95bb004a35d1e34e9baa6", "GrayLog Events");
// indexSetMap.set("5fb95bb004a35d1e34e9baa8", "GrayLog System Event");
export class Dashboard extends React.Component<any, any> {
    breadCrumbs: any;
    createStreamRef: any;
    newStreamRef: any;
    manageOutputRef: any;
    allEventRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            tcpInputs: [],
            openCreateMenu: false,
            streamTableData: [],
            indexSets: [],
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
    }
    openNewStreamPopup = (e: any) => {
        this.newStreamRef.current.toggle();
    }
    OpenManageOutputPopup = (a: any) => {
        this.manageOutputRef.current.toggle();
    }
    OpenAllEventsPopup = (a: any) => {
        this.allEventRef.current.toggle();
    }
    onClickOpenSubLink = (index: any) => {
        const { streamTableData } = this.state;
        for (let i = 0; i < streamTableData.length; i++) {
            let status = streamTableData[i].actionStatus;
            if (i == index) {
                streamTableData[i].actionStatus = !status;
            }
        }
        this.setState({
            streamTableData
        })
    }
    async componentDidMount() {
        console.log("componentDidMountMethod called");
        this.getIndexSets()
        this.getStreams();
        this.getTcpInputStream();

    }
    getIndexSets = async () => {
        var requestOptions = await CommonService.requestOptionsForGetRequest();
        await fetch(config.GET_INDEX_SETS, requestOptions)
            .then(response => response.text())
            .then(result => {
                var indexSets = JSON.parse(result).index_sets;
                indexSets.forEach((element: any) => {
                    indexSetMap.set(element.id, element.title);
                });
                this.setState({
                    indexSets: indexSets,
                });
            }
            ).catch(error => console.log('error', error));
    }
    getStreams = async () => {
        var requestOptions = await CommonService.requestOptionsForGetRequest();
        await fetch(config.STREAM, requestOptions)
            .then(response => response.text())
            .then(result => {
                var streams = JSON.parse(result).streams;
                streams.forEach((item: any) => {
                    item.index_set_id = indexSetMap.get(item.index_set_id);
                });
                this.setState({
                    streamTableData: streams,
                });
            }
            ).catch(error => console.log('error', error));
    }
    getTcpInputStream = async () => {
        var requestOptions = await CommonService.requestOptionsForGetRequest();
        await fetch(config.TCP_INPUT_STREAM, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log("Json ", JSON.parse(result));
                var inputs = JSON.parse(result).inputs;
                this.setState({
                    tcpInputs: inputs,
                });
            }
            ).catch(error => console.log('error', error));
    }

    rulesTableForStream = (rules: any) => {
        var retData = [];
        for (let i in rules) {
            retData.push(
                <tr>
                    <td>{rules[i].field}</td>
                    <td>{rules[i].value}</td>
                    <td>{rules[i].description}</td>
                </tr>
            );
        }
        if (rules.length > 0) {
            return (<table className="table-sm table-striped table-bordered table-hover">
                <thead>List of Rules</thead>
                <thead>
                    <tr className="table-secondary">
                        <td>Field </td>
                        <td>Value </td>
                        <td>Description </td>
                    </tr>
                </thead>
                <tbody>
                    {retData}
                </tbody>

            </table>)
        }
    }
    displayTableOfStream = () => {
        const { streamTableData } = this.state;
        // let retData2 = streamTableData.map((rowData: any, index: any) => {
        //     console.log("Row Data : ", rowData);
        //     console.log("Row index : ", index);
        //     // rowData = JSON.stringify(rowData);
        //     // console.log("Row Data after stringfy: ", rowData);
        //     return (`
        //     <tr>
        //         <td>
        //             <h4 onClick={this.OpenAllEventsPopup}>${rowData['title']}</h4>
        //             <span>Index set: &nbsp;&nbsp;${rowData['index_set_id']}</span>
        //         </td>
        //         <td>
        //             <table className="inner-table">
        //                 <tr>
        //                     <td>
        //                         <p>${rowData['description']}</p>
        //                         <p>${rowData['rules']}&nbsp;&nbsp;
        //                     {/* <a href="#">${rowData.descriptionLink}</a> */}
        //                         </p>
        //                     </td>
        //                     <td>
        //                         <div className="d-inline-block">
        //                             <button className="blue-button m-b-0" onClick=${this.openNewStreamPopup}>Manage Rules</button>
        //                             <button className="blue-button m-b-0" onClick=${this.OpenManageOutputPopup}>Manage Output</button>
        //                             <button className="blue-button m-b-0">Manage Alerts</button>
        //                         </div>
        //                         <div className="d-inline-block table-btns">
        //                             <div className="d-inline-block enabled-disabled-container">
        //                                 <div className="enabled"></div>
        //                             </div>
        //                             <button className="btn btn-link"><i className="fa fa-edit"></i></button>
        //                             <button className="btn btn-link"><i className="fa fa-trash"></i></button>
        //                             <button className="btn btn-link" onClick=${() => this.onClickOpenSubLink(index)}><i className="fa fa-ellipsis-h"></i></button>
        //                             {rowData.actionStatus == true && <div className="text-center open-create-menu">
        //                                 <a href="#">Manage Rules</a>
        //                                 <a href="#">MAnage Outputs</a>
        //                                 <a href="#">MAnage Alerts</a>
        //                                 <a href="#">Edit Stream</a>
        //                                 <a href="#">Quick Add Rule</a>
        //                                 <a href="#">Clone this Stream</a>
        //                             </div>
        //                             }
        //                         </div>
        //                     </td>
        //                 </tr>
        //             </table>
        //         </td>
        //     </tr>
        //     `);
        // })
        let retData = [];
        for (let i = 0; i < streamTableData.length; i++) {
            let rowData = streamTableData[i];
            retData.push(
                <tr>
                    <td>
                        <h4 onClick={this.OpenAllEventsPopup}>{rowData.title}</h4>
                        <span>Index set: &nbsp;&nbsp;{rowData.index_set_id}</span>
                    </td>
                    <td>
                        <table className="inner-table">
                            <tr>
                                <td>
                                    <p>{rowData.description}</p>
                                    <p>
                                        {this.rulesTableForStream(rowData.rules)}
                                        &nbsp;&nbsp;
                                    {/* <a href="#">{rowData.descriptionLink}</a> */}
                                    </p>
                                </td>
                                <td>
                                    <div className="d-inline-block">
                                        <button className="blue-button m-b-0" onClick={this.openNewStreamPopup}>Manage Rules</button>
                                        <button className="blue-button m-b-0" onClick={this.OpenManageOutputPopup}>Manage Output</button>
                                        <button className="blue-button m-b-0">Manage Alerts</button>
                                    </div>
                                    <div className="d-inline-block table-btns">
                                        <div className="d-inline-block enabled-disabled-container">
                                            <div className="enabled"></div>
                                        </div>
                                        <button className="btn btn-link"><i className="fa fa-edit"></i></button>
                                        <button className="btn btn-link"><i className="fa fa-trash"></i></button>
                                        <button className="btn btn-link" onClick={() => this.onClickOpenSubLink(i)}><i className="fa fa-ellipsis-h"></i></button>
                                        {rowData.actionStatus == true && <div className="text-center open-create-menu">
                                            <a href="#">Manage Rules</a>
                                            <a href="#">MAnage Outputs</a>
                                            <a href="#">MAnage Alerts</a>
                                            <a href="#">Edit Stream</a>
                                            <a href="#">Quick Add Rule</a>
                                            <a href="#">Clone this Stream</a>
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
    displayTableOfTcpInputs = () => {
        const { tcpInputs } = this.state;
        let retData = [];
        for (let i = 0; i < tcpInputs.length; i++) {
            let rowData = tcpInputs[i];

            retData.push(

                <tr>
                    <td>
                        <h4 onClick={this.OpenAllEventsPopup}>{rowData.title}</h4>
                        <span>Name: &nbsp;&nbsp;{rowData["name"]}</span>
                    </td>
                    <td>
                        <table className="inner-table">
                            <tr>
                                <td>
                                    <p>{rowData.content_pack}</p>
                                    <p>{rowData.created_at}&nbsp;&nbsp;
                                    {/* <a href="#">{rowData.descriptionLink}</a> */}
                                    </p>
                                </td>
                                <td>
                                    <div className="d-inline-block">
                                        <button className="blue-button m-b-0" onClick={this.openNewStreamPopup}>Manage Rules</button>
                                        <button className="blue-button m-b-0" onClick={this.OpenManageOutputPopup}>Manage Output</button>
                                        <button className="blue-button m-b-0">Manage Alerts</button>
                                    </div>
                                    <div className="d-inline-block table-btns">
                                        <div className="d-inline-block enabled-disabled-container">
                                            <div className="enabled"></div>
                                        </div>
                                        <button className="btn btn-link"><i className="fa fa-edit"></i></button>
                                        <button className="btn btn-link"><i className="fa fa-trash"></i></button>
                                        <button className="btn btn-link" onClick={() => this.onClickOpenSubLink(i)}><i className="fa fa-ellipsis-h"></i></button>
                                        {rowData.actionStatus == true && <div className="text-center open-create-menu">
                                            <a href="#">Manage Rules</a>
                                            <a href="#">MAnage Outputs</a>
                                            <a href="#">MAnage Alerts</a>
                                            <a href="#">Edit Stream</a>
                                            <a href="#">Quick Add Rule</a>
                                            <a href="#">Clone this Stream</a>
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
                    <TopMenu />
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

                                    {this.displayTableOfStream()}

                                </table>
                            </div>
                        </div>
                        <div className="table-container">
                            <div className="table-container-inner">
                                <table className="table">
                                    <tbody>
                                        {this.displayTableOfTcpInputs()}
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