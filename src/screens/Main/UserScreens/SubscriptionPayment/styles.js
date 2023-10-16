import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, family, size } from '../../../../utils'




export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
      },
    
      viewstyle1: {
        width: '100%',
        alignItems: 'center',
        ...Shadows.shadow5,
        paddingTop: 40,
      },
      smile: {
        width: 134,
        height: 134,
        resizeMode: 'contain',
      },
      mainview: {
        height: '100%',
        alignItems: 'center',
        flex: 1,
      },
      txt1: {
        color: colors.secondary,
        fontSize: size.h2,
        fontFamily: family.Roboto_Bold,
        paddingTop: 10,
      },
      txt2: {
        color: colors.black,
        fontSize: size.small,
        fontFamily: family.Roboto_Regular,
        paddingTop: 10,
        textAlign: 'center',
        marginHorizontal:20
      },
      back: {
        width: '100%',
        position: 'absolute',
        bottom: 10,
        borderRadius: 10,
      },
      textbutton:{
        // color:theme.iconcolor
      }
})