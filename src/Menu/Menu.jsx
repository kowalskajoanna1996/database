import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import MenuTree from './MenuTree';
import { ActionTypes } from '../actions/actions';

class Menu extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getToolsData();
    }

    render() {
        const { tools, isLoading, errorMsg } = this.props;

        return (
            <div>
                {tools && <MenuTree tools={tools} />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.tools.isLoading,
    errorMsg: state.tools.errorMsg,
    tools: state.tools.tools
});

const mapDispatchToProps = dispatch => ({
    getToolsData: () => dispatch({ type: ActionTypes.GET_DATA_TOOLS })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);