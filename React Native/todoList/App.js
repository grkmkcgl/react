import React from 'react';
import {ScrollView, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard} from 'react-native';
import Task from './components/Task';
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <ScrollView>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Bugün Yapılması Gereken İşlerin</Text>
          <Text>Görevlerini aksatma.</Text>
        <View style={styles.items}>
          {/* Görevlerin duracağı yer. */}
          <Task text={'Sabit text'} />
          <Task text={'Sabit text'} />
          <Task text={'Sabit text'} />
          <Task text={'Sabit text'} />
          <Task text={'Sabit text'} />
          <Task text={'Sabit text'} />
          <Task text={'Sabit text'} />
          <Task text={'Sabit text'} />
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      
      </ScrollView>
      

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Yeni bir iş ekleyin.'} value={task} onChangeText={text => setTask(text)} />

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fca103',
  },
  tasksWrapper : {
    paddingTop: 60,
    paddingHorizontal: 40,
  },
  sectionTitle : {
    margin: 'auto',
    fontSize: 24,
    fontWeight: 'bold'
  },
  items : {
    margin: 10,
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});