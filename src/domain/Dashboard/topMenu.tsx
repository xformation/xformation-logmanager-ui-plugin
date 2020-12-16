import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { LaunchTcpInputPopup } from './launchTcpInputPopup'
export class TopMenu extends React.Component<any, any> {
    launchTcpInputRef: any;
    constructor(props:any){
        super(props);
        this.state={

        }
        this.launchTcpInputRef = React.createRef();
    }
    onClickOpenCreateStreamPopup = (e: any) => {
        this.launchTcpInputRef.current.toggle();

    }
    render() {

        return (
            <>
            <div className="common-container">
                <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Search</button>
                <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Streams</button>
                <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Alerts</button>
                <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Dashboard</button>
                <button className="blue-button" onClick={this.onClickOpenCreateStreamPopup} ><i className="fa fa-cog"></i>&nbsp;&nbsp; Input</button>
                <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Pipeline</button>
                <button className="white-button float-right back-btn"><i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back</button>
               
            </div>
            <LaunchTcpInputPopup ref={this.launchTcpInputRef} />
            </>
        )
    }
}