import React, { PureComponent } from 'react';

import ToolsTable from '../ToolsTable/ToolsTable';
import toolsService from './../../api/tools.service';
import Loader from './../../shared/Loader/Loader';
import ErrorAlert from './../../shared/ErrorAlert/ErrorAlert';

class SelectedTool extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            errorMsg: '',
            tools: null
        };
    }

    componentDidUpdate(prevProps) {
        if(prevProps.selectedTool !== this.props.selectedTool) {
            this.getSelectedTool(this.props.selectedTool.nodeID);
        }
    }

    getSelectedTool(nodeID) {
        toolsService.getTool(nodeID)
            .then(data => {
                this.setState(prevState => ({ loading: false, tools: data }))
            })
            .catch(err => {
                this.setState(prevState => ({ loading: false, errorMsg: 'Błąd podczas pobierania narzędzia. '}));
            })
    }

    render() {
        const {
            loading,
            errorMsg,
            tools
        } = this.state;
        const {
            hasSelected
        } = this.props;

        return (
            <div className={'selected-tool-container'}>
                {hasSelected ? (
                    loading ? (
                        <Loader loaderText={'Ładowanie narzędzi'} />
                    ) : errorMsg ? (
                        <ErrorAlert alertText={errorMsg} />
                    ) : (
                        <div>
                            <h2 className={'nav-title'}>Menu Aplikacji</h2>
                            <ToolsTable tools={tools} />
                        </div>
                    )
                ) : (
                    <h2 className={'title'}>Aby zobaczyć dane, wybierz narzędzie z menu aplikacji!</h2>
                )}
            </div>
        )
    }
}

export default SelectedTool;