# React Native Test

## How to run?
```
cd newProject1
npm run android
```

## 7. Creating our First React Native App

(Tutorial on https://docs.expo.io/)

1. npm install expo-cli --global (sudo npm install expo-cli --global)
2. expo init my-project
   - blank
   - Enter name, leave slug
   - yarn? choose n to use npm. (usually choose npm)
3. cd my-project
4. npm start

## 8. Working on our First App

 - Now, let's look at App.js

```javascript
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Some Output...</Text>
    </View>
  );  // This is jsx. This will display "Some Output..." on the screen.
}
```

 - If we open the app on Expo, we will see "Some Output..." on the screen.

 - Next, we want to add some state. We will be using a concept called Hook.

```javascript
export default function App() {
  const [outputText, setOutputText] = useState("Default");  // <-- uses a React concept called 'Hook'
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={() => setOutputText("Text Changed")}/>
    </View>
  );
}
```

 - As shown in the first comment in the code snippet above, this returns us an outputText(a variable) and setOutputText(a function).
   - we use outputText to display
   - we use setOutputText to change the text
 - We will also modify the jsx slightly to include a button to change the text we display.

## 23. Getting Started with Styles

 - To understand everything, we will start from scratch.

```javascript
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{}}>
      <View>
        <TextInput/>
        <Button title="ADD"/>
      </View>
      <View>

      </View>
    </View>
  );
}
```
 - To see what kidn of styles to add to View, refer to this link: https://reactnative.dev/docs/view-style-props

```javascript
<TextInput 
placeholder="Course Goal" 
style={{borderBottomColor: 'black', borderBottomWidth: 1, padding: 10}}/>
<Button title="ADD"/>
```

 - And then, we add a placeholder and style to the text input.


## 24. Flexbox & Layouts (Intro)

 - Flexbox allow us to lay out components either vertically or horizontally. We can control this using flexDirection.

```javascript
<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
  <TextInput 
  placeholder="Course Goal" 
  style={{width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10}}/>
  <Button title="ADD"/>
</View>
```
 - As shown in code snippet above (in View), we set:
   - flexDirection to 'row': meaning we want to lay out components horizontally.
   - justifyContent to 'space-between': meaning we want all the remaining space to be in between the components. In this case, it makes the textInput and Button on either ends and a huge space in between.
   - alignItems to 'center': this will center things.



