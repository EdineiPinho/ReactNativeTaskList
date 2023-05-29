import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  const image = require('./resources/task.jpg');


  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={image} style={styles.image} >
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>Task List</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 100,
  },

  coverView: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHeader: {
    display: 'flex',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 4,
  },
})