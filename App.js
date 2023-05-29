import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const image = require('./resources/task.jpg');

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ ...styles.theme, flex: 1 }}>
      <ImageBackground source={image} style={styles.image} >
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>
            Lista de Tarefas
          </Text>
        </View>
      </ImageBackground>


      <ScrollView>
        <View style={styles.vTarefaSingle}>
          <View style={{ flex: 1, width: '80%', paddingLeft: 24 }}>
            <Text style={{ color: '#ddd', fontSize: 16 }}>
              Acordar cedo dia 28 às 15h para correr
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end', flex: 1, paddingRight: 24 }}>
            <TouchableOpacity>
              <AntDesign name="minuscircleo" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  theme: {
    backgroundColor: '#111',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 130,
  },

  coverView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 130,
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
    fontFamily: 'Inter_900Black',
  },

  vTarefaSingle: {
    marginTop: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    paddingBottom: 10,

  }
})