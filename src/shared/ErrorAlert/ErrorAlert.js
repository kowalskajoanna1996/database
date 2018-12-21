import React, { Component, memo } from 'react';

const ErrorAlert = ({
    alertText = 'Wystąpił błąd'
}) => (
    <div className={'alert-container'}>
        <span className={'alert-text'}>{alertText}</span>
    </div>
);

export default memo(ErrorAlert);