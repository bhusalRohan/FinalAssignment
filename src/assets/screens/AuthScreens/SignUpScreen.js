import React, {useState} from 'react';
import {Text} from 'react-native';
import {TextInput} from 'react-native';
import {Image} from 'react-native';
import {View} from 'react-native';
import {ImageBackground, StyleSheet} from 'react-native';

import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-spinkit';

import colors from '../../utils/colors';

const createUser = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('Successfully Registered');
    })
    .catch(error => {
      alert(error);
    });
};

function SignUpScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/full-background-1.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={{fontFamily: 'gotham_light.otf'}}>
          New User? Signup here
        </Text>
      </View>

      <View
        style={{
          width: '80%',
          position: 'absolute',
          top: 230,
        }}>
        <View style={styles.container}>
          <Image
            style={{width: 25, height: 25, tintColor: colors.primary}}
            source={require('../../assets/email.webp')}
          />
          <TextInput
            style={styles.editTextStyle}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.container}>
          <Image
            style={{width: 25, height: 25, tintColor: colors.primary}}
            source={require('../../assets/password.png')}
          />
          <TextInput
            style={styles.editTextStyle}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </View>

        <View
          style={styles.loginButton}
          onTouchEnd={() => createUser(email, password)}>
          <Text
            style={{
              color: colors.white,
              fontSize: 18,
              fontWeight: 'normal',
            }}>
            REGISTER
          </Text>
        </View>

        <Text style={{color: colors.black, fontSize: 12}}>
          By clicking Register button, you are agreeing to our tems & conditions
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  loginButton: {
    width: '100%',
    height: 50,
    marginVertical: 30,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signUpButton: {
    width: '100%',
    height: 50,
    backgroundColor: colors.accent,
  },

  logo: {
    width: 100,
    height: 100,
    tintColor: '#ed6e4d',
  },

  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },

  container: {
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 0.5,
    paddingStart: 10,
    paddingEnd: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  editTextStyle: {
    width: '100%',
    color: colors.black,
    marginStart: 5,
  },
});

export default SignUpScreen;
