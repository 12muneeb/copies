import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import CustomText from '../../../../components/CustomText';
import {styles} from './styles';
import AppBackground from '../../../../components/AppBackground';
import {appIcons} from '../../../../assets';
import Img from '../../../../components/Img';
import {FlatList} from 'react-native-gesture-handler';
import {CheckListDetail, userHomedata} from '../../../../utils/dummyData';
import CustomBackground from '../../../../components/CustomBackground';
import CustomButton from '../../../../components/CustomButton';
import {colors} from '../../../../utils';
import Matched from '../../../../container/MatchModal/Matched';
import NavService from '../../../../helpers/NavService';
export class CheckListDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showImg: true,
      isModalVisible: false,
    };
  }

  toggleImg = () => {
    this.setState(prevState => ({
      showImg: !prevState.showImg, // Toggle the value of showImg
    }));
  };
  render() {
    const {isModalVisible} = this.state;
    const handleDelete = () => {
      this.setState({isModalVisible: true});
    };
    const handleSubmit = () => {
      this.setState({isModalVisible: false});
      setTimeout(() => {
        NavService.navigate('CheckList');
      }, 850);
    };
    const handleEdit = () => {
      NavService.navigate('EditCheckList')
    }
    return (
      <AppBackground back title={'Checklist Details'}>
        <View style={styles.maincontent} activeOpacity={0.9}>
          <View>
            <CustomText text={'Lorem ipsum dolor'} style={styles.txt3} />
            <CustomText text={'Date: 06 Apr, 2023'} style={styles.txt4} />
          </View>
        </View>
        <View style={styles.maincontent} activeOpacity={0.9}>
          <View style={styles.content}>
            <CustomText text={'Description'} style={styles.txt} />
          </View>
          <View>
            <CustomText
              text={
                'Lorem ipsum dolor sit amet conse ctetur ipisic ing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. ut enim adinim veniam, quis'
              }
              style={styles.txt1}
            />
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(_item, index) => index.toString()}
          contentContainerStyle={{gap: 20}}
          data={CheckListDetail}
          renderItem={({item, index}) => (
            <View style={styles.itemcontent1}>
              <CustomText text={item.name} style={styles.txt5} />
              <TouchableOpacity onPress={this.toggleImg} activeOpacity={0.9}>
                <Img
                  local
                  src={appIcons.righticon}
                  resizeMode={'cover'}
                  style={styles.plus}
                />
              </TouchableOpacity>
            </View>
          )}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            bottom: 30,
            alignSelf: 'center',
          }}>
          <CustomButton title={'Edit'} buttonStyle={styles.btn1} onPress={handleEdit}/>
          <CustomButton
            title={'Delete'}
            buttonStyle={styles.btn2}
            onPress={handleDelete}
          />
        </View>
        <Matched
          isModalVisible={isModalVisible}
          currentfocus={this}
          title={'Delete List'}
          description={'Are you sure you \n want to delete this checklist'}
          onCross={() => this.setState({isModalVisible: false})}
          onCancel={() => this.setState({isModalVisible: false})}
          onToggle={() => this.setState({isModalVisible: false})}
          onSubmit={handleSubmit}
        />
      </AppBackground>
    );
  }
}

export default CheckListDetails;
