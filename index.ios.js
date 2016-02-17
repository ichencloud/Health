/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  ScrollView,
}
from 'react-native';


var HomepageController = require('./app/controller/homepage/homepageController')

class XYHealth extends Component {
  render() {
    return (
      <HomepageController></HomepageController>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#ff00ff',
  },

});
AppRegistry.registerComponent('XYHealth', () => XYHealth);