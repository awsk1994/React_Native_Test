# React Native Test

## How to run?

```
cd newProject1
npm run android -OR- npm start
```

## Tutorial Link

 - https://www.udemy.com/course/react-native-the-practical-guide

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

 - Lastly, we can tidy it up slightly with justifyContent and alignItems.

## 26. Inline Styles & StyleSheet Objects

 - Using inline styles can be messy as the styles increase. Therefore, we use something called **StyleSheet**.
 - Another advantage is by using StyleSheet, any style errors will be caught and thrown. (whereas inline style errors fail silently).

```javascript
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'; // import StyleSheet.
```

 - First, we need to import StyleSheet.
 - To use stylesheet, we need to create an instance of StyleSheet first: 

```javascript
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
```
 - 'screen', 'inputContainer' and 'textInput' can be any name.
 - To apply styles, we do this:

```javascript
<View style={styles.inputContainer}>
```

 - To compare, we will show before and after below.

**Before StyleSheet:**

```javascript
<View style={{ padding: 30 }}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <TextInput
      placeholder="Course Goal"
      style={{ width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10 }} />
    <Button title="ADD" />
  </View>
  <View>
  </View>
</View>
```

**After StyleSheet:**

```javascript
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
```
```javascript
<View style={styles.screen}>            <!--Added styles here -->
  <View style={styles.inputContainer}>  <!--Added styles here -->
    <TextInput
      placeholder="Course Goal"
      style={styles.textInput} />       <!--Added styles here -->
    <Button title="ADD" />
  </View>
</View>
```
```javascript
const styles = StyleSheet.create({
  screen: { // 'screen'' can be any name.
    padding: 50
  }
  ...
})
```

## 27. Working with State & Events

```javascript
import React, { useState } from 'react';
```

 - First, we need to import useState.

```javascript
const [enteredGoal, setEnteredGoal] = useState('');
```
 - Then, we use useState('') to return a string and a function modify it.
   - enteredGoal is the string/variable to display.
   - setEnteredGoal is a function to set the enteredGoal string/variable.

```javascript
<TextInput
  placeholder="Course Goal"
  style={styles.textInput}
  value={enteredGoal} 
  onChangeText={goalInputHandler} /> 
```
 - Then, we add the 'value' property to TextInput, setting it to enteredGoal. This will display enteredGoal in the TextView.
 - Then, we add the 'onChangeText' property. When we enter a new character into the textInput, it will trigger the function in onChangeText and update the new value to enteredGoal.
   - Note that you **don't need to add parenthesis** to goalInputHandler (explained below), otherwise, this will execute this method when the UI is rendered for the first time.

```javascript
function goalInputHandler(enteredText){ // cleaner code.
  setEnteredGoal(enteredText);
}
```

 - goalInputHanlder is a separate function we write. We use this (almost like a wrapper) instead of setEnteredGoal for cleaner code (incase we need to make additional changes in the future).

**Configuring the ADD button**

 - Next, we add 'onPress' property to the 'ADD' button. When we press this button, the function in onPress will be triggered.

```javascript
<Button title="ADD" onPress={addGoalHandler}/>
```

 - addGoalHandler will add the entered goal(enteredGoal) to the list of goals. But for now, we will simply console.log the enteredGoal.

```javascript
function addGoalHandler(){
  console.log(enteredGoal);
}
```

**Implementing addGoalHandler**

```javascript
const [courseGoals, setCourseGoals] = useState([]);
```

 - First, we define a courseGoals array, and a function to update it.

```javascript
function addGoalHandler(){
  // [...courseGoals] means to copy the courseGoals to this new array. 
  // And ,enteredGoal adds enteredGoal to the new array.
  setCourseGoals([...courseGoals, enteredGoal]);
}
```

 - But this **does not guarantee we get latest courseGoals**.

```javascript
function addGoalHandler(){
  setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);  // arrow function.
}
```

 - We can use anonymous function to guarantee we get the latest courseGoals, because we are passing courseGoals (into anonymous function).

## 28. Outputting a List of Items

```javascript
<View>
  {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
</View>
```

 - In the above code, we take courseGoals and map it to a Text component via arrow function and map(..)
   - Note that we need to add a key prop(property), so React can figure out which Text component to update in the future.
   - We will set key prop to goal for now. WARNING: key prop should be unique. For now, we will assume goal is unique.


## 29. Styling List Items
```js
{courseGoals.map((goal) => <View style={styles.listItem}><Text key={goal}>{goal}</Text></View>)}
```
```js
listItem: {
  padding: 10,
  marginVertical: 10, // margin top and bottom
  backgroundColor: '#ccc',
  borderColor: 'black',
  borderWidth: 1
}
```
 - Add style to View.

```js
{courseGoals.map((goal) => <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
```
 - We need to move the key to the root element (which is the View, not the Text) (Or else, you will get a warning).

## 30. Making it Scrollable with ScrollView!

 - For now, once the number of boxes is more than the page can fit, ti should be scrollable. So, we want to implement this.

```js
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
```

```js
<ScrollView>
  {courseGoals.map((goal) => <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
</ScrollView>
```
 - We switch from <View\> to <ScrollView\>

## 31. A Better List: FlatList

 - ScrollView is not efficient if our list is very long, because it renders all the elements in our list (even those that we don't show yet). An efficient way is to only render the view/elements that is shown to the user.
 - Change to use FlatList:
```js
<FlatList
  data={courseGoals}
  renderItem={itemData => (
    <View style={styles.listItem}>
      <Text>{itemData.item}</Text>
    </View>
  )}
/>
```

 - However, as shown below, we get a warning, because we didn't define a key.
<img src="./img/FlatListMissingKey.png" height="500px"/>

 - To fix this, we need to our courseGoals from a list of Strings to a list of Objects (that contains a key and value/string).
 - Specifically, we modify addGoalHandler; replacing  enteredGoal with an Object: 
```js
{
  key: Math.random().toString(),  // temporary(non-perfect) way to assign key. Must use 'key' as the key (for now).
  value: enteredGoal  // The key doesn't have to be 'value'. Can be anything, as long as you reference it later.
}
```
 - We will use a random number (string format) to set the key for now.
   - The key also must be 'key'.
 - The 'value' can be anything as long as you refernece it later on; eg. 'val', 'goal'.etc. 
```js
function addGoalHandler(){
  setCourseGoals(() => [...courseGoals, {key: Math.random().toString(), value: enteredGoal}]);  // arrow function. Guarantee get latest courseGoals, because we are passing in courseGoals (into anonymous function).
}
```

 - Because we changed to use array of object, we need to change the renderItem's Text value to *itemData.item.value*.
```js
<FlatList
  data={courseGoals}
  renderItem={itemData => (
    <View style={styles.listItem}>
      <Text>{itemData.item.value}</Text>  <!-- MODIFY HERE -->
    </View>
  )}
/>
```

 - Now, you shouldn't see an error.
 - Let's say we really don't want to use the key 'key', and instead use 'id'. This is possible.

```js
function addGoalHandler(){
  setCourseGoals(() => [...courseGoals, {id: Math.random().toString(), value: enteredGoal}]);  // arrow function. Guarantee get latest courseGoals, because we are passing in courseGoals (into anonymous function).
}
```

 - We need to add a keyExtractor with a function that outputs the id.

```jsx
<FlatList
  keyExtractor={(item, index) => item.id}  // ADDED THIS!
  data={courseGoals}
  renderItem={itemData => (
    <View style={styles.listItem}>
      <Text>{itemData.item.value}</Text>
    </View>
  )}
/>
```

## 32. Splitting the App Into Components
 
 - Now, we want to the jsx in App.js into multiple components. Let's focus on the component in the FlatList first.

 - Creating components/GoalItem.js:

```js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {   // the Input is props.
  return (
    <View style={styles.listItem}>  <!--Explained later-->
      <Text>{props.title}</Text>  
      <!--Instead of getting itemData.item.value, we are getting the string from props (our input)'s title. Title can be anything, as long as we use the same when we refer from App.js-->
    </View>
  )
}
export default GoalItem; // Export this component
``` 

 - We also include a StyleSheet component to configure our styles.
```js
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10, // margin top and bottom
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})
```

 - Now, we modify App.js to use GoalItem component. 
 - First, import GoalItem.
```js
import GoalItem from './components/GoalItem';
```

 - Then, modify FlatList's renderItem.
```js
<FlatList
  keyExtractor={(item, index) => item.id}
  data={courseGoals}
  renderItem={itemData => <GoalItem title={itemData.item.value}/>}
/>
```
 - Notice that we input use the title property in GoalItem, because we refer to the same data 'title' in the GoalItem.js component.

## 33. Passing Data Between Components

 - Next, we move the Text Input and Add Goal button to its own component (./components/GoalInput.js)

 - This is very similar to what we did in 32.
```js
import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={??}                 <!-- ?? -->
        value={??} />                     <!-- ?? -->
      <Button title="ADD" onPress={??}/>  <!-- ?? -->
    </View>
  );
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
```

 - But as you can see in the ?? comments, we need some way to refer to the data-related functions/variables. 

 - Let's move the enteredGoal and goalInputHandler to GoalInput.js

```js
const [enteredGoal, setEnteredGoal] = useState('');
const goalInputHandler = (enteredText) => { // cleaner code.
  setEnteredGoal(enteredText);
}
```

```js
<View style={styles.inputContainer}>
  <TextInput
    placeholder="Course Goal"
    style={styles.textInput}
    onChangeText={goalInputHandler} 
    value={enteredGoal} />
  <Button title="ADD" onPress={??}/>  <!-- ?? -->
</View>
```

 - Now, we solve 2 of the ??. But we have 1 more; the button handler function.
 - We can pass the button function. But the previous implementation refers to enteredGoal, and we moved enteredGoal to GoalInput.js. Thus, we modify the button function to take in an argument goalTitle:
```js
const addGoalHandler = (goalTitle) => {
  setCourseGoals(() => [
    ...courseGoals, 
    {id: Math.random().toString(), value: goalTitle}
  ]);  
  // arrow function. Guarantee get latest courseGoals, because we are passing in courseGoals (into anonymous function).
}
```
```js
<GoalInput onAddGoal={addGoalHandler}/>
```

 - In GoalInput.js, we can refer to the addGoalHandler fn via props.onAddGoal.
```js
<Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}/>
```
 - in onPress, you will see that we are not using onPress = props.onAddGoal(enteredGoal). This is because if we use a function with parenthesis directly, it will be executed in render time.
 - But we also need to add parenthesis in order to input an argument.
 - To fix this, we use an arrow function. This way, we bind props.onAddGoal(..) to onPress without executing it in render time.

## 34. Working with Touchable Components
 - Now, we want to delete items from our list when we tap it.

 - First, we import TouchableOpacity into GoalItem.js.
```js
import { TouchableOpacity } from 'react-native';
```
 - Then, we wrap it around the view (of each item) we have.
```js
<TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
  <View style={styles.listItem}>
    <Text>{props.title}</Text>
  </View>
</TouchableOpacity>
```

 - In App.js, we insert the onPress function via onPress. This will correspond to the props.onPress in GoalItem.js
```js
<FlatList
  renderItem={itemData => <GoalItem onPress={() => console.log("delete")}
/>
```

 - Now, when we tap an item in the list, we will see a console.log. 
 - Note that it is possible to use View's onTouchStart and onTouchEnd to do this, but this is too low level. We have to figure out long/short press manually. It is better to use the Touchable class.
 - Within the Touchable class, there are many types; Touchable, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback (only runs on Android), TouchableWithoutFeedback; you can figure those out yourself.

## 35. Deleting Items

 - Now, we want to actually delete the item.
 - In App.js, in FlatList, we change the onDelete fn to use removeGoalHandler instead of console.log. We also add an id props to help us identity the item to delete.
```js
<FlatList renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler}/>}
/>
```

 - In removeGoalHandler, we take currentGoals, perform a filter and use the result to set into CourseGoals.
```js
const removeGoalHandler = goalId => {
  setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goalId != goal.id); // yields a new array. return true if keep, return false if don't want to keep.
  });
}
```

 - Since removeGoalHandler takes in goalId, we need to modify GoalItem.js to do this. There are two ways:
 - The first way is to use arrow function (we did this before).
```js
<TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
```
  - The second way is to use .bind.
```js
<TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
```

