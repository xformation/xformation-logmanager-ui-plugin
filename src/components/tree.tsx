import * as React from 'react';
import { Collapse } from 'reactstrap';

export class Tree extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            treeData: this.props.valueForTree,
        }
    };

    componentDidUpdate(prevProps:any, prevState:any){​​​​​
        if(JSON.stringify(prevProps.valueForTree) !== JSON.stringify(this.props.valueForTree)){​​​​​
            this.setState({​​​​​
                treeData: this.props.valueForTree
            }​​​​​);
        }​​​​​
    }​​​​​

    displayTreeData = () => {
        const retData = [];
        const { treeData } = this.state;
        const length = treeData.length;
        for (let i = 0; i < length; i++) {
            const folder = treeData[i];
            retData.push(this.renderTree(folder, [i]));
        }
        return retData;
    }

    renderTree = (folder: any, indexArr: any): any => {
        const retData = [];
        const subFolders = folder.subData;
        const subFolderJSX = [];
        if (subFolders != undefined) {
            for (let j = 0; j < subFolders.length; j++) {
                const subFolder = subFolders[j];
                let subIndexArr: any = [];
                subIndexArr = [...indexArr, j];
                subFolderJSX.push(
                    <ul>
                        {(subFolder.subData == undefined) &&
                            <li>
                                {subFolder.name} <span>{subFolder.type}</span>{subFolder.type == 'Array' && <a href="#">{subFolder.length}</a>}
                            </li>
                        }
                        {
                            subFolder.subData &&
                            this.renderTree(subFolder, subIndexArr)
                        }
                    </ul>
                );

            }
        }
        retData.push(
            <li>
                {folder.subData != undefined && <i className={folder.isOpened != true ? "fa fa-caret-right" : "fa fa-caret-down"} onClick={() => this.onClickOpenSubTreeArr([...indexArr])}></i>}
                {folder.name}<span>{folder.type}</span>{folder.type == 'Array' && <a href="#">{folder.length}</a>}
                {folder.isOpened == true &&
                    <Collapse>
                        {subFolderJSX}
                    </Collapse>}
            </li>

        );
        return retData;
    }

    onClickOpenSubTreeArr = (indexArr: any) => {
        const { treeData } = this.state;
        const folder = this.findChild(treeData, [...indexArr]);
        folder.isOpened = !folder.isOpened;
        this.setState({
            treeData
        });
    }

    findChild = (folderList: any, indexArr: any): any => {
        const index = indexArr.splice(0, 1)[0];
        if (indexArr.length === 0) {
            return folderList[index];
        } else {
            return this.findChild(folderList[index].subData, indexArr);
        }
    };


    render() {
        return (
            <div className="preview">
                <ul>
                    {this.displayTreeData()}
                </ul>
            </div>
        );
    }
}

export default Tree;