import React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{uri: 'http://ichef.bbci.co.uk/news/976/cpsprodpb/12787/production/_95455657_3312a880-230e-474c-b1d9-bb7c94f8b00e.jpg'}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    console.log("MyHomeScreen");
    
    return (
      <View>
         <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button
        onPress={() => this.props.navigation.toggleDrawer() }
        title="toggle"
      />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{uri: 'http://ichef.bbci.co.uk/news/976/cpsprodpb/12787/production/_95455657_3312a880-230e-474c-b1d9-bb7c94f8b00e.jpg'}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    console.log("MyNotificationsScreen");

    return (
      <View>
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
      <Button
      onPress={() => this.props.navigation.toggleDrawer() }
      title="toggle"
    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});
