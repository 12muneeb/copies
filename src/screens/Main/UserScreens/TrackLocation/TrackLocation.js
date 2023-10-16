import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import Map from '../../../../container/Map/index';
import styles from './styles';
import CustomText from '../../../../components/CustomText';
import {event} from '../../../../utils/dummyData';
import Img from '../../../../components/Img';
import {appIcons, appImages} from '../../../../assets';
import appStyles from '../../../appStyles';
import {colors} from '../../../../utils';

import NavService from '../../../../helpers/NavService';

class EventLocation extends Component {
  handleMarkerPress = (latitude, longitude) => {
    console.log('Marker presdddddtude:', latitude, 'Longitude:', longitude);
  };
  render() {
    return (
      <AppBackground title={'Live Location'} back>
        <View style={styles.MainContainer}>
          <Map mark onMarkerPress={this.handleMarkerPress} />
          <View style={styles.innerView}>
            <View style={{alignItems: 'center'}}>
              <Img
                local
                resizeMode={'cover'}
                src={appIcons.group}
                style={styles.group}
              />
            </View>

            <View style={styles.maincontainer}>
              <View style={styles.subcontainer}>
                <Img
                  local
                  resizeMode={'contain'}
                  src={appImages.profile}
                  style={styles.profile}
                />
                <View style={styles.txtcontainer}>
                  <CustomText text="John Smith" style={styles.txt} />
                  <CustomText text="10 to 12Ft Truck" style={styles.txt1} />
                </View>
              </View>
              <TouchableOpacity
                style={styles.chatcontainer}
                onPress={() => NavService.navigate('Message')}>
                <Img
                  local
                  src={appIcons.chat}
                  resizeMode={'contain'}
                  style={styles.chat}
                  tintColor={colors.primary}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.btmtxt}>
              <CustomText text="5 - 10 min" style={styles.txt1} />
              <CustomText text="On the way" style={styles.txt1} />
            </View>
          </View>
        </View>
      </AppBackground>
    );
  }
}
export default EventLocation;
