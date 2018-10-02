import React,{Component} from 'react';
import {View,WebView,Image,TouchableOpacity,Text,ScrollView,FlatList,} from 'react-native';

import {createDrawerNavigator} from 'react-navigation'

import FrontCon from '../../containers/frontCon';


const AppDN = createDrawerNavigator({

    frontCon: {
        screen: FrontCon,
      },
})

export default AppDN; 

