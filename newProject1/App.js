import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput} />
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { // 'screen'' can be any name.
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10
  }
})

