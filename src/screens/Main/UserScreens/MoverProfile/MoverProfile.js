import {Dimensions, FlatList, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import {styles} from './styles';
import AppBackground from '../../../../components/AppBackground';
import Img from '../../../../components/Img';
import {appIcons, appImages} from '../../../../assets';
import CustomText from '../../../../components/CustomText';
import CustomButton from '../../../../components/CustomButton';
import NavService from '../../../../helpers/NavService';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  CardDetails,
  VehicleData,
  VehicleDatas,
} from '../../../../utils/dummyData';
import CustomDetail from '../../../../components/ScreensComp/CustomDetail';
import CustomData from '../../../../components/ScreensComp/CustomData';
import BottomModal from '../../../../container/BottomModal/BottomModal';
import Matched from '../../../../container/MatchModal/Matched';
import Unsubscribe from '../../../../container/Unsubscribe/Unsubscribe';
const {width, height} = Dimensions.get('screen');
export class MoverProfile extends Component {
  state = {
    matchProfile: false,
    isModalVisible: false,
    isModalVisible1:false
  };
  render() {
    const {matchProfile, isModalVisible,isModalVisible1} = this.state;
    const handleReport = () => {
      this.setState({matchProfile: false});
      setTimeout(() => {
        this.setState({isModalVisible1: true});
      }, 850);
    };
    const handleBlock = () => {
      this.setState({matchProfile: false});
      setTimeout(() => {
        this.setState({isModalVisible: true});
      }, 850);
    };
    const handleReview = () => {
      NavService.navigate('RatingReview');
    };
    const handleNow = () => {
      NavService.navigate('MoverReservation');
    };
    return (
      <AppBackground
        back
        title={'Movers profile'}
        popup
        handlePopup={() => this.setState({matchProfile: true})}>
        <View>
          <Img
            local
            src={appImages.profile}
            resizeMode={'contain'}
            style={styles.img}
          />
          <CustomText text={'Robert Fox'} style={styles.txt} />
          <View style={styles.title}>
            <TouchableOpacity activeOpacity={0.7} onPress={handleReview}>
              <CustomText text="Rating & Reviews" style={styles.heading} />
            </TouchableOpacity>
            <Img
              local
              src={appIcons.star}
              resizeMode={'contain'}
              style={styles.img2}
            />
            <CustomText text="4.5" style={styles.txt3} />
          </View>
          <CustomButton
            title="Message"
            onPress={() => NavService.navigate('Message')}
            buttonStyle={styles.btn}
          />
          <ScrollView style={{marginBottom: 250, marginTop: 20}}>
            <View style={styles.maincontainer}>
              <CustomText text={'Description'} style={styles.txt4} />
              <CustomText
                style={styles.bio}
                text={
                  'Lorem ipsum dolor sit amet conse ctetur ipisic ing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim adinim veniam quis nostrud exercitation ullamco borisnisi ut aliquip ex ea commodo consequat'
                }
              />
            </View>
            <View style={styles.maincontainer2}>
              <CustomText text={'Distance Charges'} style={styles.txt5} />
              <View style={styles.header2}>
                <Img
                  local
                  src={appIcons.riyal}
                  resizeMode={'contain'}
                  style={styles.riyal}
                />
                <CustomText text={'20.00'} style={styles.cashtxt} />
              </View>
            </View>
            <FlatList
              bounces={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              style={{marginHorizontal: 10}}
              data={CardDetails}
              scrollEnabled={false}
              renderItem={({item}) => <CustomData item={item} cash bottomimg />}
            />
            <FlatList
              bounces={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              style={{marginHorizontal: 10}}
              data={VehicleDatas}
              scrollEnabled={false}
              renderItem={({item}) => (
                <CustomDetail item={item} btn handleNow={handleNow} />
              )}
            />
          </ScrollView>
        </View>
        <BottomModal
          isModalVisible={matchProfile}
          currentfocus={this}
          onToggle={() => this.setState({matchProfile: false})}
          onCross={() => this.setState({matchProfile: false})}
          onSubmit={() => this.setState({matchProfile: false})}
          handleBlock={handleBlock}
          handleReport={handleReport}
        />
        <Matched
          isModalVisible={isModalVisible}
          currentfocus={this}
          title={'Block Mover'}
          description={'Are you sure you \n want to unblock this person'}
          onCross={() => this.setState({isModalVisible: false})}
          onCancel={() => this.setState({isModalVisible: false})}
          onToggle={() => this.setState({isModalVisible: false})}
          onSubmit={() => this.setState({isModalVisible: false})}
        />
          <Unsubscribe
          desc={'Description'}
          isModalVisible={isModalVisible1}
          title={'Report Mover'}
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

export default MoverProfile;
