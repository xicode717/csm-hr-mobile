import React from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native'
import Colors from '../../component/color/Colors'
import Style from './Style'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
const {width, height} = Dimensions.get('window')

const ProfilePage = () => {
  const navigation = useNavigation();
  return (
    <View style={Style.containter}>
      <StatusBar barStyle='light-content' backgroundColor={Colors.BackgroundHeaderHome} />
      <View style={{height: height * 0.018}} />
      <View style={Style.wrapperHeader}>
        <View style={Style.frameHeader1}>
          <Image resizeMode='stretch' style={Style.imgProfile} source={require('../../assets/profile/profile.png')} />
        </View>
        <View style={Style.frameHeader2}>
          <Text style={Style.textNameProfile}>Wixi Prayoga</Text>
          <View style={{height: height * 0.005}} />
          <Text style={Style.textCodeDivision}>CORCIT</Text>
          <View style={{height: height * 0.005}} />
          <Text style={Style.textNik}>BPG0000997</Text>
          <View style={{height: height * 0.005}} />
          <View style={Style.frameVerifie}>
            <Icon style={Style.iconVerifieHeader} color={Colors.GreenVerifie} size={height * 0.03} name="checkmark-circle" />
            <Text style={Style.textVerifieHeader}>Terverifikasi</Text>
          </View>
        </View>
      </View>
      <View style={{height: height * 0.018}} />
      <Text style={Style.labelListButton}>Account & Security</Text>
      <View style={{height: height * 0.025}} />

      <View style={Style.wrapperListButton}>
        <TouchableOpacity onPress={() => navigation.navigate('NotFoundPage', {})} style={Style.frameListButton}>
          <View style={Style.frameButtonRow1}>
            <Icon name="cog" size={height * 0.025} color={Colors.BlackFont} />
          </View>
          <View style={Style.frameButtonRow2}>
            <Text style={Style.textListButton}>Ganti Password</Text>
          </View>
          <View style={Style.frameButtonRow3}><Icon name="chevron-forward" size={height * 0.025} color={Colors.BlackFont} /></View>
        </TouchableOpacity>
      </View>

      <View style={{height: height * 0.018}} />
      <Text style={Style.labelListButton}>General</Text>
      <View style={{height: height * 0.025}} />

      <View style={Style.wrapperListButton}>
        <TouchableOpacity style={Style.frameListButton}>
          <View style={Style.frameButtonRow1}>
            <Icon name="business-outline" size={height * 0.027} color={Colors.BlackFont} />
          </View>
          <View style={Style.frameButtonRow2}>
            <Text style={Style.textListButton}>Data Account</Text>
          </View>
          <View style={Style.frameButtonRow3}><Icon name="chevron-forward" size={height * 0.025} color={Colors.BlackFont} /></View>
        </TouchableOpacity>
      </View>
      <View style={{height: height * 0.018}} />
      <View style={Style.wrapperListButton}>
        <TouchableOpacity style={Style.frameListButton}>
          <View style={Style.frameButtonRow1}>
            <Icon name="person-outline" size={height * 0.027} color={Colors.BlackFont} />
          </View>
          <View style={Style.frameButtonRow2}>
            <Text style={Style.textListButton}>Data Pribadi</Text>
          </View>
          <View style={Style.frameButtonRow3}><Icon name="chevron-forward" size={height * 0.025} color={Colors.BlackFont} /></View>
        </TouchableOpacity>
      </View>
      <View style={{height: height * 0.018}} />
      <View style={Style.wrapperListButton}>
        <TouchableOpacity style={Style.frameListButton}>
          <View style={Style.frameButtonRow1}>
            <Icon name="people-outline" size={height * 0.027} color={Colors.BlackFont} />
          </View>
          <View style={Style.frameButtonRow2}>
            <Text style={Style.textListButton}>Data Keluarga</Text>
          </View>
          <View style={Style.frameButtonRow3}><Icon name="chevron-forward" size={height * 0.025} color={Colors.BlackFont} /></View>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default ProfilePage