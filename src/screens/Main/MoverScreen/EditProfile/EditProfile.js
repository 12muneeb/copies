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

const {width, height} = Dimensions.get('screen');

export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rox',
      lastname: 'Bex',
      profileImage: null,
      bio: 'lorem ipsum is a dummy content text',
      phoneNumber: '002099000',
      formattedPhoneNumber: '',
      setKeyboardStatus: false,
    };
  }

  render() {
    const {
      name,
      lastname,
      phoneNumber,
      profileImage,
      bio,
      formattedPhoneNumber,
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
                value={lastname}
                placeholderColor={colors.lightgray}
                borderRadius={20}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'default'}
                onChangeText={value => this.setState({lastname: value})}
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
              textInputStyles={{height: 150,}}
              containerStyle={styles.bio}
            />
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
