import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabNavigator from "./HomeTabNavigator";
import AuthNavigator from "./AuthNavigator";
import DestinationSearchScreen from "../screens/DestinationSearch/DestinationSearchScreen";
import GuestsScreen from "../screens/Guests/index";
import HouseScreen from "../screens/House/index";
import HomeScreen from '../screens/Home/HomeScreen';

import RootScreen from '../screens/Modal/App';
import LoginScreen from '../screens/Login/index';
import RegisterScreen from '../screens/Register/index';


const Stack = createStackNavigator();
  
const Router = () => {

	// const [logged, isLogged] = useState(0);

	// function loggedUser() {

	// 	isLogged(true) 

	// }

	return (
		<NavigationContainer>
			<Stack.Navigator>
			<Stack.Screen
					name="Auth"
					component={AuthNavigator}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeTabNavigator}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="Destination Search"
					component={DestinationSearchScreen}
					options={{
						title: "Search your destination",
					}}
				/>
				
				<Stack.Screen
					name="Guests"
					component={GuestsScreen}
					options={{
						title: "How many people?",
					}}
				/>

				<Stack.Screen
					name="House"
					options={{ headerShown: false }}
					component={HouseScreen}
				/>

			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;
