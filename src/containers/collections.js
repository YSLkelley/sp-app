import React,{Component} from 'react';
import {View,WebView,Image,TouchableOpacity,Text,ScrollView,FlatList,Modal,TouchableHighlight} from 'react-native';

import styles from '../styles/styles';
import AppDN from '../nav/drawerNav/drawerNavi'

var menPic = '../img/manPic.jpg';

class Collection extends Component {
    constructor(props) {
        super(props)
        this.state = {
          list: []
        }
        }

     static navigationOptions = {
        header: null,
    }

    getList = () => {
        const li = [
          { key: "image1", imgLink: "imagelink" },
          { key: "image2", imgLink: "imagelink" },
          { key: "image3", imgLink: "imagelink" },
          { key: "image4", imgLink: "imagelink" },
          { key: "image5", imgLink: "imagelink" },
          { key: "image6", imgLink: "imagelink" },
          { key: "image7", imgLink: "imagelink" },
          { key: "image8", imgLink: "imagelink" },
        ]

        this.setState({
          list: li
        })
        }

        componentWillMount() {
            this.getList()
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
                <Text style={styles.chh}>Collections</Text>
            </View>

            <View style={styles.cv1}>
            <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('sBcontainer')}
            >
            <Image 
               style={styles.chImg2}
               source={require('../img/icons/shop.png')}
                            />
             </TouchableOpacity>
            </View>
            </View>


            <View style={styles.cTop}>

            </View>



<View style={styles.csvContainer} >
<FlatList
      data={this.state.list}
      renderItem={({ item }) => <View style={styles.rli}>
      <View style={styles.rlii}><Text>{item.key}</Text></View>
      
      <View style={styles.rlii}><Text>{item.key}</Text></View>
      </View>}
    />



    </View>

    
            </View>
        )
    }
}

export default Collection;