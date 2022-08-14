import React, {useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {

  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import homewall from '../../assets/wall.jpg';

import { HP, WP } from '../../Components/Constant/index';


const LoginPage = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.mainView}>

      <View style={styles.subView}>
        <Text style={styles.txtView1}>
          {'PREMIUM UPGRADE FOR ALL FEATURES'}
        </Text>

        <Text style={styles.txtView2}>
          {'Get access to the Sun Dial Map Display'}
        </Text>

        <Text style={styles.txtView2}>
          {'Gain access to the Team Chat Feature'}
        </Text>

        <Text style={styles.txtView2}>
          {'Get all future updates included in monthly premium!'}
        </Text>

        <TouchableOpacity onPress={navigation.navigate('CardHolder')}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonTxt}>
            {'GO TO PREMIUM UPGRADE'}
          </Text>
        </View>
        </TouchableOpacity>
      
      </View>
    </View>

  )}



  const styles = StyleSheet.create({
    mainView: {flex: 1, backgroundColor:'black', opacity:0.7},
    subView: {flex:1, marginVertical:HP('30'), paddingHorizontal:WP('4')},
    txtView1: {color:'#ffff00', fontSize:18, paddingBottom:HP('1'), fontWeight:'bold'},
    txtView2: {color:'white', paddingBottom:HP('0.5')},
    buttonView: {borderRadius:30, padding:20, marginTop:HP('2'), alignItems:'center', backgroundColor:'#ffd700'},
    buttonTxt: {color:'black', fontWeight:'bold', fontSize:16}
  
  })


export default LoginPage;


