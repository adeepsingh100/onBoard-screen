import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import next from '../images/next.png';
import done from '../images/done.png';

const data = [
  {
    title: 'Special offers',
    text:
      'Stay aware of all the fresh discounts, sales, time-limited offers and hot deals in your city',
    image: require('../images/img1.png'),
    bg: '#59b2ab',
  },
  {
    title: 'Have fun, save time',
    text: 'Discover best entertainment and shopping options next to you',
    image: require('../images/img2.png'),
    bg: '#febe29',
  },
  {
    title: 'Save your parking spot',
    text:
      'Save info about location of your parking spot, find your car faster and easier',
    image: require('../images/img3.png'),
    bg: '#22bcb5',
  },
];
const Onboard = (props) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const keyExtractor = item => item.title;
  const renderDoneButton = () => {
    return <Image source={done} style={styles.done} />;
  };
  const renderNextButton = () => {
    return <Image source={next} />;
  };
  const renderSkipButton = () => {
   
    return <Text style={{color: '#9CA0A5', fontSize: 20}}>Skip</Text>;
  };
  const handleDone = () => {
    props.handleDone();
  }
  return (
    <View style={{backgroundColor: '#ffff', flex: 1}}>
      <TouchableOpacity style={{alignItems: 'flex-end'}}>
        <Text
          style={{
            color: '#9CA0A5',
            fontSize: 20,
            marginRight: 20,
            marginTop: 10,
          }}>
          Skip
        </Text>
      </TouchableOpacity>
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderSkipButton={renderSkipButton}
        dotStyle={{backgroundColor: '#9CA0A5'}}
        activeDotStyle={{backgroundColor: '#03A587'}}
        data={data}
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    marginTop: 80,
  },
  title: {
    fontSize: 'bold',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 60,
  },
  text: {
    fontSize: 'bold',
    textAlign: 'center',
    fontSize: 14,
    textAlign: 'center',
    margin: 20,
    marginHorizontal: 20,
  },
  done: {
    height: 48,
    width: 48,
  },
});

export default Onboard;
