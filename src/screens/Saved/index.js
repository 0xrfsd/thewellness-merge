import React from 'react';

import {View, ScrollView, Text, SafeAreaView, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Img from '../../../assets/images/casa.jpg';

const SavedScreen = () => {
    return(
        <ScrollView style={{ flex: 1, backgroundColor: '#333', paddingLeft: 20, paddingRight: 20 }}>
            <View style={{ height: 100 }}>
                <Text style={{ textAlign: 'left', marginTop: 70, fontWeight: 'bold', fontSize: 26, color: '#fff' }}>Seus Favoritos</Text>
            </View>
            <TouchableOpacity onPress={() => alert('House')}>
            <Image source={Img} style={{ height: 200, width: '100%', borderRadius: 5, marginTop: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('House')}>
            <Image source={Img} style={{ height: 200, width: '100%', borderRadius: 5, marginTop: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('House')}>
            <Image source={Img} style={{ height: 200, width: '100%', borderRadius: 5, marginTop: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('House')}>
            <Image source={Img} style={{ height: 200, width: '100%', borderRadius: 5, marginTop: 10 }} />
            </TouchableOpacity>
            <View style={{ height: 20 }}></View>
    </ScrollView>
    )
}

export default SavedScreen;