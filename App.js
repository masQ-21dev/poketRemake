import React from 'react';
import {View, Text} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';

const App = () => {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-blue-900 font-bold text-center">Open up App.js to start working on your app!</Text>
      </View>
    </TailwindProvider>
  );
}

export default App;