import React from 'react'
import { View, TextInput } from 'react-native'

import styles from '../styles'

const SearchBar = (props) => {
    return(
        <View style={styles.components.searchBar.container}>
            <TextInput
                onChangeText={props.onSearch}
                placeholder={props.place}
                placeholderTextColor="white"
            />
        </View>
    )
}
export {SearchBar}