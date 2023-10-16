import {Text, View, ScrollView, TouchableOpacity, Platform} from 'react-native';
import React, {Component, createRef} from 'react';

import CustomTextInput from '../../../../components/CustomTextInput';
import CustomButton from '../../../../components/CustomButton';
import ActionSheetComponent from '../../../../components/ActionSheetComponent';
import {colors} from '../../../../utils';
import {styles} from './styles';
import ProfileImage from '../../../../components/ProfileImage';
import ImagePicker from '../../../../components/ImagePicker';
import {appIcons, appImages} from '../../../../assets';
import AppBackground from '../../../../components/AppBackground';
import Img from '../../../../components/Img';
import NavService from '../../../../helpers/NavService';
export class VehicleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      profileImage: null,
      category: '',
      count: '',
      kmcharges: '',
      hourlycharges: '',
      loadcapicity: '',
      bio: '',
      charges: '',
      categoryData: ['Car', 'Truck'],
      paymentData: ['Cash', 'Cheque'],
      payment: '',
      profileImage: '',
    };
    this.actionSheetStateRef = createRef();
    this.actionSheetStatepayment = createRef();
  }

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
    } = this.state;

    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    return (
      <AppBackground
        title={'Vehicle Details/Charges'}
        back
        marginHorizontal={false}>
        <View>
          <ImagePicker
            onImageChange={(path, mime, type) => {
              updateImageInGallery(path, mime, type);
            }}>
            <View style={{alignItems: 'center'}}>
              <ProfileImage
                borderColor={colors.black}
                upload
                borderRadiii
                customStyle={{
                  height: 160,
                  width: '100%',
                  borderRadius: 10,
                  marginTop: 10,
                }}
                tintColor={colors.red}
                borderWWidth={profileImage?.path ? 0 : 1}
                resizeMode={'cover'}
                backgroundColor={colors.white}
                style={
                  profileImage?.path
                    ? {height: '100%', width: '100%', borderRadius: 10}
                    : {
                        height: 160,
                        width: '100%',
                        backgroundColor: colors.white,
                      }
                }
                innerAsset={profileImage == null ? true : false}
                imageUri={
                  profileImage !== null ? profileImage?.path : appIcons.block
                }
              />
            </View>
          </ImagePicker>
        </View>
        <View
          style={{height: '57%', paddingBottom: Platform.OS == 'ios' ? 0 : 30}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop: 20, marginVertical: 5}}>
              <Text style={styles.title}>Vehicle Details</Text>
            </View>
            <View style={{gap: 10, paddingVertical: 8}}>
              <CustomButton
                nextBtn
                nextStyle={{tintColor: colors.red}}
                title={category ? category : 'Category'}
                buttonStyle={styles.gender}
                textStyle={
                  category ? styles.gendercolorafter : styles.gendercolor
                }
                onPress={() => this.actionSheetStateRef.current.show()}
              />
              <ActionSheetComponent
                ref={this.actionSheetStateRef}
                title="Select Category"
                dataset={categoryData}
                onPress={item => {
                  this.setState({
                    category: item,
                  });
                }}
              />
              <CustomTextInput
                containerStyle={styles.placehand}
                maxLength={10}
                placeholderTextColor={colors.lightshadow}
                placeholder={'Vehicle Count'}
                value={count}
                keyboardType={'phone-pad'}
                onChangeText={value => this.setState({count: value})}
              />
              <CustomTextInput
                containerStyle={styles.placehand}
                maxLength={10}
                placeholderTextColor={colors.lightshadow}
                placeholder={'Per Km charges'}
                value={kmcharges}
                keyboardType={'phone-pad'}
                onChangeText={value => this.setState({kmcharges: value})}
              />
              <CustomTextInput
                containerStyle={styles.placehand}
                maxLength={10}
                placeholderTextColor={colors.lightshadow}
                placeholder={'hourly Charges'}
                value={hourlycharges}
                keyboardType={'phone-pad'}
                onChangeText={value => this.setState({hourlycharges: value})}
              />
              <CustomTextInput
                containerStyle={styles.placehand}
                maxLength={10}
                placeholderTextColor={colors.lightshadow}
                placeholder={'Load Capacity'}
                value={loadcapicity}
                keyboardType={'phone-pad'}
                onChangeText={value => this.setState({loadcapicity: value})}
              />
              <CustomTextInput
                textAlignVertical="top"
                maxLength={350}
                multiline
                placeholder={'Additional Service'}
                value={bio}
                color={'black'}
                placeholderTextColor={colors.lightshadow}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({bio: value})}
                textInputStyles={{height: 100}}
                containerStyle={{
                  borderRadius: 10,
                  height: 110,
                  width: '99%',
                  backgroundColor: colors.white,
                }}
              />
              <CustomTextInput
                containerStyle={styles.placehand}
                maxLength={10}
                placeholderTextColor={colors.lightshadow}
                placeholder={'Additional Service Charges'}
                value={charges}
                keyboardType={'phone-pad'}
                onChangeText={value => this.setState({charges: value})}
              />

              <CustomButton
                nextBtn
                nextStyle={{tintColor: colors.red}}
                title={payment ? payment : 'Payment Details'}
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
          </ScrollView>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            gap: 20,
            height: 160,
          }}>
          <CustomButton
            title={'Add Another Vehicle'}
            // onPress={onSubmit}
            buttonStyle={styles.btn}
            textStyle={styles.text}
          />
          <CustomButton
            title={'Add'}
            onPress={() => NavService.navigate('Profile')}
            buttonStyle={styles.btn}
            textStyle={styles.text}
          />
        </View>
      </AppBackground>
    );
  }
}

export default VehicleDetail;
