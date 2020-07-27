import React from 'react'
import { View } from 'react-native'

import styles from '../styles'
import { TextInput } from 'react-native-gesture-handler'

const SearchBar = (props) => {
    return(
        <View style={styles.components.searchBar.container}>
            <TextInput
                onChangeText={props.onSearch}
                placeholder="Şehir arayınız..."
                placeholderTextColor="white"
            />
        </View>
    )
}
export {SearchBar}