import React, { memo } from 'react';
import { connect } from 'react-redux';

import ToolsTable from '../ToolsTable/ToolsTable';

const SelectedTool = ({
    tools,
    hasSelected,
    isLoading,
    errorMsg
}) => (
    <div className={'selected-tool-container'}>
        {hasSelected ? (
            <ToolsTable tools={tools} />
        ) : (
            <h2 className={'title'}>Aby zobaczyć dane, wybierz narzędzie z menu aplikacji!</h2>
        )}
    </div>
);

const mapStateToProps = state => ({
    isLoading: state.tool.isLoading,
    errorMsg: state.tool.errorMsg,
    tools: state.tool.toolTable,
    hasSelected: state.tool.hasSelected
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectedTool);
