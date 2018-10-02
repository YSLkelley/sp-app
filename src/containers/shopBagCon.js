import React,{Component} from 'react';
import {View,WebView,Image,TouchableOpacity,Text,ScrollView,FlatList,Modal,TouchableHighlight} from 'react-native';

import styles from '../styles/styles';
import AppDN from '../nav/drawerNav/drawerNavi'

var menPic = '../img/manPic.jpg';

class SBcon extends Component {
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    static navigationOptions = {
        header: null,
    }
    render(){
        return(
            <View style={styles.cc}>
            <View style={styles.cheader}>
            <View style={styles.cv1}>
            <TouchableOpacity
                onPress={()=> this.props.navigation.navigate('menuContiner')}
            >
            <Image
            style={styles.chImg}
            source={require('../img/icons/menu.png')}/>
            </TouchableOpacity>
            </View>

                        <View style={styles.cv1}>
                <Text style={styles.chh}>B A G</Text>
            </View>

            <View style={styles.cv1}>
            <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('sBcontainer')}
            >
            <Image 
               style={styles.chImg2}
                                           />
             </TouchableOpacity>
            </View>
            </View>
            </View>
        )
    }
}
export default SBcon;
