import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  ActivityIndicator,
  Platform,
  BackHandler,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Divider} from '@rneui/themed';
import {height, mealGREY, mealWHITE, Styles} from '../styles/styles';
import LoadingEvent from './components/LoadingEvent';
import {
  _fetchAllMealinfo,
  _fetchHomeMeallist,
  current_Meal_List,
  get_page,
  set_page,
} from './infoFetch';

const MealInfo = ({state, navigation}) => {
  let [spinner, set_spinner] = useState(false);
  let [spinnerText, set_spinnerText] = useState('');

  useEffect(() => {
    // Anything in here is fired on component mount.
    console.log('HomeScreen component mount');
    isLoading(true, 'Loading');
    return async () => {
      // Anything in here is fired on component unmount.
      console.log('HomeScreen component unmount');
    };
  }, []);

  /**
   *
   * @param {boolean} spinner_State if true shows the spinner
   * @param {String} spinner_Text displays the text below spinner
   */
  const isLoading = (spinner_State, spinner_Text) => {
    set_spinner(spinner_State);
    set_spinnerText(spinner_Text);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={mealWHITE}
      />
      <Divider width={height * 0.02} color={mealGREY} />

      <TouchableOpacity style={Styles.ButtonContainer} onPress={() => {}}>
        <Text style={Styles.itemText}>{'Back'}</Text>
      </TouchableOpacity>
      {spinner && <LoadingEvent Textloading={spinnerText} />}
    </SafeAreaView>
  );
};

export default MealInfo;
