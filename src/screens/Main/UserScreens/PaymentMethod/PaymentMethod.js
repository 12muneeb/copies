import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  Button,
} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {colors, family, size} from '../../../../utils';
import {appIcons} from '../../../../assets';
import CustomButton from '../../../../components/CustomButton';
import CustomTextInput from '../../../../components/CustomTextInput';
import Img from '../../../../components/Img';
import styles from './styles';
import AppBackground from '../../../../components/AppBackground';
import CustomText from '../../../../components/CustomText';
import NavService from '../../../../helpers/NavService';

const {width, height} = Dimensions.get('screen');

class CardModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      checked: false,

      selectedValue: null,
      bio: '',
      isDatePickerVisible: false,
      cardHolder: '',
      cardNumber: '',
      expDate: '',
      cvv: '',
      selectedPaymentMethod: null, // To track the selected payment method
    };
  }

  handlePaymentMethodSelect = (method) => {
    this.setState({ selectedPaymentMethod: method });
  };

  showDatePicker = () => {
    this.setState({isDatePickerVisible: true});
  };

  hideDatePicker = () => {
    this.setState({isDatePickerVisible: false});
  };

  handleDateConfirm = date => {
    const formattedDate = date.toISOString().split('T')[0];
    this.setState({expDate: formattedDate});
    this.hideDatePicker();
  };

  handleSubmit = () => {
    this.setState({checked: false});
    // Call your onSubmit function here or do whatever you need
  };

  render() {
    const {} = this.props;

    return (
      <AppBackground title={'Payment Method'} back>
        <View style={styles.viewStyle1}>
        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <TouchableOpacity
              style={[
                styles.select,
                {
                  backgroundColor:
                    this.state.selectedPaymentMethod === 'CASH'
                      ? colors.primary
                      : colors.secondary,
                },
              ]}
              onPress={() => this.handlePaymentMethodSelect('CASH')}>
             {this.state.selectedPaymentMethod === 'CASH' && (
                <Img local={true} src={appIcons.righticon} style={styles.tickimg} />
              )}
              <Text style={styles.paymenttxt}>CASH</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.select1,
                {
                  backgroundColor:
                    this.state.selectedPaymentMethod === 'CHEQUE'
                      ? colors.primary
                      : colors.secondary,
                },
              ]}
              onPress={() => this.handlePaymentMethodSelect('CHEQUE')}>
              {this.state.selectedPaymentMethod === 'CHEQUE' && (
                <Img local={true} src={appIcons.righticon} style={styles.tickimg} />
              )}
              <Text style={styles.paymenttxt}>CHEQUE</Text>
            </TouchableOpacity>
          </View>
          <View style={{gap: 10, marginHorizontal: 15, marginVertical: 25}}>
            <CustomTextInput
              containerStyle={styles.contast}
              maxLength={20}
              placeholder={'Card Holder'}
              value={this.state.cardHolder}
              placeholderColor={colors.black}
              borderRadius={20}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'default'}
              onChangeText={value => this.setState({cardHolder: value})}
            />
            <CustomTextInput
              containerStyle={styles.contast}
              maxLength={15}
              placeholder={'Card Number'}
              value={this.state.cardNumber}
              placeholderColor={colors.black}
              borderRadius={20}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'phone-pad'}
              onChangeText={value => this.setState({cardNumber: value})}
            />
            <View style={styles.rowContainer}>
              <CustomTextInput
                editable={false}
                rightImage={appIcons.celendar}
                rightImagetintColor={colors.primary}
                showSoftInputOnFocus={false}
                containerStyle={{
                  width: '95%',
                  backgroundColor: colors.white,
                  color: colors.black,
                  marginLeft: -5,
                }}
                maxLength={30}
                placeholder={'Exp Date'}
                value={this.state.expDate}
                placeholderColor={colors.black}
                borderRadius={20}
                isBorderShow
                borderColor={colors.primary}
                onFocus={this.showDatePicker}
                handlePress={this.showDatePicker}
              />

              <CustomTextInput
                containerStyle={{
                  width: '95%',
                  backgroundColor: colors.white,
                  color: colors.black,
                  marginLeft: -2,
                }}
                maxLength={10}
                placeholder={'CVV'}
                value={this.state.cvv}
                placeholderColor={colors.black}
                borderRadius={20}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'phone-pad'}
                onChangeText={value => this.setState({cvv: value})}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                marginLeft: 5,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  borderWidth: 1,
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  backgroundColor: this.state.checked
                    ? colors.primary
                    : 'transparent',
                  borderColor: colors.primary,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => this.setState({checked: !this.state.checked})}>
                {this.state.checked && (
                  <Img
                    local
                    src={appIcons.tick}
                    resizeMode={'contain'}
                    style={{width: 20, height: 20}}
                  />
                )}
              </TouchableOpacity>
              <CustomText text="Save Card" style={styles.cardtxt} />
            </View>
          </View>
          <DateTimePickerModal
            isVisible={this.state.isDatePickerVisible}
            mode="date"
            onConfirm={this.handleDateConfirm}
            onCancel={this.hideDatePicker}
          />
          <CustomButton
            onPress={() => NavService.navigate('SubscriptionPayment')}
            title={'Pay Now'}
            buttonStyle={styles.btnstyle}
          />
        </View>
      </AppBackground>
    );
  }
}

export default CardModal;
