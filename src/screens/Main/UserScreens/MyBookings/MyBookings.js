import {Dimensions, FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {styles} from './styles';
import Img from '../../../../components/Img';
import {appIcons} from '../../../../assets';
import {colors} from '../../../../utils';
import {UserData, bookingone, bookingtwo} from '../../../../utils/dummyData';
import Custombox from '../../../../components/ScreensComp/Custombox';
import CustomTabView from '../../../../components/CustomTabView';
import NavService from '../../../../helpers/NavService';
const {width, height} = Dimensions.get('screen');
LocaleConfig.locales['custom'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'custom';
export class MyBookings extends Component {
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
        btn: 'Ongoing Bookings',
      },
      {
        id: 1,
        btn: 'Previous Bookings',
      },
    ];
    const handleTabs = id => {
      this?.setState({isActive: id});
    };
    return (
      <AppBackground menu notification title={'My Bookings'}>
        <View style={styles.container}>
          <CustomTabView
            item={buttonTabs}
            width={width - 35}
            btnWidth={(width - 45) / 2}
            isActive={isActive}
            onPress={handleTabs}
          />
          <View style={styles.calendarContainer}>
            <Calendar
              hideArrows={true}
              markedDates={{
                '2023-10-11': {selected: true},
              }}
              theme={{
                backgroundColor: 'white',
                calendarBackground: 'white',
                textSectionTitleColor: colors.black,
                todayTextColor: 'blue',
                dayTextColor: colors.lightshade,
                selectedDayBackgroundColor: colors.secondary,
              }}
              style={{borderRadius: 10, overflow: 'hidden'}}
              renderHeader={date => (
                <View style={styles.header}>
                  <Img
                    local
                    resizeMode={'contain'}
                    style={{width: 15, height: 15}}
                    src={appIcons.leftsign}
                  />
                  <Text>{date.toString('MMMM')}</Text>
                  <Img
                    local
                    resizeMode={'contain'}
                    style={{width: 15, height: 15}}
                    src={appIcons.rightsign}
                  />
                </View>
              )}
            />
          </View>
          <FlatList
          data={
            isActive === 0
              ? bookingone
              : bookingtwo  
          }
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{
              paddingBottom: width * 0.2,
            }}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={({item, index}) => {
              return <Custombox item={item} rightarrow address locate 
   
                handleArrow={() => NavService.navigate('OngoingBookingDetails')}
              
              />
            }}
          />
        </View>
      </AppBackground>
    );
  }
}

export default MyBookings;
