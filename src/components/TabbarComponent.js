import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Keyboard,
} from 'react-native';
import Modal from 'react-native-modal';
import NavService from '../helpers/NavService';
import CustomButton from './CustomButton';
import Shadows from '../helpers/Shadows';
import {colors, family, size} from '../utils';
import {loginUser} from '../redux/actions/authAction';

import {appIcons, appImages} from '../assets';
import CustomText from './CustomText';
import Img from './Img';
import {connect} from 'react-redux';

const {width} = Dimensions.get('screen');
class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardStatus: false,
      isVisible: false,
    };
  }
  componentDidMount() {
    this.showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      this.setState({keyboardStatus: true});
    });
    this.hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      this.setState({keyboardStatus: false});
    });
  }
  componentWillUnmount() {
    this.showSubscription.remove();
    this.hideSubscription.remove();
  }
  render() {
    const {state, navigation, user} = this.props;
    console.log('fg', user);
    const {keyboardStatus} = this.state;
    console.log(keyboardStatus, 'keyboardStatuskeyboardStatus');

    return (
      <ImageBackground
        source={appImages.tabbar}
        style={[
          {
            width: width,
            height: width * 0.25,
            position: 'absolute',
            bottom: -5,
            justifyContent: 'center',
           ...Shadows.shadow5,
          },
          keyboardStatus ? styles.hideTabNavigation : null,
        ]}
        imageStyle={{
          width: width,
          height: width * 0.265,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            justifyContent: 'space-around',
          }}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const onPress = () => {
              if (user.role == 'Mover') {
                if (route.name === 'Home')
                  navigation.navigate('BottomTabs', {screen: 'Home'});
                if (route.name === 'Review')
                  navigation.navigate('BottomTabs', {screen: 'Review'});
                if (route.name === 'ChatList')
                  navigation.navigate('BottomTabs', {screen: 'ChatList'});
                if (route.name === 'Profile')
                  navigation.navigate('BottomTabs', {screen: 'Profile'});
              } else {
                if (route.name === 'Home')
                  navigation.navigate('BottomTabs', {screen: 'Home'});
                if (route.name === 'MyBookings')
                  navigation.navigate('BottomTabs', {screen: 'MyBookings'});
                if (route.name === 'ChatList')
                  navigation.navigate('BottomTabs', {screen: 'ChatList'});
                if (route.name === 'Profile')
                  navigation.navigate('BottomTabs', {screen: 'Profile'});
              }
            };

            let imageSrc = appIcons.home;
            if (user.role == 'Mover') {
              if (route.name === 'Home') imageSrc = appIcons.home;
              if (route.name === 'Review') imageSrc = appIcons.review;
              if (route.name === 'ChatList') imageSrc = appIcons.chat;
              if (route.name === 'Profile') imageSrc = appIcons.profile;
            } else {
              if (route.name === 'Home') imageSrc = appIcons.home;
              if (route.name === 'MyBookings') imageSrc = appIcons.document;
              if (route.name === 'ChatList') imageSrc = appIcons.chat;
              if (route.name === 'Profile') imageSrc = appIcons.profile;
            }

            if (route.name === 'tabBar4') {
              return <View key={index + 1} style={styles.tabs} />;
            }
            return (
              <>
                <TouchableOpacity
                  key={index + 1}
                  accessibilityState={isFocused ? {selected: true} : {}}
                  accessibilityRole="button"
                  activeOpacity={0.8}
                  onPress={onPress}
                  style={styles.tabs}>
                  {isFocused && (
                    <Image
                      source={appIcons.dot}
                      style={[
                        {
                          height: 10,
                          width: 28,
                          tintColor: colors.darkpurple,
                          alignSelf: 'center',
                        },
                        keyboardStatus ? styles.hideTabNavigation : null,
                      ]}
                      resizeMode="contain"
                    />
                  )}
                  <Image
                    source={imageSrc}
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: isFocused ? '#3538EF' : colors.white,
                      marginTop:15
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </>
            );
          })}
        </View>
      </ImageBackground>
    );
  }
}
function mapStateToProps({authReducer}) {
  return {
    user: authReducer?.user,
  };
}

const actions = {loginUser};
export default connect(mapStateToProps, actions)(TabBar);
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: width * 0.4,
    borderRadius: 10,
  },
  buttonPerfectionNext: {
    backgroundColor: colors.secondary,
    marginLeft: 15,
  },
  hideTabNavigation: {
    width: 0,
    height: 0,
    position: 'absolute',
    bottom: 0,
  },
  tabs: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
    paddingHorizontal: 4,
    justifyContent:'center',


  },
});
