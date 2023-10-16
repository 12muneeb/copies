import React, {Component} from 'react';
import {
  FlatList,
  Platform,
  UIManager,
  View,
  TextInput,
  LayoutAnimation,
  TouchableOpacity,
  Text,
  ScrollView,
  Keyboard,
  Alert,
} from 'react-native';
// import AppBackground from '../../../components/AppBackground';
// import {Toast} from 'react-native-toast-message/lib/src/Toast';
// import {appIcons, appImages} from '../../../assets';
// import {colors} from '../../../utils';
// import Img from '../../../components/Img';
// import NavService from '../../../helpers/NavService';
// import ImagePicker from '../../../components/ImagePicker';
// import ChatComponent from '../../../components/ChatComponent';
// import MicroChat from '../../../components/MicroChat';
// import {ChatData} from '../../../utils/dummyData';
// import CustomButton from '../../../components/CustomButton';
// import {connect} from 'react-redux';
// import Shadows from '../../../helpers/Shadows';
import AppBackground from '../../../../components/AppBackground';
import Toast from 'react-native-toast-message';
import {appIcons, appImages} from '../../../../assets';
import {colors} from '../../../../utils';
import NavService from '../../../../helpers/NavService';
import CustomButton from '../../../../components/CustomButton';
import {Connect} from 'react-redux';
import Shadows from '../../../../helpers/Shadows';
import Img from '../../../../components/Img';
import ChatComponent from '../../../../components/ScreensComp/ChatComponent';
import {ChatData} from '../../../../utils/dummyData';
import styles from './styles';
import MicroChat from '../../../../components/ScreensComp/MicroChat';
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: [...ChatData],
      bio: '',
    };
  }
  sendMessage = () => {
    const {message, messages} = this.state;
    if (message.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        message: message,
        created_at: new Date(),
      };

      this.setState({
        messages: [...messages, newMessage],
        message: '',
      });
    }
  };

  render() {
    const {messages, bio} = this.state;
    const {route} = this.props.route.params;
    let messageInput = React.createRef(null);
    let message = React.createRef('');

    const sendNewMessage = async type => {
      if (message.current.length > 0) {
        const currentMessages = [...messages];
        currentMessages.push({
          message: message.current,
          createdAt: '12:00 PM',
        
          // image: appImages.user5,
        });
        this.setState({messages: currentMessages});
        message.current = '';
        messageInput.clear();
        LayoutAnimation.linear();
      } else {
        Toast.show({
          text1: 'Enter message',
          type: 'error',
          visibilityTime: 3000,
        });
      }
    };

    const {screenName} = this.props.route.params;
    return (
      <AppBackground title={'Amelia'} back>
        <View style={styles.mainCont}>
          <ScrollView
            style={{marginBottom: 80, flex: 1}}
            showsVerticalScrollIndicator={false}>
            <FlatList
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={ChatData}
              renderItem={({item}) => <ChatComponent item={item} />}
            />
            <FlatList
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={messages}
              renderItem={({item}) => <MicroChat item={item} />}
            /> 
          </ScrollView>

          <View style={[styles.flexRow, styles.messageView]}>
            <TextInput
              ref={input => {
                messageInput = input;
              }}
              style={styles.textInput}
              placeholder="Type message."
              placeholderTextColor={colors.black}
              value={message}
              onChangeText={text => {
                console.log(text);
                message.current = text;
              }}
            />
            <View style={styles.row}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  sendNewMessage('text');
                  Keyboard?.dismiss();
                }}
                style={styles.msg}>
                <Img
                  local
                  src={appIcons.send}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </AppBackground>
    );
  }
}
export default Message;
