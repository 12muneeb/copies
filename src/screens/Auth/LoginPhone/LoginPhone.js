import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {colors} from '../../../utils';
import {appLogos} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';
import Logo from '../../../components/Logo';
import CustomText from '../../../components/CustomText';

class LoginPhone extends Component {
  state = {
    email: '',
    password: '',
    phoneNumber: '',
    formattedPhoneNumber: '',
    phone_number_value: '',
    FormattedValue: '',
  };

 

  render() {
    const {role} = this.props?.route?.params;
    console.log('eess', role);
   const  onSubmit = () => {
      const {phone_number_value, FormattedValue} = this.state;
      if (phone_number_value == '') {
        Toast.show({
          text1: `Phone number field cant't be empty`,
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (FormattedValue?.length < 11 || FormattedValue?.length > 16)
        return Toast.show({
          text1: 'Invalid phone number',
          type: 'error',
          visibilityTime: 3000,
        });
      else if (FormattedValue.includes('.') || FormattedValue.includes(',')) {
        Toast.show({
          text1: 'Invalid phone number',
          type: 'error',
          visibilityTime: 3000,
        });
      } else {
        Keyboard?.dismiss();
        NavService.navigate('Otp', {
          screenName: 'loginphone',
          phoneNo: phone_number_value,
          role:role
        });
        Toast.show({
          text1: 'Otp Verification has been sent to your Phone Number',
          type: 'success',
          visibilityTime: 3000,
        });
      }
    };
    const {
      email,
      password,
      phoneNumber,
      formattedPhoneNumber,
      phone_number_value,
      FormattedValue,
    } = this.state;


    const phoneInput = React.createRef(null);
    return (
      <CustomBackground
        showLogo={false}
        onBack={() => this.props.navigation.goBack()}>
        <View style={[styles.container, {padding: 50}]}>
          <View style={{marginRight:10}}>
            <Logo size={220} />
          </View>

          <View style={styles.maincontainer}>
            <Text style={styles.login}>Welcome Back!</Text>
            <CustomText
              style={styles.names}
              text={'Please sign-in to your account'}
            />
          </View>

          <View style={styles.phone}>
            <PhoneInput
              ref={phoneInput}
              defaultValue={phone_number_value}
              defaultCode="US"
              layout="first"
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textContainerPhone}
              textInputStyle={{color: colors.black}}
              flagButtonStyle={styles.Flag}
              onChangeText={text => {
                this.setState({phone_number_value: text});
              }}
              onChangeFormattedText={text => {
                this.setState({FormattedValue: text});
              }}
              withDarkTheme
              placeholder={'Phone Number'}
              textInputProps={{
                placeholderTextColor: colors.black,
                maxLength: 11,
                height: 55,
              }}
            />
          </View>

          <CustomButton
            title="Continue"
            onPress={onSubmit}
            buttonStyle={styles.btn}
            textStyle={styles.text}
          />
        </View>
      </CustomBackground>
    );
  }
}
const actions = {loginUser};
export default connect(null, actions)(LoginPhone);
