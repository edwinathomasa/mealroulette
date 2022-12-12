import {Divider} from '@rneui/base';
import React, {useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {mealWHITE, Styles, width} from '../../styles/styles';
const LoadingEvent = props => {
  /**
   *
   * This is used to Display spinner
   * @props {string} Textloading if true shows the spinner
   *
   */

  return (
    <View style={Styles.componentDisplayBackGroundScreen}>
      <ActivityIndicator size={width * 0.5} color={mealWHITE} />
      <Text style={Styles.LoadingEventText}>{props.Textloading}</Text>
    </View>
  );
};

export default LoadingEvent;
