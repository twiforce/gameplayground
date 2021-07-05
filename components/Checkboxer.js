import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Body, CheckBox, ListItem, Text} from 'native-base';

export default class CheckboxComponent extends Component {
  state = {
    checked: false,
  };
  handleCheck() {
    const {addMoney, clickPower} = this.props;
    const {checked} = this.state;
    addMoney(2 * clickPower);
    this.setState({checked: !checked});
  }
  render() {
    const {checked} = this.state;
    return (
      <SafeAreaView>
        <View style={{padding: 16}}>
          <Text>Checkbox</Text>
          <ListItem onPress={() => this.handleCheck()}>
            <CheckBox checked={checked} />
            <Body>
              <Text>Check me</Text>
            </Body>
          </ListItem>
        </View>
      </SafeAreaView>
    );
  }
}
