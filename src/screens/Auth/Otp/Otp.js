

// export default Otp;
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import Toast from 'react-native-toast-message';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import NavService from '../../../helpers/NavService';
import {appLogos} from '../../../assets/index';
import styles from './styles';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils';
import Logo from '../../../components/Logo';

const Otp = ({navigation, route}) => {
  const {role, phoneNumbers, mail} = route?.params;
  let timer;
  const [code, setCode] = useState();
  const [isFocused, setIsFocused] = useState(false);
  const [timerCode, setTimerCode] = useState(59);
  const [resend, setResend] = useState(false);
  const [key, setKey] = useState(0);
  const [resendOtpActive, setResendOtpActive] = useState(false);

  const handleCodeFilled = code => {
    const {role, phoneNo, email} = route?.params;
    console.log(role, 'otppp');
    console.log(mail, 'maillllssss');
    if (!code || code.length === 0) {
      Toast.show({
        text1: 'OTP field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (code !== '123456') {
      Toast.show({
        text1: 'Invalid OTP verification code.',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      navigation.navigate('CompleteProfile', {
        role:role,
        phoneNo: phoneNo,
        email: email,
      });
      Keyboard.dismiss()

    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

 

  const startInterval = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      setTimerCode(timerCode => {
        if (timerCode > 0) {
          return timerCode - 1;
        } else {
          setResend(true);
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
  };
  const onCompleteTimer = () => {
    setResendOtpActive(true);
  };
  const handleReset = () => {
    const phoneAlert =
      'OTP verification code has been resend to your Phone Number.';
    const emailAlert =
      'OTP verification code has been resend to your Email Address.';
    if (resend) {
      Keyboard.dismiss();
      setTimerCode(59);
      Toast.show({
        text1: phoneNumbers ? phoneAlert : emailAlert,
        type: 'success',
        visibilityTime: 3000,
      });
      setResend(false);
      setCode('');
      setKey(prevKey => prevKey + 1);
      startInterval();
    } else {
      Toast.show({
        text1: 'Please wait until the timer finishes!',
        type: 'error',
        visibilityTime: 3000,
      });
    }
  };

  useEffect(() => {
    startInterval();
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <CustomBackground showLogo={false} onBack={() => navigation.goBack()}>
      <View style={styles.container}>
        <View style={[styles.container, {padding: 50}]}>
          <View style={styles.space}>
            <Logo size={220} />
          </View>
          {/* <View style={styles.logoStyle}>
      
          </View> */}
          <View
            style={{
              alignItems: 'center',
              marginTop: -30,
            }}>
            <CustomText
              style={styles.title}
              text="Please Verify Your Account"
            />
            <CustomText
              style={styles.subtitle}
              text="We send you a six-digit verification code"
            />
            <CustomText style={styles.subtitle} text="to verify your account" />
            <OTPInputView
              keyboardType="numeric"
              style={styles.otpInput}
              pinCount={6}
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={handleCodeFilled}
              code={code}
            />
            <View style={styles.clock}>
              <CountdownCircleTimer
                isPlaying
                rotation={'clockwise'}
                trailColor={'#B1B4DD'}
                key={key}
                duration={59}
                colors={[colors.secondary, colors.primary]}
                colorsTime={[6, 4]}
                size={120}
                strokeWidth={5}
                onComplete={onCompleteTimer}
                >
                {({remainingTime}) => {
                  const minutes = Math.floor((remainingTime % 3600) / 59);
                  const seconds = remainingTime % 59;
                  return (
                    <View
                      style={{
                        backgroundColor: '#B1B4DD',
                        height: 110,
                        width: 110,
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <CustomText
                        text={`00:${
                          timerCode < 10 ? '0' + timerCode : timerCode
                        }`}
                        style={styles.time}
                      />
                    </View>
                  );
                }}
              </CountdownCircleTimer>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.textNormal}>Don't received the code? </Text>
          <TouchableOpacity
            disabled={resend ? false : true}
            onPress={() => handleReset()}>
            <Text
              style={[
                styles.textNormalWithColor,
                !resend ? styles.disabledResend : {},
              ]}>
              Resend
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomBackground>
  );
};

export default Otp;

