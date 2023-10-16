import React, {Component, createRef} from 'react';
import {Text, TouchableOpacity, View, ScrollView, FlatList} from 'react-native';
import AppBackground from '../../components/AppBackground';
import ToggleSwitch from 'toggle-switch-react-native';
import CustomButton from '../../components/CustomButton';
import {logoutUser} from '../../redux/actions/authAction';
import {Tipsdata} from '../../utils/dummyData';
import Switched from '../../components/Switched';
import {connect} from 'react-redux';
import {styles} from './styles';
import TipsClick from '../../components/ScreensComp/TipsClick';
import ActionSheetComponent from '../../components/ActionSheetComponent';
import {colors} from '../../utils';
import NavService from '../../helpers/NavService';
// import DropDownPicker from '../../components/DropDownPicker';
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      set: false,
      check: false,
      isModalVisible: false,
      isModalVisibleLogout: false,
      matchProfile: false,
      isMode: false,
      isNoti: false,
      languageData: ['English', 'Spanish'],
      language: '',
    };
    this.actionSheetStateRef = createRef();
  }
  logoutUser = () => {
    logoutUser();
  };
  render() {
    const {
      set,
      data,
      check,
      isModalVisible,
      isModalVisibleLogout,
      matchProfile,
      isMode,
      isNoti,
      language,
      languageData,
    } = this.state;

    const handleMode = () => {
      this.setState({isMode: !isMode});
    };

    return (
      <AppBackground back title={'Settings'} marginHorizontal={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Switched
            title={'Notification'}
            isOn={isNoti}
            onToggle={() => this.setState({isNoti: !isNoti})}
          />
          <Switched
            title={` ${isMode ? 'Active' : 'Inactive'}`}
            isOn={isMode}
            onToggle={handleMode}
          />
             {/* <DropDownPicker
              title={'Country'}
              value={Select_Country}
              data={this.Country}
              placeHolderColor={colors.white}
              containerStyle={styles.dropdown}
              onSelected={(key, value) =>
                this.setState({Select_Country: value})
              }
            /> */}
          {/* <CustomButton
            nextBtn
            nextStyle={{tintColor: colors.red}}
            title={language ? language : 'Select Language'}
            buttonStyle={styles.gender}
            textStyle={language ? styles.gendercolorafter : styles.gendercolor}
            onPress={() => this.actionSheetStateRef.current.show()}
          />
          <ActionSheetComponent
            ref={this.actionSheetStateRef}
            title="Select Language"
            dataset={languageData}
            onPress={item => {
              this.setState({
                language: item,
              });
            }}
          /> */}
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={Tipsdata}
            renderItem={({item}) => <TipsClick item={item} />}
          />
        </ScrollView>
        <CustomButton title={'Logout'} buttonStyle={styles.btn} />
        <CustomButton title={'Delete Account'} buttonStyle={styles.btn} />
      </AppBackground>
    );
  }
}
function mapStateToProps({authReducer}) {
  return {
    user: authReducer?.user,
  };
}

const actions = {logoutUser};
export default connect(mapStateToProps, actions)(Settings);
