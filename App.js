//This is an example code to understand TextInput// 
import React from 'react';
//import react in our code.
import { TextInput, View, StyleSheet, Text } from 'react-native';
//import all the components we are going to use. 
export default class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     username: ''
   };
 }
 render() {
   return (
     <View style={styles.container}>
       <Text style={{color: 'black'}}>{this.state.username}</Text>
       <TextInput
         value={this.state.username}
         onChangeText={(username) => this.setState({ username })}
         placeholder={'Username'}
         style={styles.input}
       />
     </View>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#ffffff',
 },
 input: {
   width: 250,
   height: 44,
   padding: 10,
   marginBottom: 10,
   backgroundColor: '#ecf0f1'
 },
});
 