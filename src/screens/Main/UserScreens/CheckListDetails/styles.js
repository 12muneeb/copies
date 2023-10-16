import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, size, family} from '../../../../utils';

export const styles = StyleSheet.create({
  txt: {
    color: colors.blur,
    fontSize: size.small,
    fontFamily: family.Roboto_Regular,
  },
  txt1: {
    color: colors.blur,
    fontSize: size.xsmall,
    fontFamily: family.Roboto_Light,
    marginVertical: 5,
  },
  maincontent: {
    backgroundColor: colors.lightshade,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  content: {flexDirection: 'row', justifyContent: 'space-between'},
  btn: {alignSelf: 'center', alignItems: 'center', marginBottom: 20},
  txt3: {
    color: colors.black,
    fontSize: size.small,
    fontFamily: family.Roboto_Medium,
  },
  txt4: {
    color: colors.black,
    fontFamily: family.Roboto_Regular,
    fontSize: size.small,
  },
  itemcontent1: {
    flexDirection: 'row',
    backgroundColor: colors.lightshade,
    borderRadius: 8,
    justifyContent: 'space-between',
    ...Shadows.shadow5,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
  },
  plus: {
    width: 30,
    height: 30,
  },
  txt5: {
    color: colors.black,
    fontSize: size.normal,
    fontFamily: family.Roboto_Medium,
  },
  btn2: {width: '45%', marginLeft: 10, backgroundColor: colors.red},
  btn1: {width: '45%'},
});
