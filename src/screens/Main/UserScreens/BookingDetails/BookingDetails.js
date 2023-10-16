import {FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {CardDetails, OngoingBookingDetail} from '../../../../utils/dummyData';
import CustomItem from '../../../../components/ScreensComp/CustomItem';
import {styles} from './styles';
import {colors} from '../../../../utils';
import CustomData from '../../../../components/ScreensComp/CustomData';
import CustomButton from '../../../../components/CustomButton';
import NavService from '../../../../helpers/NavService';
import Img from '../../../../components/Img';
import { appImages } from '../../../../assets';
export class BookingDetails extends Component {
  render() {
    return (
      <AppBackground back title={'Booking Details'}>
        {/* <Text>MAP</Text> */}
        <View style={{flex: 1}}>
            <Img
            local
            src={appImages.map}
            resizeMode={'cover'}
            style={{width:'90%',height:200,alignSelf:'center'}}
            />
          <View style={styles.flatcard}>
            <FlatList
              bounces={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={OngoingBookingDetail}
              scrollEnabled={true}
              ItemSeparatorComponent={() => (
                <View
                  style={{backgroundColor: colors.lightgray, height: 0.4}}
                />
              )}
              renderItem={({item}) => (
                <CustomItem
                  item={item}
                  rate
                  timing
                  containerStyle={styles.container}
                />
              )}
            />
          </View>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={CardDetails}
            scrollEnabled={false}
            renderItem={({item}) => (
              <CustomData item={item} cash bottomimg imgright />
            )}
          />
          <View style={{alignSelf: 'center', position: 'absolute', bottom: 30}}>
            <CustomButton title={'Confirm'} onPress={() => NavService.navigate('PaymentMethod')} />
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default BookingDetails;
