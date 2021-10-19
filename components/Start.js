import React from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bgColor: "white"
    };
  }

  render() {

    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require("../assets/background.png")}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Chat App
          </Text>
          <View style={styles.container2}>
            <View style={styles.yourNameContainer}>
              <TextInput
                style={styles.yourName}
                onChangeText={(name) => { this.setState({ name }) }}
                value={this.state.name}
                placeholder='Your name'
              />
            </View>
            <View style={styles.chooseBackgroundColorContainer}>
              <Text style={styles.chooseBackgroundColor}>Choose Background Color</Text>
            </View>
            <View style={styles.chooseColorContainer}>
              <TouchableOpacity style={[styles.chooseColor, styles.chooseColor1]}
                onPress={() => this.setState({ bgColor: "#090C08" })}
              />
              <TouchableOpacity style={[styles.chooseColor, styles.chooseColor2]}
                onPress={() => this.setState({ bgColor: "#474056" })}
              />
              <TouchableOpacity style={[styles.chooseColor, styles.chooseColor3]}
                onPress={() => this.setState({ bgColor: "#8A95A5" })}
              />
              <TouchableOpacity style={[styles.chooseColor, styles.chooseColor4]}
                onPress={() => this.setState({ bgColor: "#B9C6AE" })}
              />
            </View>
            <TouchableOpacity
              style={styles.startChattingContainer}
              onPress={() =>
                this.props.navigation.navigate('Chat', {
                  name: this.state.name,
                  bgColor: this.state.bgColor
                })
              }
            >
              <Text style={styles.startChatting}>Start Chatting</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  container2: {
    width: "88%",
    height: 320,
    marginBottom: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
    top: "10%"
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  yourNameContainer: {
    width: "88%",
    height: 50,
    borderWidth: 1,
    justifyContent: "center",
  },
  yourName: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 0.5,
    left: "5%"
  },
  chooseBackgroundColorContainer: {
    width: "88%",
    marginTop: "5%"
  },
  chooseBackgroundColor: {
    width: "88%",
    top: "10%",
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
    left: "5%"
  },
  chooseColorContainer: {
    flexDirection: 'row',
    marginTop: "5%",
  },
  chooseColor: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: "2%"
  },
  chooseColor1: {
    backgroundColor: "#090C08"
  },
  chooseColor2: {
    backgroundColor: "#474056"
  },
  chooseColor3: {
    backgroundColor: "#8A95A5"
  },
  chooseColor4: {
    backgroundColor: "#B9C6AE"
  },
  startChattingContainer: {
    backgroundColor: "#757083",
    marginTop: "10%",
    marginBottom: "5%",
    borderWidth: 1,
    width: "88%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  startChatting: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF"
  }
});