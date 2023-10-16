import React, {Component, createRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Keyboard,
} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput, {
  CustomPhoneInput,
} from '../../../components/CustomTextInput';
import ImagePicker from '../../../components/ImagePicker';
import ProfileImage from '../../../components/ProfileImage';
import NavService from '../../../helpers/NavService';
import {colors, family} from '../../../utils';
import {appLogos, appImages, appIcons} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import styles from './styles';
import GooglePlaceAutocomplete from '../../../components/GooglePlaceAutocomplete';
import ActionSheetComponent from '../../../components/ActionSheetComponent';

class CompleteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      profileImage: null,
      // phoneNumber: this?.props?.route?.params?.email,
      phoneNumber: '',
      email: this?.props?.route?.params?.email,
      longitude: '',
      location: '',
      address: '',
      formattedPhoneNumber: '',
      bio: '',
      latitude: '',
      email: this?.props?.route?.params?.email,
      location: '',
      city: '',
      province: '',
      emailAddress: '',
      cityData: ['Texsla', 'Washington'],
      provinceData: ['America', 'USA'],
    };
    this.actionSheetStateCity = createRef();
    this.actionSheetStateRef = createRef();
  }

  callback = (address, geometry) => {
    if (address) {
      this.setState({
        latitude: geometry?.location.lat,
        location: address,
        longitude: geometry?.location.lng,
      });
    } else {
      this.setState({location: ''});
    }
  };
  render() {
    const {
      name,
      lastName,
      profileImage,
      phoneNumber,
      formattedPhoneNumber,
      address,
      latitude,
      longitude,
      location,
      city,
      province,
      bio,
      cityData,
      provinceData,
      emailAddress,
    } = this.state;
    const {role, email, phoneNo} = this.props?.route?.params;
    console.log('ee', role);
    const onSubmit = () => {
      // const {name, lastName, phoneNumber, address, city, province, bio, email} =
      //   this.state;
      // if (!name) {
      //   Toast.show({
      //     text1: 'name field cannot be empty',
      //     type: 'error',
      //     visibilityTime: 3000,
      //   });
      // }
      // else if (lastName == '') {
      //   Toast.show({
      //     text1: 'last Name field cannot be empty',
      //     type: 'error',
      //     visibilityTime: 3000,
      //   });
      // }
      // else if (email == '') {
      //   Toast.show({
      //     text1: 'Email field cannot be empty',
      //     type: 'error',
      //     visibilityTime: 3000,
      //   });
      // }
      // else if (phoneNumber == '') {
      //   Toast.show({
      //     text1: 'Phone Number field cannot be empty',
      //     type: 'error',
      //     visibilityTime: 3000,
      //   });
      // }
      // else if (phoneNumber.length > 0) {
      //   if (phoneNumber == '') {
      //     Toast.show({
      //       text1: `PhoneNumber can't be empty`,
      //       type: 'error',
      //       visibilityTime: 3000,
      //     });
      //   }
      //    else if (phoneNumber?.length < 11 || phoneNumber?.length > 16) {
      //     Toast.show({
      //       text1: 'Invalid phone number.',
      //       type: 'error',
      //       visibilityTime: 3000,
      //     });
      //   }
      //   else if (phoneNumber.includes('.') || phoneNumber.includes(',')) {
      //     Toast.show({
      //       text1: 'Invalid phone number.',
      //       type: 'error',
      //       visibilityTime: 3000,
      //     });
      //   }
      // }
      // else {
      if (role == 'User') {
        let payload = {
          role: 'User',
          email: 'abc@gmail.com',
          password: '123456',
        };
        Toast.show({
          text1: 'Sign up successful',
          type: 'success',
          visibilityTime: 3000,
        });
        this.props.loginUser(payload);
      } else {
        NavService.navigate('Description', {role: role});
        Keyboard.dismiss();
      }
      // }
    };

    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    return (
      <CustomBackground
        showLogo={false}
        titleText={'Create Profile'}
        onBack={() => this.props.navigation.goBack()}>
        <View
          style={{alignItems: 'center', alignSelf: 'center', marginTop: 50}}>
          <View style={{marginTop: 20}}>
            <ImagePicker
              onImageChange={(path, mime, type) => {
                updateImageInGallery(path, mime, type);
              }}>
              <ProfileImage
                backgroundColor={colors.secondary}
                // imgtintcolor={colors.primary}
                imgwidth={profileImage !== null ? 130 : 30}
                imgheight={profileImage !== null ? 130 : 30}
                resizeMode={'cover'}
                // borderRadiii={ProfileImage != null ? 100 : 130}
                innerAsset={profileImage == null ? true : false}
                imageUri={
                  profileImage !== null ? profileImage?.path : appIcons.cemra
                }
                customStyle={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,

                  elevation: 24,
                }}
                style={{
                  borderRadius: profileImage?.path ? 130 : 0,
                  resizeMode: 'cover',
                }}
              />
            </ImagePicker>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{color: colors.black, fontFamily: family.Roboto_Medium}}>
              Upload Your Image
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <View style={{gap: 10}}>
              <View style={styles.subview}>
                <CustomTextInput
                  // customStyless={{width: '50%',}}
                  containerStyle={{width: '95%'}}
                  maxLength={30}
                  placeholder={'First Name'}
                  value={name}
                  placeholderColor={colors.lightgray}
                  borderRadius={20}
                  isBorderShow
                  borderColor={colors.primary}
                  keyboardType={'default'}
                  onChangeText={value => this.setState({name: value})}
                />
                <CustomTextInput
                  containerStyle={{width: '95%'}}
                  maxLength={30}
                  placeholder={'Last Name'}
                  value={lastName}
                  placeholderColor={colors.lightgray}
                  borderRadius={20}
                  isBorderShow
                  borderColor={colors.primary}
                  keyboardType={'default'}
                  onChangeText={value => this.setState({lastName: value})}
                />
              </View>
              {phoneNo && (
                <CustomPhoneInput
                  editable={false}
                  containerStyle={[styles.containerStyle]}
                  placeholderTextColor={colors.lightgray}
                  placeholderColor={colors.lightgray}
                  placeholder={'Phone Number'}
                  value={phoneNo ? phoneNo : formattedPhoneNumber}
                  formattedPhoneNumber={formattedPhoneNumber}
                  phoneNumber={phoneNumber}
                  onChangePhoneInput={(phoneNumberFormat, phoneNumber) =>
                    this.setState({
                      formattedPhoneNumber: phoneNumberFormat,
                      phoneNumber: phoneNumber,
                    })
                  }
                />
              )}
              {role == 'User' && (
                <View>
                  <GooglePlaceAutocomplete
                    // addressText={location}
                    handleAddressText={location => {
                      this.setState({
                        location: '',
                        latitude: '',
                        longitude: '',
                      });
                    }}
                    placeholder={address ? address : 'Location'}
                    placeholdercolor={colors.lightgray}
                    rightIcon={appIcons.location}
                    CheckIn={true}
                    // val={location}
                    isBorderShow
                    callback={this.callback}
                    wrapperStyles={styles.wrapmper}
                    contStyles={styles.contStyles}
                  />
                  <View style={styles.gaphorizontal}>
                    <CustomButton
                      nextBtn
                      nextStyle={{tintColor: colors.red}}
                      title={city ? city : 'City'}
                      buttonStyle={styles.gender}
                      textStyle={
                        city ? styles.gendercolorafter : styles.gendercolor
                      }
                      onPress={() => this.actionSheetStateCity.current.show()}
                    />
                    <ActionSheetComponent
                      ref={this.actionSheetStateCity}
                      title="Select City"
                      dataset={cityData}
                      onPress={item => {
                        this.setState({
                          city: item,
                        });
                      }}
                    />
                    <CustomButton
                      nextBtn
                      nextStyle={{tintColor: colors.red}}
                      title={province ? province : 'Province'}
                      buttonStyle={styles.genders}
                      textStyle={
                        province ? styles.gendercolorafter : styles.gendercolor
                      }
                      onPress={() => this.actionSheetStateRef.current.show()}
                    />
                    <ActionSheetComponent
                      ref={this.actionSheetStateRef}
                      title="Select Province"
                      dataset={provinceData}
                      onPress={item => {
                        this.setState({
                          province: item,
                        });
                      }}
                    />
                  </View>
                </View>
              )}

              {role == 'Mover' && (
                <>
                  {email && (
                    <CustomTextInput
                      editable={false}
                      containerStyle={{width: '95%'}}
                      maxLength={30}
                      placeholder={'Email Address'}
                      value={email ? email : emailAddress}
                      placeholderColor={colors.lightgray}
                      borderRadius={20}
                      isBorderShow
                      borderColor={colors.primary}
                      keyboardType={'email-address'}
                      onChangeText={value =>
                        this.setState({emailAddress: value})
                      }
                    />
                  )}

                  <CustomTextInput
                    textAlignVertical="top"
                    maxLength={350}
                    multiline
                    placeholder={'Bio'}
                    value={bio}
                    color={'black'}
                    placeholderColor={colors.lightgray}
                    isBorderShow
                    borderColor={colors.primary}
                    keyboardType={'default'}
                    onChangeText={value => this.setState({bio: value})}
                    textInputStyles={{height: 150}}
                    containerStyle={{
                      borderRadius: 10,
                      height: 150,
                      width: '95%',
                    }}
                  />
                </>
              )}
            </View>
            <View style={{marginTop: 30, marginBottom: 10}}>
              <CustomButton
                title={role == 'User' ? 'Create' : 'Continue'}
                onPress={onSubmit}
                buttonStyle={styles.btn}
                textStyle={styles.text}
              />
            </View>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

const actions = {loginUser};
export default connect(null, actions)(CompleteProfile);
