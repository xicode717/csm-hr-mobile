import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../component/color/Colors';
import RNPickerSelect from 'react-native-picker-select';
import {useNavigation} from '@react-navigation/native';
import Style from './Style';
const {width, height} = Dimensions.get('window');

const MateriListPage = () => {
  const navigate = useNavigation();
  const placeholderFilter = {
    label: 'Filter by Division',
    value: null,
    color: Colors.GreyBorderFilter,
  };
  const [favSport4, setfavSport4] = useState('');
  return (
    <View style={Style.containter}>
      <StatusBar animated={true} barStyle="dark-content" />
      <View style={{height: height * 0.04}} />
      <View style={Style.wrapperHeader}>
        <View style={Style.frameHeaderBack}>
          <Icon style={Style.iconBack} name="arrow-back" size={25} />
        </View>
        <View style={Style.frameHeaderFilter}>
          {/* <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={[
              {label: 'Football', value: 'football'},
              {label: 'Baseball', value: 'baseball'},
              {label: 'Hockey', value: 'hockey'},
            ]}
          /> */}

          <View style={Style.frameFilter}>
            <RNPickerSelect
              placeholder={placeholderFilter}
              items={[
                {label: 'QHSE', value: 'QHSE'},
                {label: 'Operation', value: 'Operation'},
                {label: 'CSBD', value: 'CSBD'},
              ]}
              onValueChange={value => {
                setfavSport4(value);
              }}
              style={Style.inputAndroid}
              value={favSport4}
              useNativeAndroidPickerStyle={false}
              textInputProps={{underlineColor: 'yellow'}}
              Icon={() => {
                return <Icon style={{marginVertical: 6, marginHorizontal: 8}} name="filter" size={24} color="gray" />;
              }}
            />
          </View>
        </View>
      </View>
      <Text style={Style.fontListMateri}>List Materi</Text>

      {/* wrapper list materi */}

      <View style={Style.wrapperList}>
        <TouchableOpacity
          onPress={() => navigate.navigate('DetailMateriPage', {})}
          style={Style.frameList}>
          <View style={Style.frameListRow1}>
            <Image
              resizeMode="stretch"
              style={Style.imgCoverMater}
              source={require('../../../assets/materi/cover.png')}
            />
          </View>
          <View style={Style.frameListRow2}>
            <Text style={Style.textTitleList}>Rumus Rumus Dalam Excel</Text>
            <View style={{height: height * 0.01}} />
            <Text style={Style.textDivisiList}>IT</Text>
            <View style={{height: height * 0.01}} />
            <Text style={Style.textReadList}>10 kali dibaca</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* end wrapper list materi */}
    </View>
  );
};

export default MateriListPage;
