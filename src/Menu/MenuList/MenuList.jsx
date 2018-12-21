import React, { PureComponent } from 'react';

import SingleTree from './../SingleTree/SingleTree';
import toolsService from '../../api/tools.service';

class MenuList extends PureComponent {
    mainKeyId = '0';

    constructor(props) {
        super(props);
 
        this.state = {
            tools: this.getTools()
        }
    }

    getTools() {
        return toolsService.filterTools(this.mainKeyId); 
    }

    render() {
        const {
            selectTool
        } = this.props;
        const {
            tools
        } = this.state;
        
        return (
            <ul className={'main-menu-list'}>
                {tools && tools.map((t, i) => (
                    <SingleTree 
                        key={t.name + i}
                        name={t.name}
                        nodeID={t.nodeID}
                        keyID={t.keyID}
                        subTable={t.subTable}
                        selectTool={selectTool}
                    />
                ))}
            </ul>
        );
    }
}

export default MenuList;