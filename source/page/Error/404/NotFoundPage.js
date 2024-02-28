import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Style from './Style';
import {useNavigation} from '@react-navigation/native'
const {widht, height} = Dimensions.get('window');

const NotFoundPage = () => {
  const navigation = useNavigation();
  return (
    <View style={Style.containter}>
      <View style={{height: height * 0.05}} />
      <View style={Style.wrapperTittle}>
        <Text style={Style.textTitile}>BAROKAH PERKASA GROUP</Text>
      </View>
      <View style={{height: height * 0.13}} />
      <View style={Style.wraperImgError}>
        <Image
          style={Style.imgError}
          source={require('../../../assets/error/not_found.png')}
        />
      </View>
      <View style={{height: height * 0.05}} />
      <View style={Style.wrapperButton}>
        <Text style={Style.textNotFound}>PAGE NOT FOUND</Text>
        <View style={{height: height * 0.01}} />
        <Text style={Style.labelNotFound}>
          we couldn't find the page you were looking for
        </Text>
        <View style={{height: height * 0.05}} />
        <TouchableOpacity onPress={() => navigation.goBack()} style={Style.frameButtonBack}>
          <Text style={Style.textButtonBack}>Back To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotFoundPage;
