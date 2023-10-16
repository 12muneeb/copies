import {Dimensions, FlatList, Platform, Text, View} from 'react-native';
import React, {Component, createRef} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {styles} from './styles';
import Img from '../../../../components/Img';
import {appIcons} from '../../../../assets';
import {colors, platform, size} from '../../../../utils';

import NavService from '../../../../helpers/NavService';
import {CardDetails, ProfileDetails} from '../../../../utils/dummyData';
import CustomData from '../../../../components/ScreensComp/CustomData';
import CustomText from '../../../../components/CustomText';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomButton from '../../../../components/CustomButton';
import ActionSheetComponent from '../../../../components/ActionSheetComponent';
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
export class MoverReservation extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastName: '',
      profileImage: null,
      category: '',
      count: '',
      kmcharges: '10Kg',
      hourlycharges: '6',
      loadcapicity: '',
      bio: '',
      time: '00:00',
      picklocation: '',
      droplocation: '',
      paymentData: ['AM', 'PM'],
    };
    this.actionSheetStatepayment = createRef();
  }
  handleTimeChange = value => {
    value = value.replace(/[^0-9]/g, '');

    if (value.length > 2) {
      value = value.slice(0, 2) + ':' + value.slice(2);
    }

    this.setState({time: value});
  };
  render() {
    const {
      name,
      lastName,
      category,
      categoryData,
      count,
      kmcharges,
      hourlycharges,
      loadcapicity,
      bio,
      charges,
      paymentData,
      payment,
      profileImage,
      time,
      picklocation,
      droplocation,
    } = this.state;
    const {isActive} = this?.state;

    return (
      <AppBackground back title={'Moving Reservation'}>
        <View style={styles.container}>
          <View style={styles.calendarContainer}>
            {/* <Calendar
              hideArrows={true}

            maxDate=''
              theme={{
                backgroundColor: 'white',
                calendarBackground: 'white',
                textSectionTitleColor: colors.black,
                todayTextColor: 'blue',
                dayTextColor: colors.black,
                selectedDayBackgroundColor: colors.secondary,
              }}
              style={{borderRadius: 10, overflow: 'hidden'}}
              renderHeader={date => (
                <View style={styles.header}>
                  <Img
                    local
                    resizeMode={'contain'}
                    style={styles.arrow}
                    src={appIcons.leftsign}
                  />
                  <Text style={{color:colors.black}}>{date.toString('MMMM')}</Text>
                  <Img
                    local
                    resizeMode={'contain'}
                    style={styles.arrow}
                    src={appIcons.rightsign}
                  />
                </View>
              )}
            /> */}
            <Calendar
              hideArrows={true}
              theme={{
                backgroundColor: 'white',
                calendarBackground: 'white',
                textSectionTitleColor: colors.black,
                todayTextColor: colors.white,
                todayBackgroundColor: colors.primary,
                dayTextColor: colors.black,
                selectedDayBackgroundColor: colors.secondary,
                textDayHeaderFontWeight: 'bold', // Make day names bold
              }}
              style={{borderRadius: 10, overflow: 'hidden'}}
              renderHeader={date => (
                <View style={styles.header}>
                  <Img
                    local
                    resizeMode={'contain'}
                    style={styles.arrow}
                    src={appIcons.leftsign}
                  />
                  <Text
                    style={{
                      color: date.currentMonth ? colors.orange : colors.black,
                    }}>
                    {date.toString('MMMM')}
                  </Text>
                  <Img
                    local
                    resizeMode={'contain'}
                    style={styles.arrow}
                    src={appIcons.rightsign}
                  />
                </View>
              )}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{}}>
              <CustomText text="Select Truck" style={styles.txt} />
              <View>
                <FlatList
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  data={ProfileDetails}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <CustomData item={item} imgleft imgright />
                  )}
                />
              </View>
              <View style={styles.maincontainer}>
                <CustomText text={'Description'} style={styles.txt4} />
                <CustomText
                  style={styles.bio}
                  text={
                    'Lorem ipsum dolor sit amet conse ctetur ipisic ing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim adinim veniam quis nostrud exercitation ullamco borisnisi ut aliquip ex ea commodo consequat'
                  }
                />
              </View>
              <CustomText text="Estimated weight" style={styles.title} />
              <CustomTextInput
                containerStyle={styles.placehand}
                maxLength={10}
                placeholderTextColor={colors.lightshadow}
                placeholder={'Estimated weight'}
                value={kmcharges}
                keyboardType={'phone-pad'}
                onChangeText={value => this.setState({kmcharges: value})}
              />
              <CustomText text="Number of Mover" style={styles.title} />
              <CustomTextInput
                containerStyle={styles.placehand}
                maxLength={10}
                placeholderTextColor={colors.lightshadow}
                placeholder={'hourly Charges'}
                value={hourlycharges}
                keyboardType={'phone-pad'}
                onChangeText={value => this.setState({hourlycharges: value})}
              />
              <CustomText text="Select Time" style={styles.title} />
              <View style={styles.timecontainer}>
                <TextInput
                  maxLength={5}
                  style={styles.timepicker}
                  placeholderTextColor={colors.lightshadow}
                  placeholder={'00:00'}
                  value={time}
                  keyboardType={'numeric'}
                  onChangeText={this.handleTimeChange}
                />
                <View style={styles.timepick}>
                  <CustomText
                    text="|"
                    style={{fontSize: size.h3, color: colors.black}}
                  />
                  <CustomButton
                    nextBtn
                    nextStyle={{tintColor: colors.red}}
                    title={payment ? payment : 'AM'}
                    buttonStyle={styles.gender}
                    textStyle={
                      payment ? styles.gendercolorafter : styles.gendercolor
                    }
                    onPress={() => this.actionSheetStatepayment.current.show()}
                  />
                  <ActionSheetComponent
                    ref={this.actionSheetStatepayment}
                    title="Select Category"
                    dataset={paymentData}
                    onPress={item => {
                      this.setState({
                        payment: item,
                      });
                    }}
                  />
                </View>
              </View>
              <CustomTextInput
                rightIcons={appIcons.locate}
                maxLength={15}
                placeholder={'Pickup Location'}
                value={picklocation}
                keyboardType={'default'}
                onChangeText={value => this.setState({picklocation: value})}
                containerStyle={styles.containerinput}
                emailstyle={styles.emailstyle}
              />
              <CustomTextInput
                rightIcons={appIcons.locate}
                maxLength={15}
                placeholder={'Dropup Location'}
                value={droplocation}
                keyboardType={'default'}
                onChangeText={value => this.setState({droplocation: value})}
                containerStyle={styles.containerinput}
                emailstyle={styles.emailstyle}
              />
              <CustomTextInput
                textAlignVertical="top"
                maxLength={350}
                multiline
                placeholder={'Address'}
                value={bio}
                color={'black'}
                placeholderTextColor={colors.lightshadow}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({bio: value})}
                textInputStyles={{height: 100}}
                containerStyle={styles.biocontainer}
              />
            </View>
          </ScrollView>
          <View>
            <CustomButton
              title={'Continue'}
              buttonStyle={styles.btmbutton}
              onPress={() => NavService.navigate('BookingDetails')}
            />
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default MoverReservation;
