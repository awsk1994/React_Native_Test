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




