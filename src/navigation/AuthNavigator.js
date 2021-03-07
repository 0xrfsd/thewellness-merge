import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RootScreen from '../screens/Modal/App';
import LoginScreen from '../screens/Login/index';
import RegisterScreen from '../screens/Register/index';

const Auth = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Auth.Navigator>
			<Auth.Screen
				name="Root"
				component={RootScreen}
				options={{ headerShown: false }}
			/>
			<Auth.Screen
				name="Login"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Auth.Screen
				name="Register"
				component={RegisterScreen}
				options={{ headerShown: false }}
			/>
		</Auth.Navigator>
	);
};

export default AuthNavigator;
