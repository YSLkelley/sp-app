import React, { Component } from 'react';
import { View,Text,StyleSheet,} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import FrontCon from '../containers/frontCon';
import Collection from '../containers/collections';
import SBcon from '../containers/shopBagCon';
import MenuCon from '../containers/menuContainer';

const AppStackNav = createStackNavigator ({
    frontCon: FrontCon,
    collection: Collection,
    sBcontainer: SBcon,
    menuContiner: MenuCon
})


export default AppStackNav;