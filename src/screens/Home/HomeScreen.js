import React from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView, Image, ImageBackground, Pressable, TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Container } from './scroll';

import Casa from '../../../assets/images/casa.jpg';

const houses = [
	{
		"img": Casa,
		"key": String(Math.random()),
		"name": "Casa A",
		"rate": "5.0",
		"price": 256,
		"desc": "A perfect house!"
	},
	{
		"img": Casa,
		"key": String(Math.random()),
		"name": "Casa B",
		"rate": "5.0",
		"price": 256,
		"desc": "A perfect house!"
	},
	{
		"img": Casa,
		"key": String(Math.random()),
		"name": "Casa C",
		"rate": "5.0",
		"price": 256,
		"desc": "A perfect house!"
	},
	{
		"img": Casa,
		"key": String(Math.random()),
		"name": "Casa Tucupí",
		"rate": "5.0",
		"price": 256,
		"desc": "A perfect house!"
	},
	{
		"img": Casa,
		"key": String(Math.random()),
		"name": "Casa Tucupí",
		"rate": "5.0",
		"price": 256,
		"desc": "A perfect house!"
	},
	{
		"img": Casa,
		"key": String(Math.random()),
		"name": "Casa Tucupí",
		"rate": "5.0",
		"price": 256,
		"desc": "A perfect house!"
	},
	{
		"img": Casa,
		"key": String(Math.random()),
		"name": "Casa Tucupí",
		"rate": "5.0",
		"price": 256,
		"desc": "A perfect house!"
	},
	{
		"img": Casa,
		"key": String(Math.random()),
		"name": "Casa Tucupí",
		"rate": "5.0",
		"price": 256,
		"desc": "A perfect house!"
	},
	{
		"img": Casa,
		"key": String(Math.random()),
		"name": "Casa Tucupí",
		"rate": "5.0",
		"price": 256,
		"desc": "A perfect house!"
	},
	{
		"img": Casa,
		"key": String(Math.random()),
		"name": "Casa Tucupí",
		"rate": "5.0",
		"price": 256,
		"desc": "A perfect house!"
	},
	{
		"img": Casa,
		"key": String(Math.random()),
		"name": "Casa Tucupí",
		"rate": "5.0",
		"price": 256,
		"desc": "A perfect house!"
	},
]


const HomeScreen = () => {

	const getData = async () => {
		try {
		  const value = await AsyncStorage.getItem('@storage_Key')
		  if (value) {
			  alert(value)
		  }
		} catch (e) {
		  // error reading value
		}
	  }
	

	// async function retrieveData() {
	// 	try {
	// 		const value = await AsyncStorage.getItem('@isLogged:key');
	// 		if (value) {
	// 		  // We have data!!
	// 		  alert(value);
	// 		}
	// 	  } catch (error) {
	// 		alert(error);
	// 	  }
	// };

	// retrieveData();

	const navigation = useNavigation();
	return (
		<ScrollView>
			<Pressable
				style={styles.searchButton}
				onPress={() => navigation.navigate("Destination Search")}
			>
				<Fontisto name="search" size={25} />
				<Text style={styles.searchButtonText}>
					Quando será sua experiência?
				</Text>
			</Pressable>
			<ImageBackground
				style={{
					height: 500,
					width: "100%",
					marginTop: -10,
					resizeMode: "cover",
					justifyContent: "center"
				}}
				source={require("../../../assets/images/background.jpg")}
			>
				<View style={{ marginLeft: '28%', marginTop: '10%' }}>

					<Text style={styles.title}> Explore</Text>
					<Text style={styles.title}>A Bahía</Text>

					<Pressable onPress={() => navigation.navigate("Destination Search")} style={styles.button}>
						<Text style={styles.buttonText}>Acomodações Incríveis!</Text>
					</Pressable>

				</View>
			</ImageBackground>
			<Text style={{ textAlign: 'left', fontSize: 24, marginLeft: 20, marginTop: 20, marginTop: 40, marginBottom: 20 }}>Acomodações em Trancoso na Bahía</Text>
			<Container style={{ paddingLeft: 20, paddingRight: 20, flexDirection: 'row' }}>
				{houses.map((house) => (
					<View key={house.key} style={{ marginRight: 15 }}>
						<TouchableOpacity onPress={() => navigation.navigate("House", {
							name: house.name,
							rate: house.rate,
							price: house.price,
							desc: house.desc
						})}>
							<Image source={house.img} style={{ height: 200, width: 250, borderRadius: 20, marginBottom: 10 }} />
							<Text>{house.name}</Text>
							<Text>{house.rate}</Text>
							<Text>{house.price}</Text>
							<Text>{house.desc}</Text>
						</TouchableOpacity>
					</View>
				))}
			</Container>
			<Text style={{ textAlign: 'left', fontSize: 24, marginLeft: 20, marginTop: 20, marginTop: 40, marginBottom: 20 }}>Acomodações em Trancoso na Bahía</Text>
			<Container style={{ paddingLeft: 20, paddingRight: 20, flexDirection: 'row' }}>
				{houses.map((house) => (
					<TouchableOpacity onPress={() => navigation.navigate("House", {
						itemId: 86,
						otherParam: 'anything you want here',
					})}>
						<View key={house.key} style={{ marginRight: 15 }}>
							<Image source={house.img} style={{ height: 200, width: 250, borderRadius: 20, marginBottom: 10 }} />
							<Text>{house.name}</Text>
							<Text>{house.rate}</Text>
							<Text>{house.price}</Text>
							<Text>{house.desc}</Text>
						</View>
					</TouchableOpacity>
				))}
			</Container>
			<View style={{ height: 70, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ textAlign: 'center', opacity: .5 }}>Wellness House Rental ®</Text>
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
