import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../component/color/Colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  headerFrameHome: {
    width: width,
    height: height * 0.28,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor: Colors.BackgroundHeaderHome,
  },
  frameHeaderName: {
    marginHorizontal: width * 0.03,
  },
  textHeaderName: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.025,
    color: Colors.white,
    fontWeight: 'bold',
  },
  wrapperGradientCardHome: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientCardHome: {
    width: '90%',
    height: height * 0.23,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 45,
  },
  GradientCardHomeRow: {
    flexDirection: 'row',
  },
  cardHomeRow1: {
    width: '60%',
    height: height * 0.15,
  },
  cardHomeRow2: {
    alignItems: 'flex-end',
    width: '40%',
    height: height * 0.15,
  },
  textNIK: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.02,
    fontWeight: 'bold',
    color: Colors.white,
    marginHorizontal: 18,
    marginVertical: 10,
  },
  textDivision: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.023,
    fontWeight: 'bold',
    color: Colors.white,
    marginHorizontal: 18,
    marginVertical: 10,
  },
  textJabatan: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.02,
    fontWeight: '600',
    color: Colors.white,
    marginHorizontal: 18,
  },
  lineCardHeaderFull: {
    width: '100%',
    height: height * 0.003,
    backgroundColor: Colors.GreyLineFull
  },
  columnLenghtWork: {
    flexDirection: 'row'
  },
  columnSickLeave: {
    flexDirection: 'row'
  },
  textLabelLenghtWork: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.02,
    fontWeight: 'normal',
    color: Colors.white,
    marginHorizontal: 18,
  },
  textLenghtWork: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.02,
    fontWeight: '600',
    color: Colors.white,
    marginHorizontal: 1,
  },
  textLabelSickLeave: {
    fontVariant: 'roboto',
    fontSize: height * 0.02,
    fontWeight: 'normal',
    color: Colors.white,
    marginHorizontal: 18,
  },
  spainSickLeave: {
    marginTop: 3,
    width: '10%',
    height: height * 0.025,
    borderRadius: 3,
    backgroundColor: Colors.YelloSpain,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSickLeave: {
    fontVariant: 'roboto',
    fontSize: height * 0.02,
    fontWeight: '600',
    color: Colors.BlackFont,
    marginHorizontal: 1,
  },
  wrapperCardCuti: {
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  frameCardCuti1: {
    width: '30%',
    height: height * 0.1,
    backgroundColor: Colors.white,
    elevation: 2,
    marginHorizontal: 3,
    borderRadius: 8
  },
  textLabelCuti: {
    fontVariant: 'sans-serif',
    fontSize: height * 0.018,
    fontWeight: '800',
    color: Colors.BlackFont,
    marginHorizontal: 10,
    marginTop: 5
  },
  frameTotalCuti: {
    flexDirection: 'row'
  },
  textTotalCuti: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.02,
    fontWeight: '800',
    color: Colors.RedCuti,
    marginHorizontal: 10,
    marginTop: 18 
  },
  textHariCuti: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.02,
    fontWeight: '800',
    color: Colors.GreyDay,
    marginHorizontal: 2,
    marginTop: 18 
  },
  lineFull: {
    width: width,
    height: height * 0.016,
    backgroundColor: Colors.GreyLineFull
  },
  wrapperLabelMateri: {
    width: width,
    flexDirection: 'row'
  },
  frameLabelMateriLeft: {
    width: '50%',
    alignItems: 'flex-start'
  },
  frameLabelMateriRight: {
    width: '50%',
    alignItems: 'flex-end'
  },
  textLabelMateri: {
    fontSize: height * 0.018,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: Colors.BlackFont,
    marginHorizontal: 15,
  },
  textLabelSeeAll: {
    fontSize: height * 0.018,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: Colors.RedSeeAll,
    right: 25,
  },
  wrapperMateri: {
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  frameListMateri: {
    marginLeft: 12,
    marginTop: 10,
    width: '45%',
    height: height * 0.24,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  shadowlistMateri: {
    elevation: 2
  },
  imageMateri: {
    width: '100%',
    height: height * 0.16,
  },
  textTitleMateri: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.016,
    fontWeight: 'bold',
    color: Colors.BlackTitleMateri,
    marginTop: 5,
    marginHorizontal: 6
  },
  textDivisiMateri: {
    fontFamily: 'sans-serif',
    fontSize: height * 0.011,
    fontWeight: '600',
    color: Colors.GreyDivisiMateri,
    marginHorizontal: 6
  }
});

export default Style;
