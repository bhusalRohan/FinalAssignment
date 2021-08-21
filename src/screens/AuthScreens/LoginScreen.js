import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {TextInput} from 'react-native';
import {Image} from 'react-native';
import {View} from 'react-native';
import {ImageBackground, StyleSheet} from 'react-native';

import colors from '../../utils/colors';
import auth from '@react-native-firebase/auth';

const signin = (email, password, navigation) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => navigation.navigate('Weather Details'))
    .catch(error =>
      alert('Invalid login. Please check the credentials and try again!'),
    );
};

function LoginScreen(props) {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/full-background-1.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={{fontFamily: 'gotham_light.otf'}}>Welcome back</Text>
      </View>

      <View
        style={{
          width: '80%',
          position: 'absolute',
          top: 200,
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
          onTouchEnd={() => signin(email, password, navigation)}>
          <Text
            style={{
              color: colors.white,
              fontSize: 18,
              fontWeight: 'normal',
            }}>
            LOGIN
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Don't have an account? </Text>
          <Text
            style={{color: colors.primary}}
            onTouchEnd={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
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
    top: 50,
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

export default LoginScreen;
