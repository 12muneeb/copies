import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GEOCODE_API_KEY} from '../config/WebService';
import {colors, family, size, WP} from '../utils';
import {appIcons} from '../assets';
import Img from './Img';
const {width} = Dimensions.get('screen');
const GooglePlaceAutocomplete = ({
  callback,
  wrapperStyles,
  inputStyles,
  placeholder,
  iconColor,
  label,
  title,
  titleStyle,
  titleViewstyle,
  titleText,
  backgroundColor,
  rightIcon,
  onDelete,
  index,
  image,
  contStyles,
  imageStyle,
  colortext,
  placeholdercolor,
  addressText,
  handleAddressText,
}) => {
  return (
    <View style={[styles.geoLocationView, wrapperStyles]}>
      <GooglePlacesAutocomplete
        enableHighAccuracyLocation
        fetchDetails
        disableScroll
        backgroundColor
        rightIcon
        enablePoweredByContainer={false}
        keepResultsAfterBlur={true}
        listViewDisplayed={false}
        onDelete={() => this.deletePoint(index)} // Add the onDelete prop
        placeholder={placeholder ? placeholder : ''}
        onPress={(data, details = null) => {
          const {formatted_address, geometry} = details;
          callback(formatted_address, geometry, label);
        }}
        renderRightButton={() => (
          <View
            style={[
              {
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginRight: 15,
                bottom: 1,
              },
              imageStyle,
            ]}>
            <Img
              local
              src={appIcons.locate}
              resizeMode={'contain'}
              style={{width: 20, height: 20}}
            />
          </View>
        )}
        styles={{
          textInput: [
            {
              borderRadius: 8,
              color: colors.black,
            },
            contStyles,
          ],
          description: {color: colors.black},
        }}
        textInputProps={{
          // value: addressText,
          // onChangeText: handleAddressText,
          placeholderTextColor: placeholdercolor
            ? placeholdercolor
            : colors.black,
          fontSize: size.normal,
          paddingLeft: 15,
          fontFamily: family.RedHatDisplay_Medium,
          color: colortext ? colortext : colors.black,
        }}
        query={{
          key: 'AIzaSyBmaS0B0qwokES4a_CiFNVkVJGkimXkNsk',
          language: 'en',
        }}
      />
    </View>
  );
};
export default GooglePlaceAutocomplete;
const styles = StyleSheet.create({
  geoLocationView: {
    width: '90%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    height: 60,
    color: colors.black,
    borderRadius: 8,
  },
});
