import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { LaunchTcpInputPopup } from './launchTcpInputPopup'
import { ContentPacksPopup } from './contentPacksPopup'
export class TopMenu extends React.Component<any, any> {
    launchTcpInputRef: any;
    contentPackPopupRef:any;
    constructor(props:any){
        super(props);
        this.state={

        }
        this.launchTcpInputRef = React.createRef();
        this.contentPackPopupRef=React.createRef();
    }
    onClickOpenTcpInputPopup = (e: any) => {
        this.launchTcpInputRef.current.toggle();

    }
    onClickOpenContentPackPopup =(e:any)=>{
        this.contentPackPopupRef.current.toggle();
    }
    render() {

        return (
            <>
            <div className="common-container">
                <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Search</button>
                <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Streams</button>
                <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Alerts</button>
                <button className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Dashboard</button>
                <button className="blue-button" onClick={this.onClickOpenTcpInputPopup} ><i className="fa fa-cog"></i>&nbsp;&nbsp; Input</button>
                <button className="blue-button" ><i className="fa fa-cog"></i>&nbsp;&nbsp; Pipeline</button>
                <Link to={`${config.basePath}/cp`} className="blue-button"><i className="fa fa-cog"></i>&nbsp;&nbsp; Content Packs</Link>
                <button className="white-button float-right back-btn"><i className="fa fa-arrow-circle-left"></i>&nbsp;&nbsp; Back</button>
               
            </div>
            <LaunchTcpInputPopup ref={this.launchTcpInputRef} />
            <ContentPacksPopup ref={this.contentPackPopupRef}/>
            </>
        )
    }
}