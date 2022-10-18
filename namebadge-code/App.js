import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import React from 'react';
//import { SafeAreaView } from 'react-native';

export default function App() {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  const myFullName = "Rizqi Febriansyah";


  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello</Text>
      <Text style={styles.subtitleText}>My name is</Text>
      <View style={styles.theBoxContainer}>
          <Text style={styles.theBoxText}>❤️{myFullName}☕ </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center'
  },

  welcomeText: {
    fontSize: 90,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },

  subtitleText: {
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    textShadowOffset: {width: 7, height: 2},
    textShadowRadius: 10,
    textShadowColor: 'blue'
  },

  theBoxContainer: {
    width: "80%",
    height: "45%",
    backgroundColor: "yellow",
    borderRadius: 5,
    justifyContent: "center"
  },

  theBoxText: {
    fontSize: 57,
    textAlign: "center",
    fontWeight: "bold",
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    textShadowColor: 'violet'
  },

});
