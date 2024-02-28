import {StyleSheet, Dimensions} from 'react-native';
// import Colors from "../../component/color/Colors";
import Colors from '../../../component/color/Colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  containter: {
    backgroundColor: Colors.Background,
  },
  wrapperIcon: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameIcon: {
    width: width * 0.09,
    height: height * 0.09,
  },
  wrapperTitle: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontTittle: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.02,
    fontWeight: 'bold',
    color: Colors.BlackFont,
  },
  wrapperForm: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: height * 0.023,
    fontFamily: 'sans-serif',
    color: Colors.Black,
    fontWeight: 'bold',
    right: width * 0.35,
  },
  labelPassword: {
    fontSize: height * 0.023,
    fontFamily: 'sans-serif',
    color: Colors.Black,
    fontWeight: 'bold',
    right: width * 0.35,
  },
  inputContainer: {
    width: '90%',
    height: height * 0.075,
    backgroundColor: Colors.GreyField,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  frameBtnLogin: {
    width: '80%',
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BlueBtnLogin,
    borderRadius: 10,
    elevation: 2
  },
  fontLogin: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.019,
    color: Colors.white,
    fontWeight: '700'
  }
});

export default Style;
