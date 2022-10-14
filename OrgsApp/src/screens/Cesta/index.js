import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Header from './components/Header';
import Details from './components/Details';

const width = Dimensions.get('screen').width;

const Cesta = ({ header, details }) => {
  return (
    <>
    <Header { ...header } />
      <View style={ styles.cesta }>
        <Details { ...details } />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },  

})

export default Cesta;