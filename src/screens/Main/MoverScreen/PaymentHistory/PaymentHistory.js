import React, {useCallback, Component} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import AppBackground from '../../../../components/AppBackground';
import NavService from '../../../../helpers/NavService';
import {
  ArrivalData,
  Day,
  UserData,
  homeData,
  month,
  week,
} from '../../../../utils/dummyData';
import Card from '../../../../components/Card';
import CustomTabView from '../../../../components/CustomTabView';
import Img from '../../../../components/Img';
import {appIcons} from '../../../../assets';
import styles from './styles';
import CustomText from '../../../../components/CustomText';
import Custombox from '../../../../components/ScreensComp/Custombox';
import {colors} from '../../../../utils';
import Shadows from '../../../../helpers/Shadows';
const {width} = Dimensions.get('screen');

export class PaymentHistory extends Component {
  constructor() {
    super();
    this.state = {
      isActive: 0,
    };
  }
  render() {
    const {isActive} = this?.state;
    const buttonTabs = [
      {
        id: 0,
        btn: 'Day',
      },
      {
        id: 1,
        btn: 'Week',
      },
      {
        id: 2,
        btn: 'Month',
      },
    ];
    const handleTabs = id => {
      this?.setState({isActive: id});
    };
    return (
      <AppBackground
        back
        title={'Payment History'}
        celendar
        marginHorizontal={false}>
        <CustomTabView
          item={buttonTabs}
          width={width - 60}
          btnWidth={(width - 25) / 3.4}
          isActive={isActive}
          onPress={handleTabs}
        />

        <FlatList
          data={
            isActive === 0
              ? Day
              : isActive === 1
              ? week
              : isActive === 2
              ? month
              : null
          }
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            paddingBottom: width * 0.2,
          }}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.container}>
              <View style={styles.maincontainer}>
                <CustomText text={item.date} style={styles.txt} />
                <View style={styles.card}>
                  <Img
                    local
                    src={appIcons.riyal}
                    style={{width: 20, height: 20}}
                  />
                  <CustomText text={item.cash} style={styles.txt1} />
                </View>
              </View>
              <View
                style={[
                  styles.maincontainer,
                  {marginTop: 3, marginBottom: 10},
                ]}>
                <View style={styles.card}>
                  <CustomText text={item.month} style={styles.txt} />
                  <CustomText text={item.year} style={styles.txt1} />
                </View>
                <CustomText text={'Cash'} style={styles.txt} />
              </View>
              <View
                style={[
                  styles.maincontainer,
                  {borderTopWidth: 0.5, borderColor: colors.lightshadow},
                ]}>
                <CustomText text={'Service: Lorem'} style={styles.txt2} />
                <CustomText text={'User: Robert,Johns'} style={styles.txt2} />
              </View>
            </View>
          )}
        />
      </AppBackground>
    );
  }
}

export default PaymentHistory;
