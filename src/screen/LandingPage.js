/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

const LandingPage = () => {
    return (
        <TailwindProvider>
            <View className="flex-1">
        <ImageBackground
          className="flex-1"
          source={require('../assets/img/ViewBg.jpg')}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle='light-content'/>

          <View className="flex-1"
            style={{backgroundColor:'rgba(0,0,0,0.4)'}}>
            <Text
              className="text-center font-bold text-white text-4xl pt-20">
              Selamat Datang
            </Text>
            <Text
              className="text-center text-white">
              Negeri indah penuh warna
            </Text>
          </View>
          <View className="pb-6"
            style={{backgroundColor:'rgba(0,0,0,0.4)'}}>
            <View className="flex-row items-center">
              <View className="flex-1 h-1 mr-5 ml-8" style={{backgroundColor:'#eee'}} />
              <Text className="text-center text-white font-bold">
                Login dengan
              </Text>
              <View className="flex-1 bg-green-50 h-1 ml-5 mr-8" />
            </View>
            
            <TouchableOpacity className=" flex-row bg-white items-center justify-center mx-10 py-2 rounded-3xl mt-5">
              <Image source={require('../assets/img/google.png')}
                className="h-6 w-6 mr-2" />
              <Text className="font-bold">Login dengan google</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" flex-row items-center justify-center mx-10 py-2 rounded-3xl mt-2"
              style={{backgroundColor:'#4267B2'}}>
              <Image source={require('../assets/img/facebook.png')}
                className="h-6 w-6 mr-2" />
              <Text className="text-white font-bold">Login dengan facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" flex-row items-center justify-center mx-10 py-2 rounded-3xl mt-2"
              style={{backgroundColor:'#0077b5'}}>
              <Image source={require('../assets/img/linkedin.png')}
                className="h-6 w-6 mr-2" />
              <Text className="text-white font-bold">Login dengan linkedin</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text className="text-white text-center pt-5">Belum punya akun? <Text className="font-bold">Daftar Sekarang</Text></Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
        </TailwindProvider>
    );
}

export default LandingPage;