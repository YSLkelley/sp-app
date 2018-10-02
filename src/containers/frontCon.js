import React,{Component} from 'react';
import {View,WebView,Image,TouchableOpacity,Text,ScrollView} from 'react-native';

import { Video } from 'expo';

import styles from '../styles/styles';

var fcVid = "https://player.vimeo.com/external/222147555.hd.mp4?s=2993c2ad07ccaf14aaecf91efe708461d588df0e&amp;profile_id=119&amp;oauth2_token_id=57447761&amp;download=1"

class FrontCon extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        return(
    <View style={styles.fcMainContainer}>

    <Video
  source={{ uri:  fcVid}}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={styles.vidStyle}
/>
<View style={styles.fcB}>
<TouchableOpacity
 style={styles.fcBottom}
onPress={()=> this.props.navigation.navigate('collection')}
/>

<Text style={styles.fcBt}>V i e w  C o l l e c t i o n</Text>

<TouchableOpacity/>
</View>


    </View>
        )
    }


}

export default FrontCon;