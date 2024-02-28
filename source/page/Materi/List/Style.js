import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../component/color/Colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  wrapperHeader: {
    width: width,
    flexDirection: 'row',
  },
  frameHeaderBack: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  frameHeaderFilter: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconBack: {
    marginHorizontal: 10,
    color: Colors.BlackFont,
  },
  frameFilter: {
    width: '90%',
    height: height * 0.06,
    borderRadius: 10,
    backgroundColor: Colors.white,
    borderColor: Colors.GreyLineFull,
    borderWidth: 3,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  fontListMateri: {
    fontSize: height * 0.023,
    fontVariant: 'sans-serif',
    color: Colors.BlackFont,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal: 15,
  },
  wrapperList: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameList: {
    width: '90%',
    height: height * 0.18,
    backgroundColor: Colors.white,
    elevation: 2,
    borderRadius: 10,
    flexDirection: 'row',
  },
  frameListRow1: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  frameListRow2: {
    width: '65%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  imgCoverMater: {
    width: width * 0.28,
    height: height * 0.15
  },
  textTitleList: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.019,
    fontWeight: 'bold',
    color: Colors.BlackFont
  },
  textDivisiList: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.017,
    fontWeight: '600',
    color: Colors.BlackFont
  },
  textReadList: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.015,
    fontWeight: 'normal',
    color: Colors.BlackFont
  }
});

export default Style;
