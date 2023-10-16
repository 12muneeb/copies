import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Img from '../Img';
import {appIcons, appImages} from '../../assets';
import {colors, family, size} from '../../utils';
import CustomText from '../CustomText';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');

const CustomCard = ({item, star, handleOn}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} onPress={handleOn}>
        <Img
          local
          src={appImages.profile}
          resizeMode={'contain'}
          style={styles.img}
        />
        <CustomText text="John Smith" style={styles.txt} />
        {star && (
          <View
            style={{marginTop: 13, flexDirection: 'row', alignItems: 'center'}}>
            <Img
              local
              src={appIcons.star}
              resizeMode={'contain'}
              style={{width: 15, height: 15}}
            />
            <CustomText text="4.5" style={styles.txt1} />
            <CustomText text="(25)" style={styles.txt2} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // paddingHorizontal:40,
    width: '48%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.lightpurple,
    borderRadius: 20,
    paddingVertical: 18,
    marginHorizontal: 4,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 1.8,
    borderColor: colors.secondary,
  },
  txt: {
    fontSize: size.normal,
    fontFamily: family.Roboto_Medium,
    top: 10,
    marginBottom: 10,
  },
  txt1: {
    fontSize: size.xxsmall,
    color: colors.black,
    fontFamily: family.Roboto_Regular,
    marginHorizontal: 4,
  },
  txt2: {
    fontSize: size.xxsmall,
    color: colors.black,
    fontFamily: family.Roboto_Regular,
  },
});
