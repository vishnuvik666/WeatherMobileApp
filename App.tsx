// // import * as React from 'react';
// // import {
// //   createStaticNavigation,
// //   NavigationContainer,
// // } from '@react-navigation/native';
// // import {createNativeStackNavigator} from '@react-navigation/native-stack';
// // import HomeScreen from './src/HomeScreen';
// // import DetailScreen from './src/DetailScreen';

// // const RootStack = createNativeStackNavigator({
// //   screens: {
// //     Home: HomeScreen,
// //     Detail: DetailScreen,
// //   },
// // });

// // const Navigation = createStaticNavigation(RootStack);

// // export default function App() {
// //   return <Navigation />;
// // }

// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './src/HomeScreen';
// import DetailScreen from './src/DetailScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* Set the StatusBar color */}
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
