import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import MainTabNavigator from './navigation/MainTabNavigator';

const AppNavigator = createAppContainer(MainTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    padding: 30
  }
});

export default class App extends React.Component {
  
  render() {
    console.log("APP js")
      return (
        <SafeAreaView style={styles.container}>
          <Text>t1</Text>
          <AppNavigator
            onNavigationStateChange={(...args) => {
              console.log(...args)
            }}
          />
          <Text>t2</Text>
        </SafeAreaView>
      );
  }
  
}

