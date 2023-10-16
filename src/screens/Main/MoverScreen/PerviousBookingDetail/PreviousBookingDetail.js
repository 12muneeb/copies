import {Dimensions, FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import Img from '../../../../components/Img';
import {appImages} from '../../../../assets';
import {styles} from './styles';
import CustomText from '../../../../components/CustomText';
import CustomItem from '../../../../components/ScreensComp/CustomItem';
import {
  BookingDetails,
  ProfileData,
  UserProfileData,
} from '../../../../utils/dummyData';
import {colors} from '../../../../utils';
import Shadows from '../../../../helpers/Shadows';
import CustomButton from '../../../../components/CustomButton';
import Matched from '../../../../container/MatchModal/Matched';
import Unsubscribe from '../../../../container/Unsubscribe/Unsubscribe';
const {height} = Dimensions.get('screen');
export class PreviousBookingDetail extends Component {
  state = {
    isModalVisible: false,
    isModalVisible1: false,
    bio: '',
  };

  render() {
    const {isModalVisible, isModalVisible1, bio} = this.state;
    return (
      <AppBackground back title={'Previous Bookings'}>
        <View style={{flex: 1}}>
          <Img
            local
            src={appImages.profile}
            resizeMode={'contain'}
            style={styles.img}
          />
          <CustomText text={'John Smith'} style={styles.txt} />
          <View style={styles.flatcard}>
            <FlatList
              bounces={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={BookingDetails}
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
          <View style={{paddingHorizontal:22}}> 
          <CustomText text='Location' style={styles.txt1} />
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default PreviousBookingDetail;
