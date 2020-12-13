import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText) => { // cleaner code.
    setEnteredGoal(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={goalInputHandler} 
        value={enteredGoal} /> 
      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}/>
    </View>
  );
  // Note that if we pass props.onAddGoal(enteredGoal), with arrow function, we have a problem where the function will be executed on render. To fix this, we use arrow functions.

};

const styles = StyleSheet.create({
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
});

export default GoalInput;