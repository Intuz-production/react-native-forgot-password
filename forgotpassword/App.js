/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';

import ForgotPasswordController from './app/component/ForgotPasswordController';

export default class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            forgotPasswordModalVisible: false,
            otherParamsToSend: 1,
        };
    }

    btnForgotPassword(){
        this.setState({forgotPasswordModalVisible: true});
    };

    callbackAfterForgotPassword(success, otherValue) {
        this.setState({forgotPasswordModalVisible: false});
        console.log("success >> "+success+" otherValue >> "+otherValue);
    }

  render() {
    var otherParamsToSend;
    var forgotPasswordModel = <Modal transparent={true} visible={this.state.forgotPasswordModalVisible} onRequestClose={() => {
        this.setState({forgotPasswordModalVisible: false});
    }}>
        <ForgotPasswordController callbackAfterForgotPassword={this.callbackAfterForgotPassword.bind(this)} otherParamsToSend={this.state.otherParamsToSend}/>
    </Modal>

    return (
        <View style={{flex:1,backgroundColor:'#f3f3f3'}}>
         <Image source={require('./Images/login.png')} style = {{width: '100%',height: '100%'}}/>
        <TouchableOpacity onPress={this.btnForgotPassword.bind(this)} style={{position:'absolute'}} >
         <Text style={{fontSize: 12, marginTop: 354, marginLeft: 225, marginRight: 20, color:'#6A6A6A'}}>
          Forgot Password
           </Text>
         </TouchableOpacity>
       
         {forgotPasswordModel}
       </View>
    
    );
  }
}

{/* <View style={{margin: 10}}>
        <TouchableOpacity onPress={this.btnForgotPassword.bind(this)}>
          <Text style={{fontSize: 14, backgroundColor:'white', color:'black'}}>
           Open Forgot Password popup
          </Text>
        </TouchableOpacity>
        {forgotPasswordModel}
      </View> 
    
     <TouchableOpacity onPress={this.setState({forgotPasswordModalVisible: true})} style={{position:'absolute'}} >
         <Text style={{fontSize: 14, marginTop: 205, marginLeft: 100, marginRight: 30, color:'#6A6A6A'}}>
          Forgot Password
           </Text>
         </TouchableOpacity>
    
    */}