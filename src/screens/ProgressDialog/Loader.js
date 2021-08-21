import React from 'react';
import {StyleSheet, View} from 'react-native';
import Spinner from 'react-native-spinkit';

export default Loader = props => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
