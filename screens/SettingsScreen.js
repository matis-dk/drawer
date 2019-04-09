import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native'
import { withNavigationFocus } from 'react-navigation'

class SettingsScreen extends React.Component {
  render() {
    console.log("Setting Screen")
    return (
      <SafeAreaView style={styles.container}>
        <Text >
          SettingsScreen
        </Text>
        <Button
          title="Go to three"
          onPress={() =>
            this.props.navigation.navigate('routeThree', {
              greeting: 'Hallo',
            })
          }
        />
      </SafeAreaView>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEA2AD',
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withNavigationFocus(SettingsScreen)