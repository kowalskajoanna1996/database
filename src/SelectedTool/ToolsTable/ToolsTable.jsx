import React, { PureComponent, Fragment } from 'react';

import ToolInformation from './../ToolInformation/ToolInformation';

class ToolsTable extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            tool: null
        };
    }

    selectTool = tool => {
        this.setState(prevState => ({ tool }));
    }

    render() {
        const {
            tools
        } = this.props;
        const {
            tool
        } = this.state;
        const keys = this.getKeysFromFirstItem(tools);

        return (
            <Fragment>
                <div className={'table-container'}>
                    <table className={'tools-table'}>
                        <thead>
                            <tr>
                                {keys && keys
                                    .map(k => <th key={k}>{k}</th>)    
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {tools && tools
                                .map((t, i) => (
                                    <tr key={i} onClick={() => this.selectTool(t)}>
                                        {keys && keys
                                            .map(k => (
                                                <td key={k}>{t[k]}</td>
                                            ))
                                        }
                                    </tr>
                                ))    
                            }
                        </tbody>
                    </table>
                </div>
    
                {tool && <ToolInformation tool={tool} keys={keys} />}
            </Fragment>
        )
    }

    getKeysFromFirstItem(tools) {
        return tools && !!tools.length && Object.keys(tools[0]);
    }
}

export default ToolsTable;