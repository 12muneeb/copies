import {Dimensions, FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import Img from '../../../../components/Img';
import {appImages} from '../../../../assets';
import {styles} from './styles';
import CustomText from '../../../../components/CustomText';
import CustomItem from '../../../../components/ScreensComp/CustomItem';
import {ProfileData, UserProfileData} from '../../../../utils/dummyData';
import {colors} from '../../../../utils';
import Shadows from '../../../../helpers/Shadows';
import CustomButton from '../../../../components/CustomButton';
import Matched from '../../../../container/MatchModal/Matched';
import Unsubscribe from '../../../../container/Unsubscribe/Unsubscribe';
const {height} = Dimensions.get('screen');
export class UserProfile extends Component {
  state = {
    isModalVisible: false,
    isModalVisible1: false,
    bio: '',
  };

  render() {
    const {isModalVisible, isModalVisible1, bio} = this.state;
    return (
      <AppBackground back title={'User Profile'}>
        <View>
          <Img
            local
            src={appImages.profile}
            resizeMode={'contain'}
            style={styles.img}
          />
          <CustomText text={'Robert Fox'} style={styles.txt} />
          <View style={styles.flatcard}>
            <FlatList
              bounces={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={UserProfileData}
              scrollEnabled={true}
              ItemSeparatorComponent={() => (
                <View
                  style={{backgroundColor: colors.lightgray, height: 0.34}}
                />
              )}
              renderItem={({item}) => <CustomItem item={item} rate timing />}
            />
          </View>
          <View style={{alignSelf: 'center'}}>
            <CustomButton
              title="Report user"
              onPress={() => this.setState({isModalVisible1: true})}
            />
            <CustomButton
              title="Block User"
              onPress={() => this.setState({isModalVisible: true})}
              buttonStyle={styles.blockbtn}
            />
          </View>
        </View>
        <Matched
          isModalVisible={isModalVisible}
          currentfocus={this}
          title={'Block User'}
          description={'Are you sure you  \n want to unblock this person'}
          onCross={() => this.setState({isModalVisible: false})}
          onCancel={() => this.setState({isModalVisible: false})}
          onToggle={() => this.setState({isModalVisible: false})}
          onSubmit={() => this.setState({isModalVisible: false})}
        />
        <Unsubscribe
          bio={bio}
          onChangeText={value => this?.setState({bio: value})}
          desc={'Description'}
          isModalVisible={isModalVisible1}
          title={'Report User'}
          currentfocus={this}
          onToggle={() => this.setState({isModalVisible1: false})}
          oncrossSubmit={() => this.setState({isModalVisible1: false})}
          onSubmit={() => {
            this.setState({isModalVisible1: false});
          }}
        />
      </AppBackground>
    );
  }
}

export default UserProfile;
