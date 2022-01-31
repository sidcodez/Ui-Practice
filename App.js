import React from "react";
import { View, Text , StyleSheet } from "react-native";
import MyHeader from "./components/MyHeader";

export default class App extends React.Component {
  render(){
    return (
    <View style={styles.container}>
      <MyHeader />
    </View>
  );
  }
}

const styles = StyleSheet.create({

  container: {

      flex: 1,
      backgroundColor: '#fff',
  },
    });

  
