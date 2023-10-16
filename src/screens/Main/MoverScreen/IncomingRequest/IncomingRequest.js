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
import Cancellation from '../../../../container/Cancellation/Cancellation';
const {height} = Dimensions.get('screen');
export class IncomingRequest extends Component {
  state = {
    isModalVisible: false,
    isModalVisible1: false,
    bio: '',
  };

  render() {
    const {isModalVisible, isModalVisible1, bio} = this.state;
    return (
      <AppBackground back title={'Incoming Requests'} chat>
        <View style={{flex: 1}}>
          <Img
            local
            src={appImages.profile}
            resizeMode={'contain'}
            style={styles.img}
          />
          <CustomText text={'Robert Fox'} style={styles.txt} />
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              position: 'absolute',
              bottom: 20,
              alignSelf: 'center',
              paddingHorizontal: 25,
            }}>
            <CustomButton
              title="Reject"
              onPress={() => this.setState({isModalVisible1: true})}
              buttonStyle={{width: '50%', backgroundColor: colors.lightshadow}}
            />
            <CustomButton
              title="Accept"
     
              buttonStyle={{width: '50%'}}
            />
          </View>
        </View>

        <Cancellation
        
          bio={bio}
          onChangeText={value => this?.setState({bio: value})}
          desc={'Why do you want to cancel this bookings?'}
          isModalVisible={isModalVisible1}
          title={'Booking Cancellation'}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisible1: false})}
          oncrossSubmit={() => this.setState({isModalVisible1: false})}
          onSubmit={() => {
            this.setState({isModalVisible1: false});
          }}
        />
      </AppBackground>
    );
  }
}

export default IncomingRequest;
