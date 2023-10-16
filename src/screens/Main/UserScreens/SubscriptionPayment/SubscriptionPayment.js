import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NavService from '../../../../helpers/NavService';
import {appIcons} from '../../../../assets';
import AppBackground from '../../../../components/AppBackground';
import Img from '../../../../components/Img';
import CustomButton from '../../../../components/CustomButton';
import {styles} from './styles';
class SubscriptionPayment extends Component {
  state = {};

  render() {
    return (
      <AppBackground marginHorizontal={false}>
        <View style={styles.mainview}>
          <View style={styles.viewstyle1}>
            <Img local={true} src={appIcons.right} style={styles.smile} />
            <Text style={styles.txt1}>Congratulation</Text>
            <Text style={styles.txt2}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              fringilla, nunc tortor
            </Text>
          </View>
          <CustomButton
            onPress={() => NavService.navigate('BottomTabs')}
            title={'Back to Home'}
            buttonStyle={styles.back}
            textStyle={styles.textbutton}
          />
        </View>
      </AppBackground>
    );
  }
}

export default SubscriptionPayment;
