import React from 'react';
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
import styles from './src/styles/styles';

import AppStackNav from './src/nav/mainStackNav';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <AppStackNav />
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => AppStackNav);
