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
  Image,
  ScrollView,
} from 'react-native';

import {Divider} from '@rneui/themed';
import {height, mealGREY, mealWHITE, Styles} from '../styles/styles';
import LoadingEvent from './components/LoadingEvent';
import {_fetchMealInfo, meal_info} from './infoFetch';

const MealDetail = ({route, navigation}) => {
  const Navigation_Param = route.params;
  let [spinner, set_spinner] = useState(false);
  let [spinnerText, set_spinnerText] = useState('');
  const [mealId, set_mealId] = useState(Navigation_Param.meal_ID);
  let [meal_title, set_meal_title] = useState('');
  let [meal_picture, set_meal_picture] = useState('');
  let [meal_description, set_meal_description] = useState('');
  let [meal_ingredients, set_meal_ingredients] = useState('');
  useEffect(() => {
    // Anything in here is fired on component mount.
    console.log('MealInfo component mount');
    isLoading(true, 'Loading');
    collectMealInfo(mealId);
  }, [collectMealInfo, mealId]);

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
  const collectMealInfo = async id => {
    console.log(id);
    await _fetchMealInfo(id).then(async _fetchMealInfo_value => {
      if (_fetchMealInfo_value) {
        set_meal_title(meal_info.title);
        set_meal_picture(meal_info.picture);
        set_meal_description(meal_info.description);
        set_meal_ingredients(meal_info.ingredients);
      }

      await isLoading(false, 'Loading');
    });
    isLoading(false, 'Loading');
  };

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={mealWHITE}
      />
      <ScrollView
        contentContainerStyle={Styles.scrollview_container}
        scrollEnabled={true}>
        <Divider width={height * 0.02} color={mealGREY} />
        {meal_picture !== '' && (
          <Image
            style={Styles.image_View}
            source={{
              uri: meal_picture,
            }}
          />
        )}

        <Divider width={height * 0.02} color={mealWHITE} />
        <Text style={Styles.itemText}>{meal_title}</Text>
        <Divider width={height * 0.02} color={mealWHITE} />
        <Text style={Styles.itemText}>{meal_description}</Text>
        <Divider width={height * 0.02} color={mealWHITE} />
        <Text style={Styles.itemText}>{'Ingredients'}</Text>
        <Divider width={height * 0.02} color={mealWHITE} />
        <Text style={Styles.itemText}>{meal_ingredients}</Text>
        <Divider width={height * 0.02} color={mealWHITE} />
        <TouchableOpacity
          style={Styles.ButtonContainer}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={Styles.itemText}>{'Home'}</Text>
        </TouchableOpacity>
        <Divider width={height * 0.02} color={mealWHITE} />
      </ScrollView>
      {spinner && <LoadingEvent Textloading={spinnerText} />}
    </SafeAreaView>
  );
};

export default MealDetail;
