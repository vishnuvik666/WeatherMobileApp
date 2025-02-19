import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';

const Index = () => {
  const data = useRoute();

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.someViewWrapper}>
        <Text
          style={
            styles.detailText
          }>{`Name: ${data?.params?.data?.location?.name}`}</Text>
        <Text
          style={
            styles.detailText
          }>{`Region: ${data?.params?.data?.location?.region}`}</Text>
        <Text
          style={
            styles.detailText
          }>{`Latitude: ${data?.params?.data?.location?.lat}`}</Text>
        <Text
          style={
            styles.detailText
          }>{`Longitude: ${data?.params?.data?.location?.lon}`}</Text>
        <Text
          style={
            styles.detailText
          }>{`Temperature in Celsius: ${data?.params?.data?.current?.temp_c}`}</Text>
        <Text
          style={
            styles.detailText
          }>{`Humidity: ${data?.params?.data?.current?.humidity}`}</Text>
        <Text
          style={
            styles.detailText
          }>{`DewPoint in Celsius: ${data?.params?.data?.current?.dewpoint_c}`}</Text>
        <Text
          style={
            styles.detailText
          }>{`Wind Direction: ${data?.params?.data?.current?.wind_dir}`}</Text>
        <Text
          style={
            styles.detailText
          }>{`Wind Speed: ${data?.params?.data?.current?.wind_kph}`}</Text>
        <Text
          style={
            styles.detailText
          }>{`Pressure: ${data?.params?.data?.current?.pressure_in}`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;
