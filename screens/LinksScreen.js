import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

export default class LinksScreen extends React.Component {
  render() {
    setTimeout(() => {
    //   function sleep(miliseconds) {
    //     var currentTime = new Date().getTime();
     
    //     while (currentTime + miliseconds >= new Date().getTime()) {
    //     }
    //  }
    //  sleep(3000)
    }, 1000)

    console.log("Link Screen")
    
    return (
      <SafeAreaView style={styles.container}>
        <Text >
          LinksScreen
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEC8B',
    alignItems: "center",
    justifyContent: "center"
  }
});
