import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(() => [
      ...courseGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ]);  
    // arrow function. Guarantee get latest courseGoals, because we are passing in courseGoals (into anonymous function).
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
       return currentGoals.filter((goal) => goalId != goal.id); // yields a new array. return true if keep, return false if don't want to keep.
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { // 'screen'' can be any name.
    padding: 50
  }
})

