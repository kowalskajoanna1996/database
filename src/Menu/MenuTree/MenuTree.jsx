import React, { PureComponent } from 'react';
import toolsService from './../../api/tools.service';

import MenuList from './../MenuList/MenuList';
import Loader from './../../shared/Loader/Loader';
import ErrorAlert from './../../shared/ErrorAlert/ErrorAlert';

class MenuTree extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            errorMsg: ''
        }
    }

    componentDidMount() {
        toolsService.getTools()
            .then(res => {
                this.setState(prevState => ({ loading: false }))
            }).catch(err => {
                this.setState(prevState => ({ loading: false, errorMsg: 'Wystąpił błąd podczas pobierania narzędzi.' }));
            })
    }

    render() {
        const {
            selectTool
        } = this.props;
        const {
            loading,
            errorMsg
        } = this.state;

        return (
            <nav className={'navigation'}>
                {loading ? (
                    <Loader loaderText={'Ładowanie narzędzi'} />
                ) : errorMsg ? (
                    <ErrorAlert alertText={errorMsg} />
                ) : (
                    <div>
                        <h2 className={'nav-title'}>Menu Aplikacji</h2>
                        <MenuList selectTool={selectTool} />
                    </div>
                )}
            </nav>
        );
    }
}

export default MenuTree;