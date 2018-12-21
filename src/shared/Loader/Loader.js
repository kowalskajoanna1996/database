import React, { memo } from 'react';

const Loader = ({
    loaderText = 'Trwa pobieranie danych..'
}) => (
    <div className={'loader-container'}>
        <div className={'loader'}></div>
        <span className={'loader-text'}>{loaderText}</span>
    </div>
);

export default memo(Loader);