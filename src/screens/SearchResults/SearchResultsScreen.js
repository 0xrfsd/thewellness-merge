import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import feed from '../../../assets/data/feed'
import Post from '../../components/Post/Post'

const SearchResultsScreen = () => {
    return (
        <View>
            <FlatList 
                data={feed}
                renderItem={({item}) => <Post post={item} />}    
            />
        </View>
    )
}

export default SearchResultsScreen

