import React from 'react'
import {TouchableOpacity, Text, View, Image} from 'react-native'

import styles from '../styles'

const RestaurantsItem = props => {
    return(
        <View style={styles.components.restaurantItem.container}>
            <TouchableOpacity onPress={props.onRestaurantSelect}>
                <Image style={styles.components.restaurantItem.image} source={{uri: props.restaurantData.image_url}}/>
                <Text style={styles.components.restaurantItem.text}>{props.restaurantData.name}</Text>
                <Text>Address: {props.restaurantData.address}</Text>                  
            </TouchableOpacity>
        </View>
    )
}

export {RestaurantsItem}