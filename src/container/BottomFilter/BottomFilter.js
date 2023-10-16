import React, {Component,createRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Pressable,
} from 'react-native';
import {colors, size, family} from '../../utils';
import CustomModal from '../../components/CustomModal';
import {appIcons} from '../../assets';
import CustomButton from '../../components/CustomButton';
import Img from '../../components/Img';
import CustomText from '../../components/CustomText';
import {styles} from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import GooglePlaceAutocomplete from '../../components/GooglePlaceAutocomplete';
import ActionSheetComponent from '../../components/ActionSheetComponent';

const width = Dimensions.get('screen');

class BottomFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      showImage: true,
      location: '',
      address: '',
      formattedPhoneNumber: '',
      bio: '',
      latitude: '',
      city: '',
      province: '',
      cityData: ['Texsla', 'Washington'],
      provinceData: ['America', 'USA'],
    };
    this.actionSheetStateCity = createRef();
    this.actionSheetStateRef = createRef();
  }

  toggleImage = () => {
    this.setState(prevState => ({
      showImage: !prevState.showImage,
    }));
  };

  render() {
    const {
      isModalVisible = false,
      onToggle = () => {},
      onCross = () => {},
      handleApply
    } = this.props;
    const {
      search,
      showImage,
      address,
      latitude,
      longitude,
      location,
      city,
      province,

      cityData,
      provinceData,
    } = this.state;

    return (
      <CustomModal visible={isModalVisible} togglePopup={onToggle}>
        <View style={styles.mainContainer}>
          <View style={styles.modalChild}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={onCross}>
              <Img
                local
                src={appIcons.crosson}
                style={{width: 80, height: 6, borderRadius: 8}}
              />
            </TouchableOpacity>
            <View style={{paddingHorizontal: 30}}>
              <CustomText text="Search" style={styles.txt} />
              <CustomTextInput
                maxLength={35}
                placeholderTextColor={colors.black}
                placeholder={'Search'}
                value={search}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({search: value})}
                containerStyle={styles.input}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={styles.tickcontainer}
                  onPress={this.toggleImage}>
                  {showImage && (
                    <Img
                      local
                      src={appIcons.notempty}
                      resizeMode={'cover'}
                      style={styles.tick}
                    />
                  )}
                </TouchableOpacity>
                <CustomText text="Top Rated" style={styles.txt1} />
              </View>
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
              <CustomButton 
              title={'Apply'}
              buttonStyle={styles.btn}
              onPress={handleApply}
              />
            </View>
          </View>
        </View>
      </CustomModal>
    );
  }
}

export default BottomFilter;
