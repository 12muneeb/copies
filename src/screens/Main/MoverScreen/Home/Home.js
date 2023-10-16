import React, {useCallback, Component} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import AppBackground from '../../../../components/AppBackground';
import NavService from '../../../../helpers/NavService';
import {ArrivalData, UserData, homeData} from '../../../../utils/dummyData';
import Card from '../../../../components/Card';
import CustomTabView from '../../../../components/CustomTabView';
import Img from '../../../../components/Img';
import { appIcons } from '../../../../assets';
import styles from './styles';
import CustomText from '../../../../components/CustomText';
import Custombox from '../../../../components/ScreensComp/Custombox';
const {width} = Dimensions.get('screen');

export class Home extends Component {
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
        btn: 'In Progress',
      },
      {
        id: 1,
        btn: 'Incoming Requests',
      },
    ];
    const handleTabs = id => {
      this?.setState({isActive: id});
    };
    const handleProfile = () => {
      NavService.navigate('UserProfile')
    }
    const handleAccept = () => {
      NavService.navigate('IncomingRequest')
    }
    const handleArrow = () => {
      NavService.navigate('InProgress')
    }
    return (
      <AppBackground menu title={'HOME'} notification marginHorizontal={false}>
        <CustomTabView
          item={buttonTabs}
          width={width - 50}
          btnWidth={(width - 45) / 2.1}
          isActive={isActive}
          onPress={handleTabs}
        />
        {isActive === 1 ? (
          <View style={styles.maincontainer}>
            <View>
            <CustomText 
            text={'Hi Robert!'}
            style={styles.heading} />
            <CustomText 
            text={'Today 10 Request Pending'}
            style={styles.subtitle} />
            </View>
            <View style={styles.mainimg}>
              <Img
              local
              src={appIcons.celendar}
              resizeMode={'contain'}
              style={styles.imgtag}
              />
            </View>

          </View>
        ) : null}
        <FlatList
          data={UserData}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            paddingBottom: width * 0.2,
          }}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({item, index}) => {
            if (isActive === 0) {
              return <Custombox item={item} time rightarrow  handleProfile={handleProfile} handleArrow={handleArrow} />;
            } else if (isActive === 1) {
              return <Custombox item={item} time rightbtn handleAccept={handleAccept}/>;
            }

            return null;
          }}
        />
      </AppBackground>
    );
  }
}

export default Home;
