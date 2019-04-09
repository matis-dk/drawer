import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    console.log("Home Screen")

    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Screen One</Text>
          <Button title="Go to two"
            onPress={() => this.props.navigation.navigate('routeTwo')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: "center",
    justifyContent: "center"
  }
});
