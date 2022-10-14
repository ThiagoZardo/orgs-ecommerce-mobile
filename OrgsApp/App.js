import React from 'react';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import Cesta from './src/screens/Cesta';
import mock from './src/mocks/cesta';


export default function App() {

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
