import React, {Component} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {View, Text, Spinner} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-deck-swiper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    maxHeight: 350,
  },
  image: {
    height: '100%',
  },
  imageStyle: {
    borderRadius: 6,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#ffffff66',
  },
});

export default class SwiperComponent extends Component {
  getRandomImageUrl() {
    fetch('https://fakeface.rest/face/json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          cards: [
            ...this.state.cards,
            {
              url: data.image_url,
              age: data.age,
              gender: data.gender,
            },
          ],
        });
      })
      .then(() => {
        if (this.state.cards.length === 10) {
          this.setState({loaded: true});
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  state = {
    cards: [],
    loaded: false,
    showHelp: false,
  };
  generatePeople() {
    this.setState({cards: []}, () => {
      if (this.state.loaded === false) {
        for (let i = 0; i < 10; i++) {
          this.getRandomImageUrl();
        }
      }
    });
  }
  onSwipeAction(card, direction) {
    const selectedCard = this.state.cards[card];
    console.log(this.props);
    console.log('Swiped to', direction, selectedCard);
    if (direction === 'left' && selectedCard.gender === 'male') {
      this.addMoney(1);
    } else if (direction === 'right' && selectedCard.gender === 'female') {
      this.addMoney(1);
    } else {
      this.addMoney(-1);
    }
  }

  addMoney(value) {
    this.props.setCoins(this.props.coins + value * this.props.clickPower);
  }

  componentDidMount() {
    console.log('mounted');
    this.generatePeople();
  }

  render() {
    console.log('rendering');
    const {state} = this;
    return (
      <View style={styles.container}>
        {state.loaded ? (
          <Swiper
            cards={state.cards}
            overlayLabels={{
              left: {
                title: <Icon name="gender-male" size={32} color="#ffffff" />,
                style: {
                  label: {
                    backgroundColor: '#3CB7FA',
                    borderColor: 'transparent',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: -30,
                  },
                },
              },
              right: {
                title: <Icon name="gender-female" size={32} color="#ffffff" />,
                style: {
                  label: {
                    backgroundColor: '#FC5554',
                    borderColor: 'transparent',
                    color: 'white',
                    borderWidth: 1,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: 30,
                  },
                },
              },
            }}
            renderCard={card => {
              return (
                <View style={styles.card}>
                  <ImageBackground
                    style={styles.image}
                    imageStyle={styles.imageStyle}
                    source={{
                      uri: card.url,
                    }}>
                    {state.showHelp ? (
                      <Text style={styles.text}>{card.gender}</Text>
                    ) : null}
                  </ImageBackground>
                </View>
              );
            }}
            onSwiped={cardIndex => {
              console.log(cardIndex);
            }}
            onSwipedAll={() => {
              this.setState({loaded: false});
              this.generatePeople();
            }}
            onSwipedLeft={cardIndex => {
              this.onSwipeAction(cardIndex, 'left');
            }}
            onSwipedRight={cardIndex => {
              this.onSwipeAction(cardIndex, 'right');
            }}
            cardIndex={0}
            backgroundColor={'transparent'}
            stackSize={10}
            disableTopSwipe
            disableBottomSwipe
          />
        ) : (
          <View style={{flex: 1}}>
            <Spinner />
          </View>
        )}
      </View>
    );
  }
}
