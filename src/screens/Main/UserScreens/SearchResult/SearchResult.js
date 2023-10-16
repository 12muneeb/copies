import { Dimensions, FlatList, Text, View } from 'react-native'
import React, { Component } from 'react'
import AppBackground from '../../../../components/AppBackground'
import CustomCard from '../../../../components/ScreensComp/CustomCard'
import { userHomedata } from '../../../../utils/dummyData'
import NavService from '../../../../helpers/NavService'
const {width} = Dimensions.get('screen')
export class SearchResult extends Component {
  render() {
    const handleOn = () => {
        NavService.navigate('MoverProfile')
       }
    return (
    <AppBackground back title={'Search Result'}>
        <View style={{marginHorizontal:20}}>
        <FlatList
      numColumns={2}
      contentContainerStyle={{
        paddingBottom: width * 0.2,
        gap:8
      }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_item, index) => index.toString()}
        data={userHomedata}
        renderItem={({item}) => <CustomCard item={item} handleOn={handleOn} star />}
      />
        </View>
    </AppBackground>
    )
  }
}

export default SearchResult