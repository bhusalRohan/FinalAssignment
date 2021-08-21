import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../../../utils/colors';

function RecyclerHistory({temperature, humidity, windSpeed}) {
  return (
    <View
      style={{
        marginStart: 10,
        marginEnd: 10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: colors.white,
      }}>
      <View style={styles.containerStyle}>
        <View style={{marginTop: 5, flexGrow: 1}}>
          <Text style={{color: colors.black, flex: 1, width: '100%'}}>
            Temperature:
          </Text>
          <Text style={{color: colors.primary, flex: 1, width: '100%'}}>
            {temperature + '\xB0' + 'C'}
          </Text>
        </View>

        <View style={{marginTop: 5, flexGrow: 1}}>
          <Text style={{color: colors.black, flex: 1}}> Humidity: </Text>
          <Text style={{color: colors.primary, flex: 10}}>
            {humidity + '%'}
          </Text>
        </View>

        <View style={{marginTop: 5}}>
          <Text style={{color: colors.black, flex: 0.5}}>Wind speed:</Text>
          <Text style={{color: colors.primary, flex: 4}}>
            {windSpeed + ' knots'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
  },
});

export default RecyclerHistory;
