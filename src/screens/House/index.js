import React from "react";
import { ScrollView, Image, ImageBackground, Pressable, Text, View } from "react-native";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

const HouseScreen = ({ route }) => {
	const navigation = useNavigation();
	const { id, name, rate, price, desc } = route.params;
	return (
		<ScrollView>
      <Text style={{ textAlign: 'center' }}>{id}</Text>
      <Text style={{ textAlign: 'center' }}>{name}</Text>
      <Text style={{ textAlign: 'center' }}>{rate}</Text>
      <Text style={{ textAlign: 'center' }}>{price}</Text>
      <Text style={{ textAlign: 'center' }}>{desc}</Text>
		</ScrollView>
	);
};

export default HouseScreen;
