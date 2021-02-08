import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';
class RedButton extends React.Component {
  displayAlert() {
    alert('Play Sound 1');
  }
  render() {
    return <Button color="red" title="Sound 1" onPress={this.displayAlert} />;
  }
}
class BlueButton extends Component {
  displayAlert() {
    alert('Play Sound 2');
  }
  render() {
    return <Button color="blue" title="Sound 2" onPress={this.displayAlert} />;
  }
}
class PinkButton extends Component {
  displayAlert() {
    alert('Play Sound 3');
  }
  render() {
    return <Button color="pink" title="Sound 3" onPress={this.displayAlert} />;
  }
}
class PurpleButton extends Component {
  displayAlert() {
    alert('Play Sound 4');
  }

  render() {
    return (
      <Button color="purple" title="Sound 4" onPress={this.displayAlert} />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={{ marginTop: 10, marginLeft: 70, width: 200 }}>
          <RedButton />
        </View>
        <View style={{ marginTop: 30, marginLeft: 70, width: 200 }}>
          <BlueButton />
        </View>
        <View style={{ marginTop: 30, marginLeft: 70, width: 200 }}>
          <PinkButton />
        </View>
        <View style={{ marginTop: 30, marginLeft: 70, width: 200 }}>
          <PurpleButton />
        </View>
      </View>
    );
  }
}
