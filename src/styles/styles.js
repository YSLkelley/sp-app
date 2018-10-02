import React,{Component} from 'react';
import {StyleSheet,Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create ({
    fcMainContainer: {
        width: width,
        height: height,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    vidStyle: {
        width: 100 + '%',
        height:  80 + '%',
        },
    fcBottom: {
        opacity: .5,

        borderTopWidth: 1,
        borderTopColor: '#fff',

        width: 80 + '%',
        height:  10 + '%',
    },
    fcBt: {


        color: '#fff',
    
        fontSize: 16
    },
    fcB: {
        width: 100 + '%',
        height:  20 + '%',

        alignItems: 'center',
        justifyContent: 'center'
    },
    cc: {
        width: width,
        height: height,

    },
    cheader: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100 + '%',
        height: 13 + '%',
        flexDirection: 'row'
    },
    cTop: {
        justifyContent: 'center',
        width: 100 + '%',
        height: 15 + '%',
        backgroundColor: '#c9cacc',
    },
    smv: {
        backgroundColor: 'pink',
        width: 45 + '%',
        height: 90 + '%',
        // marginLeft: 5 + '%'
    },
    swmv: {
        backgroundColor: 'pink',
        width: 45 + '%',
        height: 90 + '%',
        marginLeft: 5 + '%'

    },
    mlv: {
        flex: 1,
        marginTop: 1,
        width: 100 + '%',
        height: 20 + '%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    ccat: {
        paddingLeft: 3 +'%',
        paddingLeft: 10+'%',
        flexDirection: 'row',
        marginTop: 10,
        width: 100 + '%',
        height:  5 + '%',
        backgroundColor: '#dee0e2'
    },
    cva: {

        marginLeft: 58+'%',
    },
    csvContainer: {
       

        width: 100 + '%',
        height: 1000,

    },
    rli: {
        flexDirection: 'row',
        width: 100 + '%',
        height: 200 + '%',

    },
    rlii: {
        borderWidth: 2,
        borderColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderLeftColor: 'black',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRightColor: 'black',
        width: 50 + '%',
        height: 100 + '%',
        alignItems: 'center',
    },
    chImg: {
        marginRight: 40,
    },
    chImg2: {
        marginLeft: 40,
    },
    chh: {

        fontSize: 20,
    },
    cv1: {
        height: 100 + '%',
        width: 33.3 + '%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mvidStyle: {
        width: 100 + '%',
        height: 100 + '%'
    },
    mbCon: {
        marginTop: 49 + "%",
        width: 100 + '%',
        height: 250,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mbt: {
        paddingTop: 50,
        color: '#fff',
        fontSize: 36
    },
    mbTop: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        // backgroundColor: '',
        width: 100 + '%',
        height: 10 + '%',
        justifyContent: 'center',
    },
    mobTT: {
        
        paddingLeft: 30,
        fontSize: 30,
        color: '#fff'
    },
    container: {
        backgroundColor: 'blue'
    }
});

export default styles;