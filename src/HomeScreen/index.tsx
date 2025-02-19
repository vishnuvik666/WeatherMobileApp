import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Index = () => {
  const [location, setLocation] = useState('');
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const fetchWeather = (enteredLocation: any) => {
    console.log('enteredLocation', enteredLocation);
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=64562980e7254e5190b94603251902&q=${enteredLocation}&aqi=no`,
      )
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //   useFocusEffect(
  //     React.useCallback(() => {
  //       fetchWeather();
  //     }, []),
  //   );

  const onPressSubmit = () => {
    fetchWeather(location);
  };

  const onPressNavigate = () => {
    navigation.navigate('Detail', {data: data});
  };

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.headerWrapper}>
        <TextInput
          value={location}
          onChangeText={text => setLocation(text)}
          placeholder="Enter the location"
          placeholderTextColor={'#4d4d4f'}
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={onPressSubmit}
          activeOpacity={0.7}
          style={styles.searchButton}>
          <Text style={styles.submitBtnText}>{'Submit'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.someViewWrapper}>
        <Text style={styles.detailText}>{`Name: ${data?.location?.name}`}</Text>
        <Text
          style={styles.detailText}>{`Region: ${data?.location?.region}`}</Text>
        <Text
          style={styles.detailText}>{`Latitude: ${data?.location?.lat}`}</Text>
        <Text
          style={styles.detailText}>{`Longitude: ${data?.location?.lon}`}</Text>
        <Text
          style={
            styles.detailText
          }>{`Temperature in Celsius: ${data?.current?.temp_c}`}</Text>
        <TouchableOpacity
          onPress={onPressNavigate}
          activeOpacity={0.7}
          style={styles.ViewDetailsBtn}>
          <Text style={styles.ViewDetailsText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;
