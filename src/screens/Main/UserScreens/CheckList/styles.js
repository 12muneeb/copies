import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, family, size} from '../../../../utils';

export const styles = StyleSheet.create({
  txt: {color: colors.blur,fontSize:size.small,fontFamily:family.Roboto_Regular},
  txt1:{color: colors.blur,fontSize:size.xsmall,fontFamily:family.Roboto_Light,marginVertical:5},
  maincontent:{
    backgroundColor: colors.lightshade,
    marginHorizontal: 20,
    borderRadius:10,
    padding:10,
    marginVertical:10
  },
  content:{flexDirection: 'row', justifyContent: 'space-between'},
  btn:{alignSelf:'center',alignItems:'center',marginBottom:20}
});
