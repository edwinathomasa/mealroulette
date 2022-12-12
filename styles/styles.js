import React from 'react';
import {StyleSheet, Dimensions, useColorScheme} from 'react-native';

export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;
// eslint-disable-next-line react-hooks/rules-of-hooks
export const isDarkMode = useColorScheme() === 'dark';

export const mealRED = '#a31639';
export const mealBLACK = '#000000';
export const mealWHITE = '#ffffff';
export const mealGREY = '#e7e7e7';
export const mealDARKGREY = '#9e9e9e';

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: height,
    width: width,
    backgroundColor: mealGREY,
  },
  componentDisplayBackGroundScreen: {
    position: 'absolute',
    backgroundColor: mealBLACK,
    opacity: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: height * 0.4,
    width: width,
    borderRadius: (height * 0.1) / 2,
    backgroundColor: mealGREY,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: height * 0.4,
    width: width * 0.45,
    borderRadius: (height * 0.1) / 2,
    backgroundColor: mealWHITE,
  },
  itemText: {
    color: mealBLACK,
    textAlign: 'center',
  },
  meal_Text: {
    color: mealBLACK,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  ButtonContainer: {
    backgroundColor: mealDARKGREY,
    alignItems: 'center',
    justifyContent: 'center',
    width: height * 0.1,
    height: height * 0.1,
    borderRadius: (height * 0.1) / 2,
  },
  button: {
    color: mealBLACK,
    textAlign: 'center',
  },
  scrollview_container: {
    width: width,
    paddingVertical: width * 0.1,
    paddingHorizontal: width * 0.1,
    backgroundColor: mealWHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image_View: {
    alignItems: 'center',
    justifyContent: 'center',
    height: width * 0.95,
    width: width * 0.95,
    borderRadius: (height * 0.1) / 2,
    backgroundColor: mealWHITE,
  },
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
    borderTopRightRadius: (height * 0.1) / 2,
    borderTopLeftRadius: (height * 0.1) / 2,
    backgroundColor: mealWHITE,
  },
  mealItemImageText: {
    color: mealBLACK,
    textAlign: 'center',
  },
});

export {Styles};
