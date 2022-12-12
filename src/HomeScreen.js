import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  ActivityIndicator,
  Platform,
  Image,
  Text,
  TouchableOpacity,
  Alert,
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

const HomeScreen = ({navigation}) => {
  let [spinner, set_spinner] = useState(false);
  let [spinnerText, set_spinnerText] = useState('');
  let [ItemList, set_ItemList] = useState([]);

  useEffect(() => {
    // Anything in here is fired on component mount.
    console.log('HomeScreen component mount');
    isLoading(true, 'Loading');
    collect_Initial_List();
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
      await console.log(' _fetchAllMealinfo_value ', _fetchAllMealinfo_value);
      if (_fetchAllMealinfo_value) {
        await _fetchHomeMeallist().then(async _fetchHomeMeallist_value => {
          await console.log(
            ' _fetchHomeMeallist_value ',
            _fetchHomeMeallist_value,
          );
          if (_fetchHomeMeallist_value) {
            await set_ItemList(current_Meal_List);
            await isLoading(false, 'Loading');
          } else {
            Alert.alert(
              'Error',
              'Unable to Collect Food Information Check if network is available or contact admin',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            );
          }
        });
      } else {
        Alert.alert(
          'Error',
          'Unable to Collect Food Information Check if network is available or contact admin',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        );
      }
    });
    /**/
  };

  const onRefreshPressed = async () => {
    await isLoading(true, 'Loading');
    let init_page = await get_page();
    await console.log(init_page);
    switch (init_page) {
      case 0:
        await set_page(4);
        await collect_Initial_List();
        await console.log('Pressed onRefreshPressed');
        break;
      case 4:
        await set_page(8);
        await collect_Initial_List();
        await console.log('Pressed onRefreshPressed');
        break;
      case 8:
        await set_page(0);
        await collect_Initial_List();
        await console.log('Pressed onRefreshPressed');
        break;
      default:
        await set_page(0);
        await collect_Initial_List();
        await console.log('Pressed onRefreshPressed');
        break;
    }
  };

  const onMealPressed = async id => {
    navigation.navigate('Mealinfo', {
      meal_ID: id,
    });
    console.log(id);
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
        {ItemList[0] !== undefined && (
          <TouchableOpacity
            onPress={() => {
              onMealPressed(ItemList[0].id);
            }}
            style={Styles.item}>
            {ItemList[0].picture !== '' && (
              <Image
                style={Styles.mealItemImage}
                source={{uri: ItemList[0].picture}}
              />
            )}
            <Text style={Styles.mealItemImageText}>{ItemList[0].title}</Text>
          </TouchableOpacity>
        )}
        {ItemList[1] !== undefined && (
          <TouchableOpacity
            onPress={() => {
              onMealPressed(ItemList[1].id);
            }}
            style={Styles.item}>
            {ItemList[1].picture !== '' && (
              <Image
                style={Styles.mealItemImage}
                source={{uri: ItemList[1].picture}}
              />
            )}
            <Text style={Styles.mealItemImageText}>{ItemList[1].title}</Text>
          </TouchableOpacity>
        )}
      </View>
      <Divider width={height * 0.02} color={mealGREY} />
      <View style={Styles.columnContainer}>
        {ItemList[2] !== undefined && (
          <TouchableOpacity
            onPress={() => {
              onMealPressed(ItemList[2].id);
            }}
            style={Styles.item}>
            {ItemList[2].picture !== '' && (
              <Image
                style={Styles.mealItemImage}
                source={{uri: ItemList[2].picture}}
              />
            )}
            <Text style={Styles.mealItemImageText}>{ItemList[2].title}</Text>
          </TouchableOpacity>
        )}
        {ItemList[3] !== undefined && (
          <TouchableOpacity
            onPress={() => {
              onMealPressed(ItemList[3].id);
            }}
            style={Styles.item}>
            {ItemList[3].picture !== '' && (
              <Image
                style={Styles.mealItemImage}
                source={{uri: ItemList[3].picture}}
              />
            )}
            <Text style={Styles.mealItemImageText}>{ItemList[3].title}</Text>
          </TouchableOpacity>
        )}
      </View>
      <Divider width={height * 0.04} color={mealGREY} />

      <TouchableOpacity
        style={Styles.ButtonContainer}
        onPress={() => {
          onRefreshPressed();
        }}>
        <Text style={Styles.itemText}>{'Refresh'}</Text>
      </TouchableOpacity>
      {spinner && <LoadingEvent Textloading={spinnerText} />}
    </SafeAreaView>
  );
};

export default HomeScreen;
