import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class Chat extends React.Component {
  compnentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
  }
  render() {
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