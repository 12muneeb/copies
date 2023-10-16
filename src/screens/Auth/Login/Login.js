import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import * as EmailValidator from 'email-validator';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {schema} from '../../../utils/validation';
import {colors} from '../../../utils';
import {appIcons, appLogos} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import CustomText from '../../../components/CustomText';
import styles from './styles';
import Logo from '../../../components/Logo';

class Login extends Component {
  state = {
    email: '',
  };

 

  render() {
    const {role} = this.props?.route?.params;
    console.log('ee', role);

    const {email} = this.state;
   const  onSubmit = () => {
      const {email} = this.state;
  
      if (!email) {
        Toast.show({
          text1: 'Email address field can`t be empty.',
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (!EmailValidator.validate(email)) {
        Toast.show({
          text1: 'Please enter a valid email address.',
          type: 'error',
          visibilityTime: 3000,
        });
      } else {
        let payload = {
         
          email: 'abc@gmail.com',
          password: '123456',
        };
        NavService.navigate('Otp', {email: email, role: role});
        Keyboard.dismiss();
  
        // this.props.loginUser(payload);
        Toast.show({
          text1: 'OTP verification code has been sent to your Email Address.',
          type: 'success',
          visibilityTime: 3000,
        });
      }
    };
    return (
      <CustomBackground
        showLogo={false}
        back
        onBack={() => this.props.navigation.goBack()}>
        <View style={[styles.container, {padding: 50}]}>
          <View style={styles.space}>
            <Logo size={220} />
          </View>
          <View style={styles.maincontainer}>
            <Text style={styles.login}>Welcome Back!</Text>
            <CustomText
              style={styles.names}
              text={'Please sign-in to your account'}
            />

            <CustomTextInput
              Lineicon={appIcons.line}
              maxLength={35}
              Iconcolor={colors.primary}
              leftIcon={appIcons.email}
              placeholderTextColor={colors.black}
              placeholder={'Email'}
              value={email}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({email: value})}
            />
            <CustomButton
              title="Continue"
              onPress={onSubmit}
              buttonStyle={styles.btn}
              textStyle={styles.text}
            />
          </View>
        </View>
      </CustomBackground>
    );
  }
}
const actions = {loginUser};
export default connect(null, actions)(Login);
