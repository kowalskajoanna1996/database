import React from 'react';

import toolsService from '../api/tools.service';

class MenuTree extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.nodeId = '0';
    }

    render() {
        const tools  = toolsService.filterTools(this.props.tools, this.nodeId);

        console.log(tools);

        return (
            <nav>
                <ul>
                    {tools && tools.map(t => <li key={t.nodeID}>{t.name}</li>)}
                </ul>
            </nav>
        )
    }
}

export default MenuTree;