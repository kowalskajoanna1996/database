import React from 'react';

const ToolInformation = ({
    tool, keys
}) => {
    return (
        <div className={'tool-information'}>
            {keys
                .map(k => <span key={k}>{tool[k]}</span>)
            }
        </div>
    )
}

export default ToolInformation;