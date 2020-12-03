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
 - Every View in React Native uses Flexbox by default (direction set to vertical).
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

 - We will explain these in more details in the next section.

## 25. React Native Flexbox Deep Dive

 - To explain Flexbox more, we will have three boxes.

```javascript
<View style={{flexDirection: 'row'}}>
  <View style={{backgroundColor: 'red'}}>
    <Text>1</Text>
  </View>
  <View style={{backgroundColor: 'blue'}}>
    <Text>2</Text>
  </View>
  <View style={{backgroundColor: 'yellow'}}>
    <Text>3</Text>
  </View>
</View>
```
<img src="newProject1/assets/notes/25_initial.png"/>

 - Now, we will add more flexbox configurations.

```javascript
<View style={{flexDirection: 'row', width: '80%', height: 100}}>
  <View style={{backgroundColor: 'red'}}>
    <Text>1</Text>
  </View>
  <View style={{backgroundColor: 'blue'}}>
    <Text>2</Text>
  </View>
  <View style={{backgroundColor: 'yellow'}}>
    <Text>3</Text>
  </View>
</View>
```

<img src="newProject1/assets/notes/25_flexConfig1.png"/>

 - As you can see, after we added width and height on the parent View style, the child has taken up all of the height, but not all the width (only takes up the minimum width necessary). 
   - This is because there exists a concept of **main axis** and **cross axis**. This is determined by the flexDirection; If flexDirection is row, the main axis is horizontal. vice versa. 
   - By default, components in a View takes up all the cross axis (in this case, the height). But not the main axis (in this case, the width).
     - That being said, we can control how the main axis is distributed via a 'flex' property (explained later).
 - To recap a previous concept in more details:
   - flexDirection: set our main and cross axis.
   - justifyContent: configure child component in main axis.
   - alignitems: configure child component in cross axis.

**Flex Property**

```javascript
<View style={{backgroundColor: 'red', flex: 1}}>
  <Text>1</Text>
</View>
```
<img src="newProject1/assets/notes/25_flexProperty1.png"/>

 - As you can see, when we add the flex property to the '1' child view, '1' child view takes up all the **remaining space**.

```javascript
<View style={{backgroundColor: 'red', flex: 1}}>
  <Text>1</Text>
</View>
<View style={{backgroundColor: 'blue', flex: 1}}>
  <Text>2</Text>
</View>
``` 

<img src="newProject1/assets/notes/25_flexProperty2.png"/>

 - As you can see, when we add the flex property with same value to two child views, they share the remaning space.

```javascript
<View style={{flexDirection: 'row', width: '80%', height: 100}}>
  <View style={{backgroundColor: 'red', flex: 1}}>
    <Text>1</Text>
  </View>
  <View style={{backgroundColor: 'blue', flex: 2}}>
    <Text>2</Text>
  </View>
  ```

<img src="newProject1/assets/notes/25_flexProperty3.png"/>

- As you can see, when we change the '2' child view's flex property to 2, the reamining space shared to '2' is 2/3 of remaining space, and shared to '1' is 1/3. 
   - This is because '1' has flex: 1, 
   '2' has flex: 2.

```javascript
<View style={{backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
...
<View style={{backgroundColor: 'blue', flex: 2, justifyContent: 'center', alignItems: 'center'}}>
...
<View style={{backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
...
```

<img src="newProject1/assets/notes/25_flexTidyingUp.png"/>

 - Lastly, we can tidy it up slightly by assigning justifyContent and alignItems.

