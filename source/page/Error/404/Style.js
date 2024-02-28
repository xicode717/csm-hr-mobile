import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../component/color/Colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  wrapperTittle: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitile: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.03,
    fontWeight: 'bold',
    color: Colors.YellowTitle
  },
  wraperImgError: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgError: {
    width: '60%',
    height: height * 0.3
  },
  wrapperButton: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textNotFound: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.04,
    fontWeight: '700',
    color: Colors.BlackFont
  },
  labelNotFound: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.02,
    fontWeight: 'normal',
    color: Colors.BlackFont
  },
  frameButtonBack: {
    width: '60%',
    height: height * 0.08,
    backgroundColor: Colors.YellowButton,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButtonBack: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.019,
    color: Colors.BlackFont,
    fontWeight: '500'
  }
});

export default Style;
