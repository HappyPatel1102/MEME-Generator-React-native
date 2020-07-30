
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


export default class SplashScreen extends React.Component {


  render() {
    return (

      <View style={styles.container}>

      <Text style={styles.text}> MEME Generator </Text>

      <Image style={styles.img} source={require('../assets/logo2.jpg')}/>

      </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img:{
    height: 170,
    width: 170,
     borderRadius: 8,
    borderWidth: 0.5,
    
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold',
    color:'#000',
    marginBottom:20
  }

});


