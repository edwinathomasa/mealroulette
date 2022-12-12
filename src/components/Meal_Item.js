import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {
  width,
  height,
  mealBLACK,
  mealGREY,
  mealWHITE,
  Styles,
} from '../../styles/styles';

const Meal_Item = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onMealPressed();
      }}
      style={Styles.item}>
      {props.picture !== '' && (
        <Image style={Styles.mealItemImage} source={{uri: props.picture}} />
      )}
      <Text style={Styles.mealItemImageText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Meal_Item;
