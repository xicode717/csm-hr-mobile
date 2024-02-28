import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../component/color/Colors';
const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: Colors.Background,
  }
});

export default Style;
