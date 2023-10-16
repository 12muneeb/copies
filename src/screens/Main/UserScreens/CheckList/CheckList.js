import {Text, View, FlatList, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {styles} from './styles';
import AppBackground from '../../../../components/AppBackground';
import {colors} from '../../../../utils';
import CustomText from '../../../../components/CustomText';
import {CheckLists} from '../../../../utils/dummyData';
import CustomButton from '../../../../components/CustomButton';
import NavService from '../../../../helpers/NavService';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');
export class CheckList extends Component {
  render() {
    const handleCheck = () => {
        NavService.navigate('CreateCheckList')
    }
    return (
      <AppBackground title={'Checklist'} back>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: width * 0.2,
          }}
          keyExtractor={(item, index) => index.toString()}
          data={CheckLists}
          scrollEnabled={true}
          renderItem={({item, index}) => (
            <TouchableOpacity style={styles.maincontent} activeOpacity={0.9} onPress={() => NavService.navigate('CheckListDetails')} >
              <View style={styles.content}>
                <CustomText text={item.name} style={styles.txt} />
                <CustomText text={item.date} style={styles.txt} />
              </View>
              <View>
                <CustomText text={item.desc} style={styles.txt1} />
              </View>
            </TouchableOpacity>
          )}
        />
        <CustomButton title={'Create Checklist'} buttonStyle={styles.btn} onPress={handleCheck} />
      </AppBackground>
    );
  }
}

export default CheckList;
