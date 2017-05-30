import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Camera from 'react-native-snap-camera';
import Emoji from 'react-native-snap-emoji';
import SnapText from 'react-native-snap-text';

export default class App extends React.Component {

  state = {
    emojiIsVisible: false,
    direction: 'front'
  }

  changeEmojiState() {
    this.setState({
      emojiIsVisible: !this.state.emojiIsVisible
    })
  }
  changeTextState() {
    this.setState({
      textIsVisible: !this.state.textIsVisible
    })
  }
  changeCamera() {
    this.setState({
      direction: this.state.direction === 'front' ? 'back' : 'front'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar BarStyle ="light-content" />
          <View style={styles.header}>
            <View style={styles.flex1}>
            <Text>
              <Text style={styles.title}>SnapApp</Text>
              <Text
                style={styles.button}
                onPress={this.changeEmojiState.bind(this)}>
                🤷
              </Text>
              <Text
                style={styles.button}
                onPress={this.changeTextState.bind(this)}>
                🖊
              </Text>
              <Text
                style={styles.button}
              onPress={this.changeCamera.bind(this)}>
              🤳
            </Text>
            </Text>
          </View>
      </View>
        <Emoji isVisible={this.state.emojiIsVisible}>
          <SnapText isVisible= {this.state.textIsVisible} color= 'pink'>
            <Camera type={this.state.direction} />
          </SnapText>
        </Emoji>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  button: {
    color: 'orange',
    padding: '3%',
    fontSize: 40,
  },

  flex1: {
    flexDirection: 'row',
    flex: 1
  },
  title: {
    fontSize: 30,
    color: 'white',
    width: 20,
  },
  header: {
    backgroundColor: 'pink',
    height: '20%',
    padding: '10%'
  }
});
