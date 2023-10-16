import React, {Component, createRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Keyboard,
  Dimensions,
  StyleSheet,
} from 'react-native';
import AppBackground from '../../../../components/AppBackground';
import ImagePicker from '../../../../components/ImagePicker';
import ProfileImage from '../../../../components/ProfileImage';
import styles from './styles';
import Shadows from '../../../../helpers/Shadows';
import Img from '../../../../components/Img';
import NavService from '../../../../helpers/NavService';
import {appImages, appIcons} from '../../../../assets';
import {colors} from '../../../../utils';
import CustomTextInput, {
  CustomPhoneInput,
} from '../../../../components/CustomTextInput';
import CustomButton from '../../../../components/CustomButton';
import CustomText from '../../../../components/CustomText';
import ActionSheetComponent from '../../../../components/ActionSheetComponent';
import GooglePlaceAutocomplete from '../../../../components/GooglePlaceAutocomplete';

const {width, height} = Dimensions.get('screen');

export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
      lastName: 'Smith',
      profileImage: null,
      // phoneNumber: this?.props?.route?.params?.email,
      phoneNumber: '+123-456-789',
      email: this?.props?.route?.params?.email,
      longitude: '',
      location: '',
      address: '',
      formattedPhoneNumber: '',
      bio: '',
      latitude: '',
      city: 'USA',
      province: 'Texsla',
      email: '',
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
      email,
    } = this.state;
    const onSubmit = () => {
      NavService.goBack();
    };
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    return (
      <AppBackground title={'Edit Profile'} back marginHorizontal={false}>
        <View>
          <View style={styles.picker}>
            <ImagePicker
              onImageChange={(path, mime, type) => {
                updateImageInGallery(path, mime, type);
              }}>
              <ProfileImage
                backgroundColor={colors.secondary}
                imgwidth={profileImage !== null ? 130 : 130}
                imgheight={profileImage !== null ? 130 : 130}
                resizeMode={'cover'}
                innerAsset={profileImage == null ? true : false}
                imageUri={
                  profileImage !== null ? profileImage?.path : appImages.profile
                }
                customStyle={{
                  ...Shadows.shadow5,
                }}
                style={{
                  borderRadius: profileImage?.path ? 130 : 130,
                  resizeMode: 'cover',
                  borderWidth: 4,
                  borderColor: colors.secondary,
                }}
              />
              <View style={styles.viewStyle1}>
                <Img local src={appIcons.upload} style={styles.upload} />
              </View>
            </ImagePicker>
          </View>
          <View style={{gap: 15}}>
            <CustomText text="Robert alex" style={styles.txt} />
            <View style={styles.subview}>
              <CustomTextInput
                // customStyless={{width: '50%',}}
                containerStyle={styles.placehand}
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
                containerStyle={styles.placehand}
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
            <CustomPhoneInput
              editable={true}
              containerStyle={styles.phnholder}
              placeholderTextColor={colors.lightgray}
              placeholderColor={colors.lightgray}
              placeholder={'Phone Number'}
              value={phoneNumber ? phoneNumber : formattedPhoneNumber}
              formattedPhoneNumber={formattedPhoneNumber}
              phoneNumber={phoneNumber}
              onChangePhoneInput={(phoneNumberFormat, phoneNumber) =>
                this.setState({
                  formattedPhoneNumber: phoneNumberFormat,
                  phoneNumber: phoneNumber,
                })
              }
            />
              {/* <GooglePlaceAutocomplete
                // addressText={location}
                handleAddressText={location => {
                  this.setState({location: '', latitude: '', longitude: ''});
                }}
                placeholder={address ? address : 'Location'}
                rightIcon={appIcons.location}
                CheckIn={true}
                // val={location}
                isBorderShow
                callback={this.callback}
                wrapperStyles={styles.wrapmper}
                contStyles={styles.contStyles}
              /> */}
            <View
              style={styles.gaphorizontal}>
              <CustomButton
                nextBtn
                nextStyle={{tintColor: colors.red}}
                title={city ? city : 'City'}
                buttonStyle={styles.gender}
                textStyle={city ? styles.gendercolorafter : styles.gendercolor}
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
            <CustomButton
              title={'Save'}
              onPress={onSubmit}
              buttonStyle={styles.btn}
              textStyle={styles.text}
            />
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default EditProfile;
