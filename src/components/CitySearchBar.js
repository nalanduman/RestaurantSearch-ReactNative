import React from 'react'
import { View, TextInput } from 'react-native'

import styles from '../styles'

const CitySearchBar = (props) => {
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
export {CitySearchBar}