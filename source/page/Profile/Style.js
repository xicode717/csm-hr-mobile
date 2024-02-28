import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../component/color/Colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  wrapperHeader: {
    width: width,
    height: height * 0.27,
    backgroundColor: Colors.BackgroundHeaderHome,
    flexDirection: 'row'
  },
  frameHeader1: {
    width: '40%',
    justifyContent: 'center',
    alignItems:'flex-start'
  },
  frameHeader2: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  imgProfile: {
    width: width * 0.25,
    height: height * 0.13,
    marginHorizontal: 25
  },
  textNameProfile: {
    fontSize: height * 0.025,
    fontVariant: 'sans-serif',
    fontWeight: 'bold',
    color: Colors.white,
  },
  textCodeDivision: {
    fontSize: height * 0.018,
    fontVariant: 'sans-serif',
    fontWeight: '600',
    color: Colors.white,
  },
  textNik: {
    fontSize: height * 0.020,
    fontVariant: 'sans-serif',
    fontWeight: 'bold',
    color: Colors.white,
  },
  frameVerifie: {
    width: '50%',
    height: height * 0.04,
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconVerifieHeader: {
    marginLeft: 5,
  },
  textVerifieHeader: {
    fontSize: height * 0.018,
    fontVariant: 'sans-serif',
    color: Colors.GreenVerifie,
    fontWeight: '500',
    marginLeft: 3
  },
  labelListButton: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.027,
    fontWeight: 'bold',
    color: Colors.BlackFont,
    marginHorizontal: 18
  },
  wrapperListButton: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  frameListButton: {
    width: '90%',
    height: height * 0.05,
    backgroundColor: Colors.white,
    borderBottomWidth: 1.3,
    borderColor: Colors.GreyBorderFilter,
    flexDirection: 'row'
  },
  frameButtonRow1: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  frameButtonRow2: {
    width: '79%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  frameButtonRow3: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  textListButton: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.025,
    fontWeight: '500',
    color: Colors.BlackFont
  }
});

export default Style;
