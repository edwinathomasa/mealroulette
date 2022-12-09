import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Text, Image} from 'react-native';
import {
  height,
  mealDARKGREY,
  mealGREY,
  mealWHITE,
  Styles,
  width,
} from '../../styles/styles';
const MealItem = props => {
  return (
    <View style={MealItemStyles.componentMealItemBackGroundScreen}>
      <Image
        style={MealItemStyles.mealItemImage}
        source={{uri: props.imageUri}}
      />
      <Text style={MealItemStyles.mealItemImageText}>{props.mealTitle}</Text>
    </View>
  );
};

const MealItemStyles = StyleSheet.create({
  componentMealItemBackGroundScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.4,
    width: width * 0.45,
    backgroundColor: mealGREY,
  },
  mealItemImage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.33,
    width: width * 0.45,
    borderRadius: (height * 0.1) / 2,
    backgroundColor: mealWHITE,
  },
  mealItemImageText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default MealItem;
