import React from 'react';
import { StyleSheet, Button, Text, View, } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Text>Hello Hello</Text>
      <Text>Hello Hello Hello</Text>
      <View style={styles.rectanglecss} className="rectangle"></View>
      <Button title="Press" onPress={ClickFunc}></Button>
      <Text style={styles.clkbtncss} className="clkbtn">Button Clicked</Text>
    </View>
  );
}

function ClickFunc(){
  var x = document.getElementsByClassName("rectangle")[0];
  if(x.style.backgroundColor == "red"){
    x.style.backgroundColor = "green";
    document.getElementsByClassName("clkbtn")[0].style.display = "block";
  }else{
    x.style.backgroundColor = "red";
    document.getElementsByClassName("clkbtn")[0].style.display = "none";
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectanglecss: {
    width: '50%',
    height: '50%',
    backgroundColor: 'red',
  },
  clkbtncss: {
    display: 'none',
  },
});
