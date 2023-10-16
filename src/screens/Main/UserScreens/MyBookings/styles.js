import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Shadows from '../../../../helpers/Shadows'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal:10,
        gap:20
      },
      calendarContainer: {
        borderRadius: 20,
       ...Shadows.shadow5,
     marginHorizontal:10,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:10
      },
      arrow: {
        // Style your custom arrow icons here
      },
})