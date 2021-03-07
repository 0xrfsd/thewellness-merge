import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Fontisto, FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from '../screens/Home/HomeScreen';
import FirstScreen from '../screens/First/FirstScreen';
import SavedScreen from '../screens/Saved/index';
import ChatList from '../screens/Chat/chatList';
import ChatScreen from '../screens/Chat/index';

const Tab = createBottomTabNavigator();


const HomeTabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: "#f15454",
				safeAreaInsets: {
					bottom: 0,
					top: 0,
				},

				style: {
					height: 70,
					backgroundColor: "#333",
					paddingTop: 10,
					paddingBottom: 18,
				},
			}}
		>
			<Tab.Screen
				name="Explore"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Fontisto name="search" size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Saved"
				component={SavedScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="heart" size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Wellness"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="accusoft" size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Messages"
				component={ChatList}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="comment" size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="user" size={25} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeTabNavigator;
