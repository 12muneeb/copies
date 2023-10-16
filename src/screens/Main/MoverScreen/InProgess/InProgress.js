import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import AppBackground from '../../../../components/AppBackground';
import Img from '../../../../components/Img';
import CustomItem from '../../../../components/ScreensComp/CustomItem';
import {BookingDetails} from '../../../../utils/dummyData';
import CustomText from '../../../../components/CustomText';
import {appImages} from '../../../../assets';
import {styles} from './styles';
import {colors} from '../../../../utils';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import CustomButton from '../../../../components/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import Cancellation from '../../../../container/Cancellation/Cancellation';
import Tips from '../../../../container/Tips/Tips';
import NavService from '../../../../helpers/NavService';
const InProgress = () => {
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [showCancelButton, setShowCancelButton] = useState(true);
  const [markAsStartedClicked, setMarkAsStartedClicked] = useState(false);
  const [isModalVisible1, setisModalVisible1] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);


  const countdownDuration = 1800;

  useEffect(() => {
    const cancelTimer = setTimeout(() => {
      setShowCancelButton(false);
    }, countdownDuration * 1000);

    return () => clearTimeout(cancelTimer);
  }, []);

  const handleCancel = () => {
    setIsTimerActive(false);
    setShowCancelButton(false);
  };
  return (
    <AppBackground back title={'In Progress'}>
      <Img
        local
        src={appImages.profile}
        resizeMode={'contain'}
        style={styles.img}
      />
      <CustomText text={'Robert Fox'} style={styles.txt} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.flatcard}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={BookingDetails}
            scrollEnabled={true}
            ItemSeparatorComponent={() => (
              <View style={{backgroundColor: colors.lightgray, height: 0.4}} />
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
        <View style={{paddingHorizontal:20,marginVertical:10}}>
            <CustomText text='Location' style={styles.locate}/>
            <CustomText text='Map is here' style={styles.locate}/>


        </View>
        <View style={styles.timercontainer}>
          <View style={{backgroundColor: colors.primary, borderRadius: 50}}>
            <CountdownCircleTimer
              isPlaying={isTimerActive}
              duration={countdownDuration}
              rotation={'clockwise'}
              trailColor={colors.primary}
              size={70}
              strokeWidth={5}
              onComplete={() => setIsTimerActive(false)}
              colors={[colors.white, colors.primary]}>
              {({remainingTime, animatedColor}) => (
                <View>
                  <Text style={styles.otptext}>
                    {Math.floor(remainingTime / 60)}:{remainingTime % 60}
                  </Text>
                </View>
              )}
            </CountdownCircleTimer>
          </View>
          <View>
            <CustomText text="Note*" style={styles.title} />
            <CustomText
              text="You can cancel This Booking"
              style={styles.subtitle}
            />
            <CustomText text="Within 30 Minutes" style={styles.subtitle} />
          </View>
        </View>
        <View style={{alignSelf: 'center', gap: 10, marginVertical: 20}}>
          {!markAsStartedClicked ? (
            <CustomButton
              title="Mark as Started"
              onPress={() => setMarkAsStartedClicked(true)}
              buttonStyle={{backgroundColor: colors.primary}}
            />
          ) : (
            <CustomButton
              title="Mark as Completed"
              onPress={() => setisModalVisible(true)}
            />
          )}

          {showCancelButton && (
            <CustomButton
              title="Cancel Booking"
              onPress={() => setisModalVisible1(true)}
            />
          )}
        </View>
      </ScrollView>
      <Cancellation
        desc={'Why do you want to cancel this bookings?'}
        isModalVisible={isModalVisible1}
        title={'Booking Cancellation'}
        onToggle={() => setisModalVisible1(false)}
        oncrossSubmit={() => setisModalVisible1(false)}
        onSubmit={() => {
          setisModalVisible1(false);
        }}
      />
       <Tips
          isModalVisible={isModalVisible}
          onToggle={() => setisModalVisible(false)}
          onCross={() => setisModalVisible(false)}
          onSubmit={() => NavService.goBack()}

        />
    </AppBackground>
  );
};

export default InProgress;
