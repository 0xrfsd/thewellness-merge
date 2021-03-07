import React from "react";
import { ScrollView, Image, ImageBackground, TouchableOpacity, TextInput, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LoginImage from '../../../assets/images/bh.jpeg'

const RegisterScreen = ({ }) => {

	return (
		<View style={{ flex: 1, backgroundColor: '#FFFAF5' }}>
			{/* <Image source={LoginImage} style={{ height: '100%', width: '100%', resizeMode: 'cover' }}/> */}
			<View style={{ flex: 1, paddingLeft: 20, paddingRight: 20, justifyContent: 'center' }}>
			<Text style={{ textAlign: 'left', fontSize: 36, fontWeight: 'bold', marginTop: '-25%' }}>Register</Text>
			<TextInput enablesReturnKeyAutomatically={false} placeholder="Email or User" style={{ height: 50, width: '100%', backgroundColor: 'transparent'}} />
			<TextInput enablesReturnKeyAutomatically={true} secureTextEntry={true} placeholder="Password" style={{ height: 50, width: '100%', backgroundColor: 'transparent'}} />
			<TouchableOpacity style={{ height: 50, width: '100%', backgroundColor: '#cada43', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
			<Text style={{ textAlign: 'left', fontSize: 22, fontWeight: 'bold', color: '#333' }}>Register</Text>
			</TouchableOpacity>
			<Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 30 }}>Or, register with...</Text>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
			<TouchableOpacity onPress={() => {alert("Login Google")}} style={{ width: 85, height: 50, borderRadius: 5, backgroundColor: '#fff', borderWidth: 1, borderColor: '#333', marginRight: 10 }}></TouchableOpacity>
			<TouchableOpacity onPress={() => {alert("Login Google")}} style={{ width: 85, height: 50, borderRadius: 5, backgroundColor: '#fff', borderWidth: 1, borderColor: '#333', marginRight: 10 }}></TouchableOpacity>
			<TouchableOpacity onPress={() => {alert("Login Google")}} style={{ width: 85, height: 50, borderRadius: 5, backgroundColor: '#fff', borderWidth: 1, borderColor: '#333', marginRight: 10 }}></TouchableOpacity>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			</View>
			</View>
		</View>
	);
};

export default RegisterScreen;
