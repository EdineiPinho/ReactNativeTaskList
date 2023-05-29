import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Modal, TouchableHighlight, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const image = require('./resources/task.jpg');
  const [tarefas, setTarefas] = useState([]);
  const [modal, setModal] = useState(false);
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [ultimoID, setUltimoID] = useState(0);

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }

  function deletarTarefa(id) {
    let updatedTasks = tarefas.filter((val) => {
      return val.id != id;
    })
    setTarefas(updatedTasks);
  }

  function addTarefa() {
    if (tarefaAtual) {
      setTarefaAtual('');
      let tarefa = { id: ultimoID + 1, tarefa: tarefaAtual }
      setTarefas([...tarefas, tarefa]);
      setUltimoID(ultimoID + 1);
      setTarefaAtual('');
    }
    else {
      alert('Adicione algum texto para adicionar a tarefa.');
      setModal(true);
    }
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
      <ScrollView style={styles.scrollView}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modal}
          onRequestClose={
            () => {
              Alert.alert("Modal has been closed.")
            }
          }
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                onChangeText={text => setTarefaAtual(text)}
                style={styles.modalTextInput} autoFocus={true} placeholder='Digite a nova tarefa aqui' placeholderTextColor={'#ccc'}>

              </TextInput>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#29f' }}
                onPress={() => {
                  addTarefa();
                  setModal(!modal);
                }}
              >
                <Text
                  style={styles.textStyle}
                >
                  Adicionar Tarefa
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        {
          tarefas.map(function (val) {
            return (
              <View style={styles.vTarefaSingle}>
                <View style={{ flex: 1, width: '80%' }}>
                  <Text style={{ color: '#ddd', fontSize: 16 }}>
                    {val.tarefa}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => deletarTarefa(val.id)}
                  >
                    <AntDesign name="minuscircleo" size={24} color="#a22" />
                  </TouchableOpacity>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
      <StatusBar style="auto" />
      <View style={styles.vAddTarefas}>
        <TouchableOpacity onPress={() => setModal(true)}>
          <AntDesign name="pluscircleo" size={48} color="#0a5" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  theme: {
    backgroundColor: '#111',
    position: 'relative'
  },

  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 130,
  },

  scrollView: {
    position: 'relative',
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
    fontSize: 36,
    textAlign: 'center',
    padding: 4,
    fontFamily: 'Inter_900Black',
  },

  vTarefaSingle: {
    display: 'flex',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  modalView: {
    margin: 12,
    backgroundColor: '#666',
    borderRadius: 4,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 5,
    width: '90%',
  },

  textStyle: {
    color: '#ddd',
    padding: 12,
    fontSize: 18,
    paddingHorizontal: 24,
  },

  openButton: {
    borderRadius: 4,
  },

  modalTextInput: {
    color: '#eee',
    backgroundColor: '#333',
    padding: 12,
    marginBottom: 18,
    width: '100%',
    fontSize: 16,
  },

  vAddTarefas: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },

  btnAddTarefas: {

  }

})