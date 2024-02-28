import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Pdf from 'react-native-pdf';
import Style from './Style';

const DetailMateriPage = () => {
  const source = {
    uri: 'https://drive.google.com/file/d/13hoP4izYl2JJPoKLk26lRFfXkGnI3xsH/view?usp=sharing',
    cache: true,
  };
  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={{
          uri: 'https://pslb3.menlhk.go.id/internal/uploads/pengumuman/1545111808_contoh-pdf.pdf',
          cache: true,
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default DetailMateriPage;
