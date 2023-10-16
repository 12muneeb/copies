import React, {useCallback, Component} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import AppBackground from '../../../../components/AppBackground';
import NavService from '../../../../helpers/NavService';
import {ArrivalData, UserData, homeData} from '../../../../utils/dummyData';
import Card from '../../../../components/Card';
import CustomTabView from '../../../../components/CustomTabView';
import Img from '../../../../components/Img';
import {appIcons} from '../../../../assets';
import styles from './styles';
import CustomText from '../../../../components/CustomText';
import Custombox from '../../../../components/ScreensComp/Custombox';
const {width} = Dimensions.get('screen');

export class PreviousBooking extends Component {
  constructor() {
    super();
    this.state = {
      isActive: 0,
    };
  }
  render() {
    const {isActive} = this?.state;
const handleArrow = () => {
  NavService.navigate('PreviousBookingDetail')
}
 
    return (
      <AppBackground title={'Previous Bookings'} marginHorizontal={false} back>
        <FlatList
          data={UserData}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            paddingBottom: width * 0.2,
          }}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({item, index}) => (
            <Custombox item={item} time rightarrow handleArrow={handleArrow}/>
          )}
        />
      </AppBackground>
    );
  }
}

export default PreviousBooking;
