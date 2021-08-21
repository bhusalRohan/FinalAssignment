import React, {useState} from 'react';
import {FlatList, ImageBackground, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import RecyclerHistory from '../Home/components/RecyclerHistory';
import * as weatherActions from '../../store/actions/weather';

var historydata = [];

const WEATHER_API_KEY = '8431c1af723ec74b5e15ecf8656b25dc';
//const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/onecall?';

async function load(lat, lon) {
  const weatherUrl = `${BASE_WEATHER_URL}lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;
  const response = await fetch(weatherUrl);
  const result = await response.json();
  historydata = result.daily.slice(1, 11);
  //console.log(lat, result.daily.slice(1, 11));
  console.log(lat, historydata);
}

function HistoryScreen({route}) {
  const lat = route.params.lat;
  const lon = route.params.lon;
  const histData = route.params.histData;

  //console.log(route.params.lat, route.params.lat);
  //load(lat, lon);
  console.log('Siva', histData);
  return (
    <ImageBackground
      style={{flex: 1, marginTop: 5}}
      source={require('../../assets/full-background-1.jpg')}>
      <FlatList
        data={histData}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => (
          <RecyclerHistory
            temperature={item.temp.max}
            humidity={item.humidity}
            windSpeed={item.wind_speed}
          />
        )}
        ListFooterComponent={<View style={{height: 20}} />}></FlatList>
    </ImageBackground>
  );
}

export default HistoryScreen;
