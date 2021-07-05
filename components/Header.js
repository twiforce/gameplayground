import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, Left, Body, Button, Title, Right, Header} from 'native-base';

export default class HeaderComponent extends Component {
  render() {
    const {coins, displayShop, setDisplayShop} = this.props;
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" size={20} color="#ffffff" />
          </Button>
        </Left>
        <Body>
          <Title onPress={() => setDisplayShop(false)}>Time Dump</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => setDisplayShop(!displayShop)}>
            <Text style={{fontSize: 20, marginLeft: 0, color: '#ffffff'}}>
              {coins}
              <Icon
                name="checkbox-multiple-blank-circle"
                size={20}
                color="#ffffff"
              />
            </Text>
          </Button>
        </Right>
      </Header>
    );
  }
}
