import React from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import LinearGradient from 'react-native-linear-gradient';

import NotiveBar from '../component/NotivBar';


const LandingPage = () => {
    return (
        <TailwindProvider>
        <View className="flex-1">
        <ImageBackground
          className="flex-1"

          source={require('../assets/img/ViewBg.png')}>
          <NotiveBar/>


          <View className="flex-1"
            style={{backgroundColor:'rgba(0,0,0,0.3)'}}>
            <Text
              className="text-center font-bold text-5xl pt-20 mt-20" style={{color:'#FFB9B9'}}>
              POCKET ITERA
            </Text>

            <View className="self-center mt-10">
            <Image source={require('../assets/img/logo-itera.png')} style={{height:78, width:78}} />
            </View>
          </View>

          <View
            style={{backgroundColor:'rgba(0,0,0,0.3)'}}>
            <LinearGradient colors={[ '#FFB4B400', '#D74141']} className="pb-7 pt-8" >
              <View className="flex-row items-center mt-40">
                <View className="flex-1 h-1 mr-5 ml-8" style={{backgroundColor:'#FFF'}} />
                <Text className="text-center text-white pb-10">
                  {'Infromasi dan Layanan Akademik \n akan segera berada dalam \n genggamanmu'}
                </Text>
                <View className="flex-1 h-1 ml-5 mr-8" style={{backgroundColor:'#FFF'}} />
              </View>
              <TouchableOpacity className=" flex-row bg-white items-center justify-center mx-10 py-3 rounded-3xl mt-5 mb-10">
                <Text className="font-bold">masuk</Text>
              </TouchableOpacity>


            </LinearGradient>
          </View>
        </ImageBackground>
      </View>
    </TailwindProvider>
    );
}

export default LandingPage;