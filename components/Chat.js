import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class Chat extends React.Component {
  render() {
    let name = this.props.route.params.name;
    // let bgColor
    this.props.navigation.setOptions({ title: name });
    return (
      <View style={{ flex: 1, backgroundColor: this.props.route.params.bgColor }}>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {

  }
});