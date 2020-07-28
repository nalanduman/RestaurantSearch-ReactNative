import React from 'react'
import { View, TextInput } from 'react-native'

import styles from '../styles'

const RestaurantSearchBar = (props) => {
    return(
        <View style={styles.components.searchBar.container}>
            <TextInput
                onChangeText={props.onSearch}
                placeholder="Restoran arayınız..."
                placeholderTextColor="white"
            />
        </View>
    )
}
export {RestaurantSearchBar}