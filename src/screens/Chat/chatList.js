import React from 'react';

import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Avatar from '../../../assets/images/avatar.jpeg';

const chatList = () => {
    return(
        <View style={{ flex: 1, paddingTop: 100, backgroundColor: '#333'}}>
            <View style={{ height: 50, width: '100%', backgroundColor: '#333' }}></View>
            <TouchableOpacity style={{ justifyContent: 'center', height: 70, borderRadius: 5, width: '100%', backgroundColor: '#fff' }}>
            <Image source={Avatar} style={{ marginTop: 70, marginLeft: 10, height: 50, width: 50, borderRadius: 25 }} />
                <View style={{ marginTop: 70, height: 2, backgroundColor: '#333', width: '100%' }}></View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 5, justifyContent: 'center', height: 70, borderRadius: 5, width: '100%', backgroundColor: '#fff' }}>
            <Image source={Avatar} style={{ marginTop: 70, marginLeft: 10, height: 50, width: 50, borderRadius: 25 }} />
                <View style={{ marginTop: 70, height: 2, backgroundColor: '#333', width: '100%' }}></View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 5, justifyContent: 'center', height: 70, borderRadius: 5, width: '100%', backgroundColor: '#fff' }}>
            <Image source={Avatar} style={{ marginTop: 70, marginLeft: 10, height: 50, width: 50, borderRadius: 25 }} />
                <View style={{ marginTop: 70, height: 2, backgroundColor: '#333', width: '100%' }}></View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 5, justifyContent: 'center', height: 70, borderRadius: 5, width: '100%', backgroundColor: '#fff' }}>
            <Image source={Avatar} style={{ marginTop: 70, marginLeft: 10, height: 50, width: 50, borderRadius: 25 }} />
                <View style={{ marginTop: 70, height: 2, backgroundColor: '#333', width: '100%' }}></View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 5, justifyContent: 'center', height: 70, borderRadius: 5, width: '100%', backgroundColor: '#fff' }}>
            <Image source={Avatar} style={{ marginTop: 70, marginLeft: 10, height: 50, width: 50, borderRadius: 25 }} />
                <View style={{ marginTop: 70, height: 2, backgroundColor: '#333', width: '100%' }}></View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 5, justifyContent: 'center', height: 70, borderRadius: 5, width: '100%', backgroundColor: '#fff' }}>
            <Image source={Avatar} style={{ marginTop: 70, marginLeft: 10, height: 50, width: 50, borderRadius: 25 }} />
                <View style={{ marginTop: 70, height: 2, backgroundColor: '#333', width: '100%' }}></View>
            </TouchableOpacity>
    </View>
    )
}

export default chatList;