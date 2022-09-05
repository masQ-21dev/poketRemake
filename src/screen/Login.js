import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';

const Login = () => {
    return (
    <TailwindProvider>
        <ImageBackground source={require("../assets/img/background.png")} className="flex-1">
        <Text>adi </Text>
        </ImageBackground>
    </TailwindProvider>
    );
}

export default Login;