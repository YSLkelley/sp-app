import React,{Component} from 'react';
import {View,WebView,Image,TouchableOpacity,Text,ScrollView} from 'react-native';

import { Video } from 'expo';

import styles from '../styles/styles';

var mvid = "https://player.vimeo.com/external/220260396.hd.mp4?s=6f745dd07ad3f3e9a614acfb7e583b44aa3b4523&profile_id=172&oauth2_token_id=57447761&download=1";

class MenuCon extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style={styles.cc}>
                    <Video
                    source={{ uri:  mvid}}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={styles.mvidStyle}
                    />

                    <View style={styles.mbTop}>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    >
                    <Text style={styles.mobTT}>X</Text>
                    </TouchableOpacity>
                    </View>

                    <View  style={styles.mbCon}>

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('collection')}>
                        <Text  style={styles.mbt}>SHOP ALL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Text  style={styles.mbt}>ARCHIVE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Text  style={styles.mbt}>ABOUT</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Text  style={styles.mbt}>MORE</Text>
                        </TouchableOpacity>
                    </View>

            </View>
        )
    }
}

export default MenuCon;