import React from "react";
import { View, Text , StyleSheet } from "react-native";
import { Appbar } from 'react-native-paper';


 export default function MyHeader() {

  return (
    <Appbar.Header>
      
      <Appbar.Content 
      title="Title" 
      subtitle="Subtitle" />
     
    </Appbar.Header>
  );
}
