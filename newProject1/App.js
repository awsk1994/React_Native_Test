import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{flexDirection: 'row', width: '80%', height: 100}}>
      <View style={{backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>1</Text>
      </View>
      <View style={{backgroundColor: 'blue', flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Text>2</Text>
      </View>
      <View style={{backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>3</Text>
      </View>
    </View>
  );
}
