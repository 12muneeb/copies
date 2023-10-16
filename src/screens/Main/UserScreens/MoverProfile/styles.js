import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, family, size } from '../../../../utils'


export const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: colors.secondary,
        alignSelf: 'center',
      },
      txt: {
        marginTop: 10,
        fontFamily: family.Roboto_Medium,
        fontSize: size.small,
        textAlign: 'center',
        color: colors.black,
      },
      heading:{
        fontSize:size.xxsmall,
        color:colors.black,
        fontFamily:family.Roboto_Regular,
        textDecorationLine:'underline'
      },
      img2:{
        width:12,height:12,marginHorizontal:3
      },
      txt3:{
        fontFamily:family.Roboto_Regular,
        color:colors.black,
        fontSize:size.xxsmall
      },
      title:{flexDirection:'row',alignItems:'center',alignSelf:'center',top:5},
      btn:{alignSelf:'center',marginTop:20,width:'50%'},
      maincontainer: {
        width: '90%',
        backgroundColor: colors.white,
        ...Shadows.shadow5,
        borderRadius: 10,
        marginTop: 20,
        padding:15,
        alignSelf:'center',
      },
      bio: {
        fontSize: size.xsmall,
        fontFamily: family.Roboto_Light,
        color: colors.lightshadow,
      },
      txt4: {
        marginTop: 10,
        fontFamily: family.Roboto_Bold,
        fontSize: size.small,
        color: colors.lightshadow,
      },
      maincontainer2: {
        width: '90%',
        backgroundColor: colors.white,
        ...Shadows.shadow5,
        borderRadius: 10,
        marginTop: 20,
        padding:15,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      header2:{flexDirection:'row',alignItems:'center',justifyContent:'center'},
      txt5:{
        fontFamily:family.Roboto_Medium,
        fontSize:size.small,
        color:colors.black
      },
      riyal:{width:30,height:30,marginHorizontal:5},
      cashtxt:{
        fontFamily:family.Roboto_Bold,
        color:colors.primary,
        fontSize:size.small
      }
})