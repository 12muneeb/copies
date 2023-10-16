// import {Text, View} from 'react-native';
// import React, {Component} from 'react';
// import {styles} from './styles';
// import AppBackground from '../../../../components/AppBackground';
// import CustomTextInput from '../../../../components/CustomTextInput';
// import {colors} from '../../../../utils';
// import CustomText from '../../../../components/CustomText';
// import {appIcons} from '../../../../assets';
// import Img from '../../../../components/Img';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// export class CreateCheckList extends Component {
//   state = {
//     bio: '',
//     title: '',
//   };
//   render() {
//     const {bio, title} = this.state;
//     return (
//       <AppBackground back title={'Create Checklist'}>
//
//         <View >
//           <CustomText text="List" style={styles.txt} />
//           <TouchableOpacity style={styles.itemcontent} activeOpacity={0.9}>
//             <CustomText text="Add Item" style={styles.txt} />
//             <Img
//               local
//               src={appIcons.creditplus}
//               resizeMode={'contain'}
//               style={styles.plus}
//             />
//           </TouchableOpacity>
//           <View style={styles.itemcontent1}>
//           <CustomText text="Loreum Ipsum" style={styles.txt} />
//             <Img
//               local
//               src={appIcons.delete}
//               resizeMode={'contain'}
//               style={styles.plus}
//             />
//           </View>
//         </View>
//       </AppBackground>
//     );
//   }
// }

// export default CreateCheckList;
import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import AppBackground from '../../../../components/AppBackground';
import {colors} from '../../../../utils';
import CustomText from '../../../../components/CustomText';
import {appIcons} from '../../../../assets';
import Img from '../../../../components/Img';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomButton from '../../../../components/CustomButton';
import NavService from '../../../../helpers/NavService';
import CheckListDetails from '../CheckListDetails/CheckListDetails';
import {CheckListDetail} from '../../../../utils/dummyData';
const {height} = Dimensions.get('screen');
export class EditCheckList extends Component {
  state = {
    bio: 'loreum Impsum dolor is dummy text is for testing',
    name: 'Loreum Ipsum dolor',
    itemList: [],
    isAddingItem: false,
  };

  addItem = () => {
    const {title, itemList} = this.state;
    if (title) {
      itemList.push({title});
      this.setState({itemList, title: '', isAddingItem: false});
      Keyboard.dismiss();
    }
  };

  removeItem = index => {
    const {itemList} = this.state;
    itemList.splice(index, 1);
    this.setState({itemList});
  };

  render() {
    const {bio, title, itemList, isAddingItem, name} = this.state;

    return (
      <AppBackground back title={'Edit Checklist'}>
        <View style={{height: height / 1.2}}>
          <ScrollView >
            <View style={{paddingBottom:100}}>
              <CustomTextInput
                maxLength={35}
                placeholderColor={colors.lightgray}
                placeholder={'Title'}
                value={name}
                keyboardType={'default'}
                onChangeText={value => this.setState({name: value})}
                containerStyle={styles.titleinput}
              />
              <CustomTextInput
                textAlignVertical="top"
                maxLength={200}
                multiline
                placeholder={'Description'}
                value={bio}
                placeholderColor={colors.lightgray}
                isBorderShow
                keyboardType={'default'}
                onChangeText={value => this.setState({bio: value})}
                textInputStyles={{height: 100}}
                containerStyle={styles.bioinpuut}
              />
              <CustomTextInput
                maxLength={35}
                placeholderColor={colors.lightgray}
                placeholder={'Add Item'}
                value={title}
                keyboardType={'default'}
                onChangeText={value => this.setState({title: value})}
                containerStyle={[
                  styles.additem,
                  {display: isAddingItem ? 'flex' : 'none'},
                ]}
              />
              {isAddingItem ? null : (
                <View style={styles.listis}>
                  <CustomText text="List" style={styles.txt} />
                </View>
              )}
              <TouchableOpacity
                style={styles.itemcontent}
                activeOpacity={0.9}
                onPress={() => this.setState({isAddingItem: true})}>
                {isAddingItem ? (
                  <TouchableOpacity
                    onPress={this.addItem}
                    style={styles.itemcontext}>
                    <CustomText text="Send" style={styles.txt} />
                    <Img
                      local
                      src={appIcons.send}
                      resizeMode={'contain'}
                      style={styles.plus}
                    />
                  </TouchableOpacity>
                ) : (
                  <>
                    <CustomText text="Add Item" style={styles.txt} />
                    <Img
                      local
                      src={appIcons.creditplus}
                      resizeMode={'contain'}
                      style={styles.plus}
                    />
                  </>
                )}
              </TouchableOpacity>

              {itemList.map((item, index) => (
                <View key={index} style={styles.itemcontent1}>
                  <CustomText text={item.title} style={styles.txt} />
                  <TouchableOpacity onPress={() => this.removeItem(index)}>
                    <Img
                      local
                      src={appIcons.delete}
                      resizeMode={'contain'}
                      style={styles.plus}
                    />
                  </TouchableOpacity>
                </View>
              ))}
              <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(_item, index) => index.toString()}
                data={CheckListDetail}
                renderItem={({item, index}) => (
                  <View style={styles.itemcontent1}>
                    <CustomText text={item.name} style={styles.txt} />
                    <TouchableOpacity
                      onPress={this.toggleImg}
                      activeOpacity={0.9}>
                      <Img
                        local
                        src={appIcons.delete}
                        resizeMode={'cover'}
                        style={styles.plus}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </ScrollView>
          <View style={styles.btmbtn}>
            <CustomButton title={'Save'} onPress={() => NavService.goBack()} />
          </View>
        </View>
      </AppBackground>
    );
  }
}

export default EditCheckList;
