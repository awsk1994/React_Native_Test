import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){ // cleaner code.
    setEnteredGoal(enteredText);
  }

  function addGoalHandler(){
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);  // arrow function. Guarantee get latest courseGoals, because we are passing in courseGoals (into anonymous function).
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler} 
          value={enteredGoal} /> 
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View>
        {courseGoals.map((goal) => <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10, // margin top and bottom
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

