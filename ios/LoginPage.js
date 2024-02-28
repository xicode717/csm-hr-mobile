import React, {Component, useState, useCallback} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Style from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../component/color/Colors';
const {width, height} = Dimensions.get('window');

const LoginPage = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const behavior = Platform.OS === 'ios' ? '' : 'position';
  const [hidePassword, setHidePassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [inputs, setInputs] = useState({
    user_name: '',
    password: '',
  });
  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };
  const [errors, setErrors] = useState({});

  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../../assets/login/bg-login.png')}
      style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={{marginTop: height * 0.13}} />
      <View style={Style.wrapperIcon}>
        <Image source={require('../../../assets/logo/login-logo.png')} />
      </View>
      <View style={{marginTop: height * 0.03}} />
      <View style={Style.wrapperIcon}>
        <Text style={Style.fontTittle}>CSM-HR BAROKAH PERKASA GROUP</Text>
      </View>

      <View style={{marginTop: height * 0.02}} />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={behavior}
        keyboardVerticalOffset={-130}
        enabled>
        <View style={Style.wrapperForm}>
          <Text style={Style.label}>Username</Text>
          <View style={{marginTop: height * 0.01}} />
          <View
            style={[
              Style.inputContainer,
              {
                borderColor: error
                  ? Colors.Red
                  : isFocused
                  ? Colors.BluePrimary
                  : Colors.Light,
                alignItems: 'center',
              },
            ]}>
            {/* <Icon
            name='email'
            style={{color: Colors.GreyIcon, fontSize: 22, marginRight: 10}}
          /> */}
            <Icon name="mail" />
            <TextInput
              placeholderTextColor="#9E9595"
              autoCorrect={false}
              onFocus={() => {
                onFocus();
                setIsFocused(true);
              }}
              style={{color: Colors.Black, flex: 1}}
              {...props}
              placeholder="Username"
              error={errors.user_name}
              onChangeText={text => handleOnChange(text, 'user_name')}
            />
          </View>
          {error && (
            <Text style={{marginTop: 7, color: Colors.Red, fontSize: 12}}>
              {error}
            </Text>
          )}
          <View style={{marginTop: height * 0.015}} />
          <Text style={Style.labelPassword}>Password</Text>
          <View style={{marginTop: height * 0.01}} />
          <View
            style={[
              Style.inputContainer,
              {
                borderColor: error
                  ? Colors.Red
                  : isFocused
                  ? Colors.BluePrimary
                  : Colors.Light,
                alignItems: 'center',
              },
            ]}>
            <Icon
              name="lock-closed"
              style={{color: Colors.GreyIcon, fontSize: 22, marginRight: 10}}
            />
            <TextInput
              placeholderTextColor="#9E9595"
              password
              placeholder="Password"
              autoCorrect={false}
              onFocus={() => {
                onFocus();
                setIsFocused(true);
              }}
              onBlur={() => setIsFocused(false)}
              secureTextEntry={hidePassword}
              style={{color: Colors.Black, flex: 1}}
              {...props}
              error={errors.password}
              onChangeText={text => handleOnChange(text, 'password')}
            />
            <Icon
              onPress={() => setHidePassword(!hidePassword)}
              name={hidePassword ? 'eye' : 'eye-off'}
              style={{color: Colors.Black, fontSize: 22}}
            />
          </View>
          {error && (
            <Text style={{marginTop: 7, color: Colors.Red, fontSize: 12}}>
              {error}
            </Text>
          )}
          <View style={{marginTop: height * 0.04}} />
          <TouchableOpacity style={Style.frameBtnLogin}>
            <Text style={Style.fontLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginPage;
