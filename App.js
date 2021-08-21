import React from 'react';
//import { PersistGate } from 'redux-persist/integration/react'
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import SplashScreen from './src/screens/Splash/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import LoginScreen from './src/screens/AuthScreens/LoginScreen';
import SignUpScreen from './src/screens/AuthScreens/SignUpScreen';
import {persistor, store} from './src/store';
import HomeScreen from './src/screens/Home';
import {SafeAreaView} from 'react-native-safe-area-context';
import HistoryScreen from './src/screens/ListScreens/HistoryScreen';
import RecyclerHistory from './src/screens/Home/components/RecyclerHistory';

const Tweets = () => {
  <Screen>
    <Text>Tewwts Screen</Text>
  </Screen>;
};

const WeatherDetails = () => (
  <SafeAreaView>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  </SafeAreaView>
);

const WeatherHistory = () => (
  <SafeAreaView>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HistoryScreen />
      </PersistGate>
    </Provider>
  </SafeAreaView>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    // <Provider store={store}>
    //  <PersistGate persistor={persistor}>
    //    <HomeScreen />
    //  </PersistGate>
    //</Provider>

    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

    //<SplashScreen />
    //<RecyclerHistory temperature="10"></RecyclerHistory>
  );
};

export default App;
