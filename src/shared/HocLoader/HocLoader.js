import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import ErrorAlert from '../ErrorAlert/ErrorAlert';

const HocLoader = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            this.props.getData();
        }

        render() {
            const { 
                isLoading, 
                loaderText,
                errorMsg, 
                ...restProps 
            } = this.props;

 
            return (
                <div>
                    {isLoading ? (
                        <Loader loaderText={loaderText} />
                    ) : (
                        errorMsg ? (
                            <ErrorAlert alertText={errorMsg} />
                        ) : (
                            <WrappedComponent {...restProps} /> 
                        )
                    )}
                </div>
            )
        }
    }
}

export default HocLoader;