import React, { PureComponent } from 'react';

import toolsService from '../../api/tools.service';

class SingleTree extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            children: this.getTools(this.props.nodeID),
            showChildren: false
        }
    } 

    getTools(nodeId) {
        return toolsService.filterTools(nodeId);
    }

    showChildren = () => {
        if(this.state.children && this.state.children.length)
            this.setState(prevState => ({ showChildren: !prevState.showChildren }));
        else if(this.props.subTable)
            this.props.selectTool(this.props.nodeID);
    }

    render() {
        const {
            name,
            subTable,
            selectTool
        } = this.props;
        const {
            children,
            showChildren
        } = this.state;

        return (
            <li className={'single-list ' + (children && children.length ? 'hasItems ' : '') + (showChildren ? 'show ' : '' + (subTable ? 'clickable' : ''))}>
                <span className={'list-name'} onClick={this.showChildren}>
                    {children && !!children.length && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                        </svg>
                    )}
                    {name}
                </span> 
                {children && !!children.length &&  (
                    <ul className={'sublist'}>
                        {children.map((c, i) => (
                                <SingleTree
                                    key={c.name + i}
                                    name={c.name}
                                    nodeID={c.nodeID}
                                    keyID={c.keyID}
                                    subTable={c.subTable}
                                    selectTool={selectTool}
                                />
                            )
                        )}
                    </ul>
                )}
            </li>
        )
    }
}

export default SingleTree;