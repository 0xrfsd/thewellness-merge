import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import search from '../../../assets/data/search';
import styles from './styles';
import {Entypo} from "@expo/vector-icons"
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const DestinationSearchScreen = () => {
    const [inputText, setInputText] = useState("")

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Where are you going?" value={inputText} onChangeText={setInputText}/>

            <FlatList 
                data={search}
                renderItem={({item}) => (
                    <Pressable style={styles.row} onPress={() => navigation.navigate("Guests")}>
                        <View style={styles.iconContainer}>
                            <Entypo name="location-pin" size={30}/>
                        </View>

                        <Text>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default DestinationSearchScreen


