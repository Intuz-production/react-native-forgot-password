import ForgotPasswordController from "./ForgotPasswordController";
export default ForgotPasswordController

//
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';

// import ForgotPasswordController from './app/component/ForgotPasswordController';
// import Colors from './app/config/Colors';
// import Images from './app/config/Images';

// export default class App extends Component {
  
//     constructor(props) {
//         super(props);
//         this.state = {
//             rateModalVisible: false,
//             forgotPasswordModalVisible: false,
//             otherParamsToSend: 1,
//         };
//     }

//     btnForgotPassword(){
//         this.setState({forgotPasswordModalVisible: true});
//     };

//     callbackAfterForgotPassword(success, otherValue) {
//         this.setState({forgotPasswordModalVisible: false});
//         console.log("success >> "+success+" otherValue >> "+otherValue);
//     }

//   render() {
//     var otherParamsToSend;
//     var forgotPasswordModel = <Modal transparent={true} visible={this.state.forgotPasswordModalVisible} onRequestClose={() => {
//         this.setState({forgotPasswordModalVisible: false});
//     }}>
//         <ForgotPasswordController callbackAfterForgotPassword={this.callbackAfterForgotPassword.bind(this)} otherParamsToSend={this.state.otherParamsToSend}/>
//     </Modal>

//     return (
//       <View style={{margin: 10, backgroundColor:'blue' }}>
//         <TouchableOpacity onPress={this.btnForgotPassword.bind(this)}>
//           <Text style={{fontSize: 14, backgroundColor:'white', color:'black'}}>
//            Open Forgot Password popup
//           </Text>
//         </TouchableOpacity>
//         {forgotPasswordModel}
//       </View>
//     );
//   }
// }
