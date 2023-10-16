import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import moment from 'moment';
import {colors, size, family} from '../../utils';
import {appImages} from '../../assets';
import CustomText from '../CustomText';
import Img from '../Img';
import Shadows from '../../helpers/Shadows';

const MicroChat = ({item}) => {
  return (
    <View style={styles.rowFront}>
      <View>
        <View style={{flexDirection: 'row', marginLeft: 5}}>
          <View style={styles.main}>
            <Text style={styles.details}>{item?.message}</Text>
          </View>
          <View style={styles.img}>
            <Img src={appImages.profile} style={styles.react} local />
          </View>
        </View>
        <Text style={styles.day}>12:30</Text>
      </View>
    </View>
  );
};

export default MicroChat;

const styles = StyleSheet.create({
  rowFront: {
    paddingVertical: 15,
    width: '80%',
    alignSelf: 'flex-end',
  },
  day: {
    color: colors.black,
    fontSize: size.xxsmall,
    alignSelf: 'flex-start',
    top: 10,
    left: 15,
  },

  react: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  main: {
    // backgroundColor: colors.lightpink,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 13,
    alignItems: 'center',
    width: '80%',
    backgroundColor: colors.primary,
  },
  names: {
    color: colors.black,
    fontWeight: '600',
    fontSize: size.extraVSmall,
  },
  details: {
    color: '#FFFFFF',
    fontSize: size.xxsmall,
    fontFamily: family.RedHatDisplay_Light,
    width: '80%',
  },
  img: {
    ...Shadows.shadow5,
    marginLeft:10
  },
});
