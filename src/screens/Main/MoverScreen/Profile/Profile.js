import React, {useCallback, Component} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
// import AppBackground from '../../../components/AppBackground';
// import NavService from '../../../helpers/NavService';
// import {homeData} from '../../../utils/dummyData';
// import Card from '../../../components/Card';
import AppBackground from '../../../../components/AppBackground';
import NavService from '../../../../helpers/NavService';
import {ProfileData, VehicleData, homeData} from '../../../../utils/dummyData';
import Card from '../../../../components/Card';
import Img from '../../../../components/Img';
import {appIcons, appImages} from '../../../../assets';
import CustomText from '../../../../components/CustomText';
import CustomItem from '../../../../components/ScreensComp/CustomItem';
import {colors} from '../../../../utils';
import CustomDetail from '../../../../components/ScreensComp/CustomDetail';
import {ScrollView} from 'react-native-gesture-handler';
import Matched from '../../../../container/MatchModal/Matched';
// import Matched from '../../../../container/MatchModal/Matched';
import styles from './styles';
const {width, height} = Dimensions.get('screen');

export class Profile extends Component {
  state = {
    searchText: '',
    isModalVisible: false,
    title: '',
    description: '',
    blockInfo: {
      isModalVisible: false,
      info: null,
    },
  };
  handleDelete = () => {
    this.setState({isModalVisible: true});
    // NavService.navigate('EditVehicle')
  };
  render() {
    const {isModalVisible, blockInfo} = this.state;
    const handleEdit = () => {
      NavService.navigate('EditVehicle');
    };

    return (
      <AppBackground menu title={'My Profile'} edit marginHorizontal={false}>
        <View>
          <View style={styles.container}>
            <Img
              local
              src={appImages.profile}
              resizeMode={'contain'}
              style={styles.img}
            />
            <CustomText text={'Robert Fox'} style={styles.txt} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{}}>
                <View style={styles.maincontainer}>
                  <CustomText text={'Bio'} style={styles.txt} />
                  <CustomText
                    style={styles.bio}
                    text={
                      'Lorem ipsum dolor sit amet conse ctetur ipisic ing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim adinim veniam quis nostrud exercitation ullamco borisnisi ut aliquip ex ea commodo consequat'
                    }
                  />
                  <FlatList
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={ProfileData}
                    scrollEnabled={true}
                    renderItem={({item}) => (
                      <CustomItem
                        item={item}
                        rate
                        timing
                        containerStyle={styles.itemstyle}
                      />
                    )}
                  />
                </View>
                <View>
                  <FlatList
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={VehicleData}
                    scrollEnabled={false}
                    renderItem={({item}) => (
                      <CustomDetail
                        item={item}
                        bin
                        edit
                        handleEdit={handleEdit}
                        handleDelete={this.handleDelete}
                      />
                    )}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <Matched
          isModalVisible={isModalVisible}
          currentfocus={this}
          title={'Delete Vehicle'}
          description={'Are you sure you \n want to delete this vehicle?'}
          btncolor
          onCross={() => this.setState({isModalVisible: false})}
          onCancel={() => this.setState({isModalVisible: false})}
          onToggle={() => this.setState({isModalVisible: false})}
          onSubmit={() => this.setState({isModalVisible: false})}
        />
      </AppBackground>
    );
  }
}

export default Profile;
