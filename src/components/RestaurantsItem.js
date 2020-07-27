import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

import styles from '../styles'

const RestaurantsItem = props => {
    return(
        <TouchableOpacity style={styles.components.restaurantItem.container}>
            <Text style={styles.components.restaurantItem.text}>{props.restaurantData.name}</Text>
        </TouchableOpacity>
    )
}

export {RestaurantsItem}