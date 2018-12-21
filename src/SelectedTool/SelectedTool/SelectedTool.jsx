import React, { memo } from 'react';
import { connect } from 'react-redux';

const SelectedTool = ({
    toolTable,
    hasSelected,
    isLoading,
    errorMsg
}) => (
    <div className={'selected-tool-container'}>
        {hasSelected ? (
            <span>wybral xD</span>
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
