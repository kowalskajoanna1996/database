import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import HocLoader from './../../shared/HocLoader/HocLoader';
import MenuList from './../MenuList/MenuList';
import { ActionTypes } from '../../actions/actions';

class MenuTree extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            selectTool
        } = this.props;

        return (
            <nav className={'navigation'}>
                <h2 className={'nav-title'}>Menu Aplikacji</h2>
                <MenuList selectTool={selectTool} />
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.data.isLoading,
    errorMsg: state.data.errorMsg,
    tools: state.data.tools
});

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch({ type: ActionTypes.GET_DATA_TOOLS }),
    selectTool: nodeID => dispatch({ type: ActionTypes.GET_SELECTED_TOOL, data: nodeID })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HocLoader(MenuTree));