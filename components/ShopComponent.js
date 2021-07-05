import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ShopComponent extends Component {
  handleUpgrade() {
    const {coins, addMoney, clickPower, setClickPower} = this.props;
    console.log('handle upgrade', coins);
    if (coins >= 10 * clickPower * 2.5) {
      addMoney(-10 * clickPower * 2.5);
      setClickPower(clickPower + 1);
    }
  }
  render() {
    const {clickPower} = this.props;
    return (
      <SafeAreaView>
        <View style={{height: '100%', padding: 16}}>
          <Text style={{fontSize: 24, marginBottom: 16}}>Shop</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Add click power</Text>
            <Button onPress={() => this.handleUpgrade()}>
              <Text style={{fontSize: 20}}>
                {10 * clickPower * 2.5}
                <Icon
                  name="checkbox-multiple-blank-circle"
                  size={20}
                  color="#ffffff"
                />
              </Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
