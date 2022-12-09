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
} from './infoFetch';
//import MealItem from './components/MealItem';

const HomeScreen = ({state, navigation}) => {
  let [spinner, set_spinner] = useState(false);
  let [spinnerText, set_spinnerText] = useState('');
  //let [ItemList, set_ItemList] = useState([]);

  useEffect(() => {
    // Anything in here is fired on component mount.
    console.log('HomeScreen component mount');
    isLoading(true, 'Loading');
    collect_Initial_List();
    return async () => {
      // Anything in here is fired on component unmount.
      console.log('HomeScreen component unmount');
    };
  }, [collect_Initial_List]);

  /**
   *
   * @param {boolean} spinner_State if true shows the spinner
   * @param {String} spinner_Text displays the text below spinner
   */
  const isLoading = (spinner_State, spinner_Text) => {
    set_spinner(spinner_State);
    set_spinnerText(spinner_Text);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const collect_Initial_List = async () => {
    await _fetchAllMealinfo().then(async _fetchAllMealinfo_value => {
      await console.log(' _fetchAllMealinfo ', _fetchAllMealinfo_value);
      await _fetchHomeMeallist().then(async _fetchHomeMeallist_value => {
        await console.log(
          ' _fetchHomeMeallist_value ',
          _fetchHomeMeallist_value,
        );
        //set_ItemList(current_Meal_List);
        await isLoading(false, 'Loading');
      });
    });
    /**/
  };

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={mealWHITE}
      />
      <Divider width={height * 0.02} color={mealGREY} />
      <View style={Styles.columnContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log('Pressed item1');
          }}
          style={Styles.item}>
          <Text style={Styles.itemText}>{'item3'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('Pressed item2');
          }}
          style={Styles.item}>
          <Text style={Styles.itemText}>{'item2'}</Text>
        </TouchableOpacity>
      </View>
      <Divider width={height * 0.02} color={mealGREY} />
      <View style={Styles.columnContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log('Pressed item3');
          }}
          style={Styles.item}>
          <Text style={Styles.itemText}>{'item3'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('Pressed item4');
          }}
          style={Styles.item}>
          <Text style={Styles.itemText}>{'item4'}</Text>
        </TouchableOpacity>
      </View>
      <Divider width={height * 0.04} color={mealGREY} />

      <TouchableOpacity
        style={Styles.ButtonContainer}
        onPress={() => {
          console.log('Pressed Refresh');
        }}>
        <Text style={Styles.itemText}>{'Refresh'}</Text>
      </TouchableOpacity>
      {spinner && <LoadingEvent Textloading={spinnerText} />}
    </SafeAreaView>
  );
};

export default HomeScreen;
