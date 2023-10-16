import {Text, View, ScrollView} from 'react-native';
import React, {Component, createRef} from 'react';
import CustomBackground from '../../../components/CustomBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import ActionSheetComponent from '../../../components/ActionSheetComponent';
import {colors} from '../../../utils';
import {styles} from './styles';
import ProfileImage from '../../../components/ProfileImage';
import ImagePicker from '../../../components/ImagePicker';
import { appIcons } from '../../../assets';
import Toast from 'react-native-toast-message';
import { connect } from 'react-redux';
import {loginUser} from '../../../redux/actions/authAction';
export class Description extends Component {
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
    const {role} = this.props?.route?.params;
    console.log('ee', role);
    const onSubmit = () => {
      const {name,} =
        this.state;
      // if (!count) {
      //   Toast.show({
      //     text1: 'Vehicle Count field cannot be empty',
      //     type: 'error',
      //     visibilityTime: 3000,
      //   });
      // }
      // else {
     
          let payload = {
            role: 'Mover',
            email: 'abc@gmail.com',
            password: '123456',
          };
          Toast.show({
            text1: 'Sign up successful',
            type: 'success',
            visibilityTime: 3000,
          });
          this.props.loginUser(payload);
        } 
      // }
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    return (
      <CustomBackground
        showLogo={false}
        titleText={'Vehicle Details/Charges'}
        scrollEnabled={false}
        onBack={() => this.props.navigation.goBack()}>
        <View style={{height: '80%'}}>
          <ScrollView
            contentContainerStyle={{marginTop: -50}}
            showsVerticalScrollIndicator={false}>
            <View style={{marginTop: 80}}>
              <ImagePicker
  onImageChange={(path, mime, type) => {
    updateImageInGallery(path, mime, type);
  }}>
  <View style={{ alignItems: 'center' }}>
    <ProfileImage
      borderColor={colors.black}
      upload
      borderRadiii
      customStyle={{ height: 160, width: '100%', borderRadius: 10, marginTop: 10 }}
      tintColor={colors.red}
      borderWWidth={profileImage?.path ? 0 : 1}
      resizeMode={'cover'}
      backgroundColor={colors.white}
      style={
        profileImage?.path
          ? { height: '100%', width: '100%', borderRadius: 10 }
          : { height: 160, width: '100%', backgroundColor: colors.darkBlue }
      }
      innerAsset={profileImage == null ? true : false}
      imageUri={profileImage !== null ? profileImage?.path : appIcons.block}
    />
 
  </View>
</ImagePicker>
            </View>
            <View style={{marginTop: 20, marginBottom: 10}}>
              <Text style={styles.title}>Vehicle Details</Text>
            </View>
            <View style={{gap: 10}}>
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
                maxLength={10}
                placeholderTextColor={colors.black}
                placeholder={'Vehicle Count'}
                value={count}
                keyboardType={'phone-pad'}
                onChangeText={value => this.setState({count: value})}
              />
              <CustomTextInput
                maxLength={10}
                placeholderTextColor={colors.black}
                placeholder={'Per Km charges'}
                value={kmcharges}
                keyboardType={'phone-pad'}
                onChangeText={value => this.setState({kmcharges: value})}
              />
              <CustomTextInput
                maxLength={10}
                placeholderTextColor={colors.black}
                placeholder={'hourly Charges'}
                value={hourlycharges}
                keyboardType={'phone-pad'}
                onChangeText={value => this.setState({hourlycharges: value})}
              />
              <CustomTextInput
                maxLength={10}
                placeholderTextColor={colors.black}
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
                placeholderTextColor={colors.black}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({bio: value})}
                textInputStyles={{height: 100}}
                containerStyle={{
                  borderRadius: 10,
                  height: 110,
                  width: '100%',
                }}
              />
              <CustomTextInput
                maxLength={10}
                placeholderTextColor={colors.black}
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
            height: 210,
          }}>
          <CustomButton
            title={'Add Another Vehicle'}
            // onPress={onSubmit}
            buttonStyle={styles.btn}
            textStyle={styles.text}
          />
          <CustomButton
            title={'Create'}
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
export default connect(null, actions)(Description);