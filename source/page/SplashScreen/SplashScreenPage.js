import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');
import {StackActions, useNavigation} from '@react-navigation/native';
import Style from './Style';

const SplashScreenPage = () => {
  const navigation = useNavigation();
  const getData = () => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('LoginPage'));
    }, 5000);
  };

  useEffect(() => {
    getData();
  },[])

  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../assets/splash-screen/splash-screen.png')}
      style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={{height: height * 0.2}} />
      <View style={Style.wrapperLogoBarokah}>
        <Image
          style={Style.frameLogoBarokah}
          source={require('../../assets/logo/login-logo.png')}
          resizeMode="stretch"
        />
        <View style={{height: height * 0.1}} />
        <Text style={Style.fontTitle}> PORTAl KARYAWAN</Text>
        <Text style={Style.fontTitle}> BAROKAH PERKASA GROUP</Text>
      </View>

      <View style={Style.wrapperTextBottom}>
        <Text style={Style.textBottom}>CSM-HR</Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreenPage;
