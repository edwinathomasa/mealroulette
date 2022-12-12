import React from 'react';
import {StatusBar, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Divider} from '@rneui/base';
import {height, mealGREY, mealWHITE, Styles} from '../styles/styles';

const StartScreen = ({navigation}) => {
  const onHomePressed = async () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={mealWHITE}
      />

      <Divider width={height * 0.04} color={mealGREY} />

      <TouchableOpacity
        style={Styles.ButtonContainer}
        onPress={() => {
          onHomePressed();
        }}>
        <Text style={Styles.itemText}>{'Home'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StartScreen;
