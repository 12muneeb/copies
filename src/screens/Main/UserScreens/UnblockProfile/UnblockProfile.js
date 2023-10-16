import {Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {FlatList} from 'react-native';
import {Blockdata} from '../../../../utils/dummyData';
import Listed from '../../../../components/ScreensComp/Listed';
import Matched from '../../../../container/MatchModal/Matched';

export class UnblockProfile extends Component {
  state = {
    isModalVisible: false,
  };
  render() {
    const {isModalVisible} = this.state;
    return (
      <AppBackground back title={'Block Profiles'}>
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={Blockdata}
          renderItem={({item}) => (
            <Listed
              item={item}
              unblock
              onSubmit={() => this.setState({isModalVisible: true})}
            />
          )}
        />
        <Matched
          isModalVisible={isModalVisible}
          currentfocus={this}
          title={'Unblock'}
          description={'Are you sure you \n want to unblock this mover'}
          onCross={() => this.setState({isModalVisible: false})}
          onCancel={() => this.setState({isModalVisible: false})}
          onToggle={() => this.setState({isModalVisible: false})}
          onSubmit={() => this.setState({isModalVisible: false})}
        />
      </AppBackground>
    );
  }
}

export default UnblockProfile;
