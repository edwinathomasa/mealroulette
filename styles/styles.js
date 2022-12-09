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
    justifyContent: 'center',
    height: height * 0.4,
    width: width * 0.45,
    borderRadius: (height * 0.1) / 2,
    backgroundColor: mealWHITE,
  },
  itemText: {
    color: 'red',
    textAlign: 'center',
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
    color: 'red',
    textAlign: 'center',
  },
});

export {Styles};
