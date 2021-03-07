import React, { useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView, Image, ActivityIndicator,TouchableOpacity, TextInput, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import LoginImage from '../../../assets/images/bh.jpeg'

const LoginScreen = ({ }) => {

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [loading, setLoading] = useState(false);


	const [logged, isLogged] = useState(0);

	function isLoggedUser() {

		storeData();

		// asyncStorage jwt {user: user.id} // token

		// fetch post(login) = { body }

	}

	const storeData = async (logged) => {

		isLogged(true);

		try {
		  await AsyncStorage.setItem('@storage_Key', 'fjdsfsdof');
		  navigation.reset({
			index: 0,
			routes: [{ name: 'Home' }],
		  });
		} catch (e) {
		  alert(e);
		}
	  }

	// onPress={() => navigation.navigate('Home')}
	// onPress{loggedUser}

	const navigation = useNavigation();

	return (

		<View style={{ flex: 1, backgroundColor: '#FFFAF5' }}>
			{loading ? (
				<ActivityIndicator size="small" color="#333" />
			) : (
<View style={{ flex: 1, paddingLeft: 20, paddingRight: 20, justifyContent: 'center' }}>
				<Text style={{ textAlign: 'left', fontSize: 36, fontWeight: 'bold', marginTop: '-25%' }}>Login</Text>
				<TextInput keyboardType="email-address" autoFocus={true} autoCapitalize="none" autoCorrect={false} value={email} onChangeText={email => setEmail(email.trim())} enablesReturnKeyAutomatically={false} placeholder="Email" style={{ height: 50, width: '100%', backgroundColor: 'transparent' }} />
				<TextInput enablesReturnKeyAutomatically={true} secureTextEntry={true} autoCapitalize="none" autoComplete="password" autoCorrect={false} autoFocus={true} value={password} onChangeText={password => setPassword(password.trim())} placeholder="Password" style={{ height: 50, width: '100%', backgroundColor: 'transparent' }} />
				<TouchableOpacity onPress={isLoggedUser} style={{ height: 50, width: '100%', backgroundColor: '#cada43', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
					<Text style={{ textAlign: 'left', fontSize: 22, fontWeight: 'bold', color: '#333' }}>Login</Text>
				</TouchableOpacity>
				{/* <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 30 }}>Or, login with...</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
					<TouchableOpacity onPress={() => navigation.reset('Home')} style={{ width: 85, height: 50, borderRadius: 5, backgroundColor: '#fff', borderWidth: 1, borderColor: '#333', marginRight: 10 }}></TouchableOpacity>
					<TouchableOpacity onPress={() => { alert("Login Google") }} style={{ width: 85, height: 50, borderRadius: 5, backgroundColor: '#fff', borderWidth: 1, borderColor: '#333', marginRight: 10 }}></TouchableOpacity>
					<TouchableOpacity onPress={() => { alert("Login Google") }} style={{ width: 85, height: 50, borderRadius: 5, backgroundColor: '#fff', borderWidth: 1, borderColor: '#333', marginRight: 10 }}></TouchableOpacity>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ textAlign: 'center', flex: 1, fontSize: 16, fontWeight: 'bold', marginTop: 100, color: '#333' }}>Or, register an account right now! <Text style={{ fontWeight: 'bold', color: 'blue' }}>Sign Up</Text>  </Text>
				</View> */}
			</View>
			)}
			{/* <Image source={LoginImage} style={{ height: '100%', width: '100%', resizeMode: 'cover' }}/> */}
			
		</View>
	);
};

export default LoginScreen;
