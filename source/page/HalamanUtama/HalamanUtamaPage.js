import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native'
import Colors from '../../component/color/Colors';
import Style from './Style';

const HalamanUtamaPage = () => {
  const navigation = useNavigation();
  return (
    <View style={Style.containter}>
      <StatusBar animated={true} backgroundColor={Colors.white} barStyle='dark-content'  />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Style.headerFrameHome}>
          <View style={{height: height * 0.07}} />
          <View style={Style.frameHeaderName}>
            <Text style={Style.textHeaderName}> Hai, Wixi Prayoga </Text>
          </View>
          <View style={{height: height * 0.045}} />
          <View style={Style.wrapperGradientCardHome}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#C6700A', '#FD8900', '#FA3C02']}
              style={Style.gradientCardHome}>
              <View style={Style.GradientCardHomeRow}>
                <View style={Style.cardHomeRow1}>
                  <Text style={Style.textNIK}>BPG0000997</Text>
                  <View style={{height: height * 0.005}} />
                  <Text style={Style.textJabatan}>Jabatan</Text>
                  <Text style={[Style.textJabatan, {marginTop: 3}]}>
                    ICT PROGRAMER ( STAFF )
                  </Text>
                </View>
                <View style={Style.cardHomeRow2}>
                  <Text style={Style.textDivision}>CORCIT</Text>
                </View>
              </View>
              <View style={Style.lineCardHeaderFull} />

              <View style={{height: height * 0.009}} />
              <View>
                <View style={Style.columnLenghtWork}>
                  <Text style={Style.textLabelLenghtWork}>Lama Bekerja &#x2007;</Text>
                  <Text style={Style.textLenghtWork}>2 Th, 2 Bln, 17 Hr</Text>
                </View>
                <View style={Style.columnSickLeave}>
                  <Text style={Style.textLabelSickLeave}>Izin Sakit &#x2007;&#x2007;&#x2007;&#x2007; </Text>
                  <View style={Style.spainSickLeave}>
                    <Text style={Style.textSickLeave}> 5 </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>

        {/* Card Cuti */}
        <View style={{height: height * 0.15}} />
        <View style={Style.wrapperCardCuti}>
          <View style={Style.frameCardCuti1}>
            <Text style={Style.textLabelCuti}>Cuti</Text>
            <View style={Style.frameTotalCuti}>
              <Text style={Style.textTotalCuti}>2</Text>
              <Text style={Style.textHariCuti}>Hari</Text>
            </View>
          </View>
          <View style={Style.frameCardCuti1}>
            <Text style={Style.textLabelCuti}>Perdin</Text>
            <View style={Style.frameTotalCuti}>
              <Text style={Style.textTotalCuti}>2</Text>
              <Text style={Style.textHariCuti}>Hari</Text>
            </View>
          </View>
          <View style={Style.frameCardCuti1}>
            <Text style={Style.textLabelCuti}>SP</Text>
            <View style={Style.frameTotalCuti}>
              <Text style={Style.textTotalCuti}>2</Text>
            </View>
          </View>
        </View>

        {/* end Card Cuti */}
        <View style={{height: height * 0.03}} />
        <View style={Style.lineFull} />

        {/* Card Materi */}
        <View style={{height: height * 0.015}} />
        <View style={Style.wrapperLabelMateri}>
          <View style={Style.frameLabelMateriLeft}>
            <Text style={Style.textLabelMateri}>Materi</Text>
          </View>
          <View style={Style.frameLabelMateriRight}>
            <TouchableOpacity onPress={() => navigation.navigate('MateriListPage', {})}>
              <Text style={Style.textLabelSeeAll}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* end Card Materi */}

        {/* list Materi */}
        <View style={Style.wrapperMateri}>
          <View style={[Style.frameListMateri, Style.shadowlistMateri]}>
            <Image
              resizeMode="stretch"
              source={require('../../assets/materi/cover.png')}
              style={Style.imageMateri}
            />
            <Text style={Style.textTitleMateri}>
              Cara Pengedalian Cahaya dalam ruangan
            </Text>
            <View style={{height: height * 0.005}} />
            <Text style={Style.textDivisiMateri}>OPERATION</Text>
          </View>

          <View style={[Style.frameListMateri, Style.shadowlistMateri]}>
            <Image
              resizeMode="stretch"
              source={require('../../assets/materi/cover.png')}
              style={Style.imageMateri}
            />
            <Text style={Style.textTitleMateri}>
              Cara Pengedalian Cahaya dalam ruangan
            </Text>
            <View style={{height: height * 0.005}} />
            <Text style={Style.textDivisiMateri}>OPERATION</Text>
          </View>

          <View style={[Style.frameListMateri, Style.shadowlistMateri]}>
            <Image
              resizeMode="stretch"
              source={require('../../assets/materi/cover.png')}
              style={Style.imageMateri}
            />
            <Text style={Style.textTitleMateri}>
              Cara Pengedalian Cahaya dalam ruangan
            </Text>
            <View style={{height: height * 0.005}} />
            <Text style={Style.textDivisiMateri}>OPERATION</Text>
          </View>

          <View style={[Style.frameListMateri, Style.shadowlistMateri]}>
            <Image
              resizeMode="stretch"
              source={require('../../assets/materi/cover.png')}
              style={Style.imageMateri}
            />
            <Text style={Style.textTitleMateri}>
              Cara Pengedalian Cahaya dalam ruangan
            </Text>
            <View style={{height: height * 0.005}} />
            <Text style={Style.textDivisiMateri}>OPERATION</Text>
          </View>

          <View style={[Style.frameListMateri, Style.shadowlistMateri]}>
            <Image
              resizeMode="stretch"
              source={require('../../assets/materi/cover.png')}
              style={Style.imageMateri}
            />
            <Text style={Style.textTitleMateri}>
              Cara Pengedalian Cahaya dalam ruangan
            </Text>
            <View style={{height: height * 0.005}} />
            <Text style={Style.textDivisiMateri}>OPERATION</Text>
          </View>
        </View>
        {/* end list Materi */}

        <View style={{height: height * 0.15}} />
      </ScrollView>
    </View>
  );
};

export default HalamanUtamaPage;
