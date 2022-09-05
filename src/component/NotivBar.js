import React from 'react';
import { StatusBar } from 'react-native';

function NotiveBar(props) {
    return (
        <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle='dark-content'/>

    );
}

export default NotiveBar;