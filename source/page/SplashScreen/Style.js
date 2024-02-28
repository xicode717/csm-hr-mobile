import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../component/color/Colors';

const {width,height} = Dimensions.get('window');

const Style = StyleSheet.create({
  container: {
    backgroundColor: Colors.Background,
  },
  wrapperLogoBarokah: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  frameLogoBarokah: {
    width: width * 0.7,
    height: height * 0.26,
  },
  fontTitle: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.024,
    fontWeight: 'bold',
    color: Colors.YellowTitle
  },
  wrapperTextBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.01,
    width: width
  },
  textBottom: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.024,
    fontWeight: 'bold',
    color: Colors.BlackFont
  }
});

export default Style;
