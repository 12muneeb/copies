import {
  Dimensions,
  Image,
  Linking,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Toast from 'react-native-toast-message';
// import {Colors} from '../../../config';
import {colors, family, size} from '../../utils';
import CustomBackground from '../../components/CustomBackground';
// import SocialSignin from '../../../components/SocialSignin';
// import Icons from '../../../assets/Icons';
import {appIcons, appLogos} from '../../assets/index';
import Logo from '../../components/Logo';
import styles from './styles';
import CustomText from '../../components/CustomText';
const {width} = Dimensions.get('window');

class App extends Component {
  state = {
    agreementModal: false,
    terms: false,
    policy: false,
    navigator: '',
  };

  render() {
    const {agreementModal, terms, policy, navigator} = this.state;
    const methods = [
      {
        name: 'User',
        icon: appIcons.user,
        onPress: () => navigation.navigate('PreLogin', {role: 'User'}),
        color: colors.secondary,
      },
      {
        name: 'Mover',
        icon: appIcons.truck,
        color: colors.secondary,
        onPress: () => navigation.navigate('PreLogin', {role: 'Mover'}),
        // onPress: SocialSignin.Facebook,
      },
    ];
    const {navigation} = this.props;
    return (
      <CustomBackground back={false} showLogo={false}>
        <View style={[styles.container, {padding: 50}]}>
          <View style={styles.space}>
            <Logo size={250} />
          </View>
          <View>
            <View style={{alignItems: 'center', paddingVertical: 15}}>
              <Text
                style={{
                  fontSize: size.xxlarge,
                  fontFamily: family.Roboto_Bold,
                  color: colors.black,
                }}>
                Role Selection
              </Text>
            </View>
            {methods.map((method, i) => {
              const {color, name, icon, onPress} = method;
              if (Platform.OS !== 'ios' && name === 'Apple') return null;
              return (
                <TouchableOpacity
                  onPress={onPress}
                  key={i}
                  activeOpacity={0.8}
                  style={[
                    styles.buttonContainer,
                    {
                      backgroundColor: color,
                      paddingLeft: name == 'Mover' ? 15 : 0,
                    },
                  ]}>
                  <Image source={icon} style={styles.buttonInnerImage} />

                  <Text style={[styles.buttonInnerText, {color: colors.white}]}>
                    Continue with {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default App;
