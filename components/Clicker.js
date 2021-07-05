import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Text} from 'native-base';

export default class ClickerComponent extends Component {
  render() {
    const {addMoney, clickPower} = this.props;
    return (
      <SafeAreaView>
        <View style={{padding: 16}}>
          <Button full primary large onPress={() => addMoney(1*clickPower)}>
            <Text>Click me</Text>
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
