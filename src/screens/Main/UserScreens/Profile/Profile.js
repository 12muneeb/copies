import React, {useCallback,Component} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AppBackground from '../../../../components/AppBackground';
import NavService from '../../../../helpers/NavService';
import {BookingDetails, UserProfileData, homeData} from '../../../../utils/dummyData';
import Card from '../../../../components/Card';
import Img from '../../../../components/Img';
import CustomText from '../../../../components/CustomText';
import { appImages } from '../../../../assets';
import styles from './styles';
import CustomItem from '../../../../components/ScreensComp/CustomItem';
import { colors } from '../../../../utils';
const {width} = Dimensions.get('screen');



export class Profile extends Component {
  render() {
    return (
      <AppBackground menu title={'My Profile'} edit marginHorizontal={false}>
            <View>
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
                    data={UserProfileData}
                    scrollEnabled={true}
                    ItemSeparatorComponent={() => (
                      <View
                        style={{backgroundColor: colors.lightgray, height: 0.4}}
                      />
                    )}
                    renderItem={({item}) => (
                      <CustomItem
                        item={item}
                        containerStyle={styles.container}
                      />
                    )}
                  />
                </View>
            </View>
          
          </AppBackground> 
    )
  }
}

export default Profile
