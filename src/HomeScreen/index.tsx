// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   FlatList,
//   Dimensions,
// } from 'react-native';
// import {LinearGradient} from 'react-native-linear-gradient';

// const {width} = Dimensions.get('window');

// // Mock weather data
// const mockWeatherData = {
//   current: {
//     location: 'San Francisco, CA',
//     temperature: 72,
//     condition: 'Partly Cloudy',
//     humidity: 65,
//     windSpeed: 8,
//     visibility: 10,
//     uvIndex: 6,
//   },
//   hourly: [
//     {time: 'Now', temp: 72, icon: '🌤️'},
//     {time: '1 PM', temp: 75, icon: '☀️'},
//     {time: '2 PM', temp: 78, icon: '☀️'},
//     {time: '3 PM', temp: 76, icon: '🌤️'},
//     {time: '4 PM', temp: 74, icon: '☁️'},
//     {time: '5 PM', temp: 71, icon: '☁️'},
//     {time: '6 PM', temp: 69, icon: '🌧️'},
//     {time: '7 PM', temp: 67, icon: '🌧️'},
//   ],
//   weekly: [
//     {day: 'Today', high: 78, low: 65, condition: 'Partly Cloudy', icon: '🌤️'},
//     {day: 'Tomorrow', high: 82, low: 68, condition: 'Sunny', icon: '☀️'},
//     {day: 'Wednesday', high: 79, low: 66, condition: 'Cloudy', icon: '☁️'},
//     {day: 'Thursday', high: 75, low: 62, condition: 'Rainy', icon: '🌧️'},
//     {day: 'Friday', high: 77, low: 64, condition: 'Partly Cloudy', icon: '🌤️'},
//     {day: 'Saturday', high: 80, low: 67, condition: 'Sunny', icon: '☀️'},
//     {day: 'Sunday', high: 76, low: 63, condition: 'Cloudy', icon: '☁️'},
//   ],
// };

// const WeatherCard = ({children, style}) => (
//   <View style={[styles.card, style]}>{children}</View>
// );

// const HourlyItem = ({item}) => (
//   <WeatherCard style={styles.hourlyCard}>
//     <Text style={styles.hourlyTime}>{item.time}</Text>
//     <Text style={styles.hourlyIcon}>{item.icon}</Text>
//     <Text style={styles.hourlyTemp}>{item.temp}°</Text>
//   </WeatherCard>
// );

// const WeeklyItem = ({item, index, isLast}) => (
//   <View style={[styles.weeklyItem, !isLast && styles.weeklyBorder]}>
//     <View style={styles.weeklyLeft}>
//       <Text style={styles.weeklyIcon}>{item.icon}</Text>
//       <View style={styles.weeklyInfo}>
//         <Text style={styles.weeklyDay}>{item.day}</Text>
//         <Text style={styles.weeklyCondition}>{item.condition}</Text>
//       </View>
//     </View>
//     <View style={styles.weeklyTemps}>
//       <Text style={styles.weeklyHigh}>{item.high}°</Text>
//       <Text style={styles.weeklyLow}>{item.low}°</Text>
//     </View>
//   </View>
// );

// export default function WeatherApp() {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = date => {
//     return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
//   };

//   const formatDate = date => {
//     return date.toLocaleDateString([], {
//       weekday: 'long',
//       month: 'long',
//       day: 'numeric',
//     });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Updated StatusBar with matching background color */}
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor="#4A90E2"
//         translucent={false}
//       />
//       <LinearGradient
//         colors={['#4A90E2', '#5BA0F2', '#6BB6FF']}
//         style={styles.gradient}>
//         <ScrollView
//           style={styles.scrollView}
//           showsVerticalScrollIndicator={false}>
//           {/* Header */}
//           <View style={[styles.header, {marginTop: 50}]}>
//             <View style={styles.headerTop}>
//               <View style={styles.locationContainer}>
//                 <Text style={styles.locationIcon}>📍</Text>
//                 <Text style={styles.location}>
//                   {mockWeatherData.current.location}
//                 </Text>
//               </View>
//               <Text style={styles.time}>{formatTime(currentTime)}</Text>
//             </View>
//             <Text style={styles.date}>{formatDate(currentTime)}</Text>
//           </View>

//           {/* Current Weather */}
//           <View style={styles.currentWeather}>
//             <Text style={styles.weatherIcon}>🌤️</Text>
//             <Text style={styles.temperature}>
//               {mockWeatherData.current.temperature}°
//             </Text>
//             <Text style={styles.condition}>
//               {mockWeatherData.current.condition}
//             </Text>

//             {/* Weather Details Grid */}
//             <View style={styles.detailsGrid}>
//               <WeatherCard style={styles.detailCard}>
//                 <Text style={styles.detailIcon}>💧</Text>
//                 <Text style={styles.detailLabel}>Humidity</Text>
//                 <Text style={styles.detailValue}>
//                   {mockWeatherData.current.humidity}%
//                 </Text>
//               </WeatherCard>

//               <WeatherCard style={styles.detailCard}>
//                 <Text style={styles.detailIcon}>💨</Text>
//                 <Text style={styles.detailLabel}>Wind</Text>
//                 <Text style={styles.detailValue}>
//                   {mockWeatherData.current.windSpeed} mph
//                 </Text>
//               </WeatherCard>

//               <WeatherCard style={styles.detailCard}>
//                 <Text style={styles.detailIcon}>👁️</Text>
//                 <Text style={styles.detailLabel}>Visibility</Text>
//                 <Text style={styles.detailValue}>
//                   {mockWeatherData.current.visibility} mi
//                 </Text>
//               </WeatherCard>

//               <WeatherCard style={styles.detailCard}>
//                 <Text style={styles.detailIcon}>🌡️</Text>
//                 <Text style={styles.detailLabel}>UV Index</Text>
//                 <Text style={styles.detailValue}>
//                   {mockWeatherData.current.uvIndex}
//                 </Text>
//               </WeatherCard>
//             </View>
//           </View>

//           {/* Hourly Forecast */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Hourly Forecast</Text>
//             <FlatList
//               data={mockWeatherData.hourly}
//               renderItem={({item}) => <HourlyItem item={item} />}
//               keyExtractor={(item, index) => index.toString()}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.hourlyList}
//             />
//           </View>

//           {/* Weekly Forecast */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>7-Day Forecast</Text>
//             <WeatherCard style={styles.weeklyCard}>
//               {mockWeatherData.weekly.map((item, index) => (
//                 <WeeklyItem
//                   key={index}
//                   item={item}
//                   index={index}
//                   isLast={index === mockWeatherData.weekly.length - 1}
//                 />
//               ))}
//             </WeatherCard>
//           </View>
//         </ScrollView>
//       </LinearGradient>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   gradient: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   header: {
//     paddingHorizontal: 24,
//     paddingTop: 20,
//     paddingBottom: 24,
//   },
//   headerTop: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   locationIcon: {
//     fontSize: 16,
//     marginRight: 8,
//   },
//   location: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: 'white',
//   },
//   time: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.9)',
//   },
//   date: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.75)',
//   },
//   currentWeather: {
//     alignItems: 'center',
//     paddingHorizontal: 24,
//     paddingBottom: 32,
//   },
//   weatherIcon: {
//     fontSize: 80,
//     marginBottom: 16,
//   },
//   temperature: {
//     fontSize: 72,
//     fontWeight: '100',
//     color: 'white',
//     marginBottom: 8,
//   },
//   condition: {
//     fontSize: 20,
//     color: 'rgba(255, 255, 255, 0.9)',
//     marginBottom: 24,
//   },
//   detailsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   card: {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 16,
//     padding: 16,
//     backdropFilter: 'blur(10px)',
//   },
//   detailCard: {
//     width: (width - 64) / 2,
//     marginBottom: 16,
//     alignItems: 'center',
//   },
//   detailIcon: {
//     fontSize: 24,
//     marginBottom: 8,
//   },
//   detailLabel: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.75)',
//     marginBottom: 4,
//   },
//   detailValue: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'white',
//   },
//   section: {
//     paddingHorizontal: 24,
//     marginBottom: 32,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'rgba(255, 255, 255, 0.9)',
//     marginBottom: 16,
//   },
//   hourlyList: {
//     paddingRight: 24,
//   },
//   hourlyCard: {
//     alignItems: 'center',
//     marginRight: 16,
//     minWidth: 80,
//   },
//   hourlyTime: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.75)',
//     marginBottom: 8,
//   },
//   hourlyIcon: {
//     fontSize: 32,
//     marginBottom: 8,
//   },
//   hourlyTemp: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'white',
//   },
//   weeklyCard: {
//     padding: 0,
//   },
//   weeklyItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//   },
//   weeklyBorder: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   weeklyLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   weeklyIcon: {
//     fontSize: 32,
//     marginRight: 12,
//   },
//   weeklyInfo: {
//     flex: 1,
//   },
//   weeklyDay: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: 'white',
//     marginBottom: 2,
//   },
//   weeklyCondition: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.75)',
//   },
//   weeklyTemps: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   weeklyHigh: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: 'white',
//     marginRight: 8,
//   },
//   weeklyLow: {
//     fontSize: 16,
//     color: 'rgba(255, 255, 255, 0.6)',
//   },
// });

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import axios from 'axios';

const {width} = Dimensions.get('window');

const WeatherCard = ({children, style}) => (
  <View style={[styles.card, style]}>{children}</View>
);

const HourlyItem = ({item}) => (
  <WeatherCard style={styles.hourlyCard}>
    <Text style={styles.hourlyTime}>{item.time}</Text>
    <Text style={styles.hourlyIcon}>{item.icon}</Text>
    <Text style={styles.hourlyTemp}>{item.temp}°</Text>
  </WeatherCard>
);

const WeeklyItem = ({item, index, isLast}) => (
  <View style={[styles.weeklyItem, !isLast && styles.weeklyBorder]}>
    <View style={styles.weeklyLeft}>
      <Text style={styles.weeklyIcon}>{item.icon}</Text>
      <View style={styles.weeklyInfo}>
        <Text style={styles.weeklyDay}>{item.day}</Text>
        <Text style={styles.weeklyCondition}>{item.condition}</Text>
      </View>
    </View>
    <View style={styles.weeklyTemps}>
      <Text style={styles.weeklyHigh}>{item.high}°</Text>
      <Text style={styles.weeklyLow}>{item.low}°</Text>
    </View>
  </View>
);

export default function WeatherApp() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to get weather icon emoji based on condition
  const getWeatherIcon = (condition, isDay = true) => {
    const conditionLower = condition.toLowerCase();

    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
      return isDay ? '☀️' : '🌙';
    } else if (conditionLower.includes('partly cloudy')) {
      return isDay ? '🌤️' : '🌙';
    } else if (
      conditionLower.includes('cloudy') ||
      conditionLower.includes('overcast')
    ) {
      return '☁️';
    } else if (
      conditionLower.includes('rain') ||
      conditionLower.includes('drizzle')
    ) {
      return '🌧️';
    } else if (conditionLower.includes('snow')) {
      return '❄️';
    } else if (
      conditionLower.includes('thunder') ||
      conditionLower.includes('storm')
    ) {
      return '⛈️';
    } else if (
      conditionLower.includes('fog') ||
      conditionLower.includes('mist')
    ) {
      return '🌫️';
    }
    return '🌤️'; // default
  };

  // Fetch current weather data
  const fetchWeather = async enteredLocation => {
    if (!enteredLocation.trim()) {
      Alert.alert('Error', 'Please enter a location');
      return;
    }

    setLoading(true);
    try {
      // Fetch current weather
      const currentResponse = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=64562980e7254e5190b94603251902&q=${enteredLocation}&aqi=no`,
      );

      // Fetch forecast data (for hourly and weekly)
      const forecastResponse = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=64562980e7254e5190b94603251902&q=${enteredLocation}&days=7&aqi=no&alerts=no`,
      );

      console.log('Current Weather:', currentResponse.data);
      console.log('Forecast:', forecastResponse.data);

      setWeatherData(currentResponse.data);
      setForecastData(forecastResponse.data);
      setShowSearch(false);
    } catch (error) {
      console.log('Error:', error);
      Alert.alert(
        'Error',
        'Failed to fetch weather data. Please check the location and try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  const onPressSubmit = () => {
    fetchWeather(location);
  };

  const onPressBack = () => {
    setShowSearch(true);
    setWeatherData(null);
    setForecastData(null);
    setLocation('');
  };

  const formatTime = date => {
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  };

  const formatDate = date => {
    return date.toLocaleDateString([], {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  // Format hourly data
  const getHourlyData = () => {
    if (!forecastData?.forecast?.forecastday?.[0]?.hour) return [];

    const currentHour = new Date().getHours();
    const todayHours = forecastData.forecast.forecastday[0].hour;

    return todayHours
      .slice(currentHour, currentHour + 8)
      .map((hour, index) => ({
        time:
          index === 0
            ? 'Now'
            : new Date(hour.time).toLocaleTimeString([], {hour: 'numeric'}),
        temp: Math.round(hour.temp_c),
        icon: getWeatherIcon(hour.condition.text, hour.is_day === 1),
      }));
  };

  // Format weekly data
  const getWeeklyData = () => {
    if (!forecastData?.forecast?.forecastday) return [];

    return forecastData.forecast.forecastday.map((day, index) => ({
      day:
        index === 0
          ? 'Today'
          : new Date(day.date).toLocaleDateString([], {weekday: 'long'}),
      high: Math.round(day.day.maxtemp_c),
      low: Math.round(day.day.mintemp_c),
      condition: day.day.condition.text,
      icon: getWeatherIcon(day.day.condition.text, true),
    }));
  };

  if (showSearch || !weatherData) {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4A90E2"
          translucent={false}
        />
        <LinearGradient
          colors={['#4A90E2', '#5BA0F2', '#6BB6FF']}
          style={styles.gradient}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchTitle}>Weather App</Text>
            <Text style={styles.searchSubtitle}>
              Enter a location to get weather information
            </Text>

            <TextInput
              value={location}
              onChangeText={setLocation}
              placeholder="Enter city name (e.g., London, New York)"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              style={styles.textInput}
            />

            <TouchableOpacity
              onPress={onPressSubmit}
              disabled={loading}
              style={[
                styles.submitButton,
                loading && styles.submitButtonDisabled,
              ]}>
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.submitButtonText}>Get Weather</Text>
              )}
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }

  const hourlyData = getHourlyData();
  const weeklyData = getWeeklyData();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#4A90E2"
        translucent={false}
      />
      <LinearGradient
        colors={['#4A90E2', '#5BA0F2', '#6BB6FF']}
        style={styles.gradient}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={[styles.header, {marginTop: 50}]}>
            <View style={styles.headerTop}>
              <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
                <Text style={styles.backButtonText}>← Back</Text>
              </TouchableOpacity>
              {/* <Text style={styles.time}>{formatTime(currentTime)}</Text> */}
            </View>
            <View style={[styles.locationContainer, {marginTop: 20}]}>
              <Text style={styles.locationIcon}>📍</Text>
              <Text style={styles.location}>
                {weatherData.location.name}, {weatherData.location.country}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 6,
              }}>
              <Text style={styles.date}>{formatDate(currentTime)}</Text>
              <Text style={styles.date}>{formatTime(currentTime)}</Text>
            </View>
          </View>

          {/* Current Weather */}
          <View style={styles.currentWeather}>
            <Text style={styles.weatherIcon}>
              {getWeatherIcon(
                weatherData.current.condition.text,
                weatherData.current.is_day === 1,
              )}
            </Text>
            <Text style={styles.temperature}>
              {Math.round(weatherData.current.temp_c)}°
            </Text>
            <Text style={styles.condition}>
              {weatherData.current.condition.text}
            </Text>

            {/* Weather Details Grid */}
            <View style={styles.detailsGrid}>
              <WeatherCard style={styles.detailCard}>
                <Text style={styles.detailIcon}>💧</Text>
                <Text style={styles.detailLabel}>Humidity</Text>
                <Text style={styles.detailValue}>
                  {weatherData.current.humidity}%
                </Text>
              </WeatherCard>

              <WeatherCard style={styles.detailCard}>
                <Text style={styles.detailIcon}>💨</Text>
                <Text style={styles.detailLabel}>Wind</Text>
                <Text style={styles.detailValue}>
                  {weatherData.current.wind_kph} km/h
                </Text>
              </WeatherCard>

              <WeatherCard style={styles.detailCard}>
                <Text style={styles.detailIcon}>👁️</Text>
                <Text style={styles.detailLabel}>Visibility</Text>
                <Text style={styles.detailValue}>
                  {weatherData.current.vis_km} km
                </Text>
              </WeatherCard>

              <WeatherCard style={styles.detailCard}>
                <Text style={styles.detailIcon}>🌡️</Text>
                <Text style={styles.detailLabel}>Feels Like</Text>
                <Text style={styles.detailValue}>
                  {Math.round(weatherData.current.feelslike_c)}°
                </Text>
              </WeatherCard>
            </View>
          </View>

          {/* Hourly Forecast */}
          {hourlyData.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Hourly Forecast</Text>
              <FlatList
                data={hourlyData}
                renderItem={({item}) => <HourlyItem item={item} />}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.hourlyList}
              />
            </View>
          )}

          {/* Weekly Forecast */}
          {weeklyData.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>7-Day Forecast</Text>
              <WeatherCard style={styles.weeklyCard}>
                {weeklyData.map((item, index) => (
                  <WeeklyItem
                    key={index}
                    item={item}
                    index={index}
                    isLast={index === weeklyData.length - 1}
                  />
                ))}
              </WeatherCard>
            </View>
          )}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  searchTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  searchSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 40,
    textAlign: 'center',
  },
  textInput: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  submitButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    minWidth: 150,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  location: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  time: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  date: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.75)',
  },
  currentWeather: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  weatherIcon: {
    fontSize: 80,
    marginBottom: 16,
  },
  temperature: {
    fontSize: 72,
    fontWeight: '100',
    color: 'white',
    marginBottom: 8,
  },
  condition: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 24,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    padding: 16,
    backdropFilter: 'blur(10px)',
  },
  detailCard: {
    width: (width - 64) / 2,
    marginBottom: 16,
    alignItems: 'center',
  },
  detailIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.75)',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
  },
  hourlyList: {
    paddingRight: 24,
  },
  hourlyCard: {
    alignItems: 'center',
    marginRight: 16,
    minWidth: 80,
  },
  hourlyTime: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.75)',
    marginBottom: 8,
  },
  hourlyIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  hourlyTemp: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  weeklyCard: {
    padding: 0,
  },
  weeklyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  weeklyBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  weeklyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  weeklyIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  weeklyInfo: {
    flex: 1,
  },
  weeklyDay: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginBottom: 2,
  },
  weeklyCondition: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.75)',
  },
  weeklyTemps: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weeklyHigh: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginRight: 8,
  },
  weeklyLow: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
  },
});
