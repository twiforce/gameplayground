import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Container} from 'native-base';
import HeaderComponent from './components/Header';
import ClickerComponent from './components/Clicker';
import ShopComponent from './components/ShopComponent';
import CheckboxComponent from './components/Checkboxer';
import SwiperComponent from './components/Swiper';

const App: () => Node = () => {
  const [displayShop, setDisplayShop] = useState(false);
  const [coins, setCoins] = useState(0);
  const [clickPower, setClickPower] = useState(1);

  const addMoney = function (value) {
    coins + value !== 0 ? setCoins(coins + value) : coins;
  };

  return (
    <SafeAreaView>
      <View style={{height: '100%'}}>
        <Container>
          <HeaderComponent coins={coins} setDisplayShop={setDisplayShop} />
          {displayShop ? (
            <ShopComponent
              coins={coins}
              addMoney={addMoney}
              clickPower={clickPower}
              setClickPower={setClickPower}
            />
          ) : (
            <>
              <ClickerComponent addMoney={addMoney} clickPower={clickPower} />
              <SwiperComponent
                coins={coins}
                setCoins={setCoins}
                clickPower={clickPower}
              />
              <CheckboxComponent addMoney={addMoney} clickPower={clickPower} />
            </>
          )}
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default App;
