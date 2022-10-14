import React from 'react';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import Basket from './src/screens/Cesta';
import mock from './src/mocks/basket';


export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}
