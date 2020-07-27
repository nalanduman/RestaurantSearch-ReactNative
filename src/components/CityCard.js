import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

import styles from '../styles'

const CityCard = (props) => {
    return(
        <View style={styles.components.cityCard.container}>
            <TouchableOpacity onPress={props.onCitySelect}>
                <Text style={styles.components.cityCard.text}>{props.cityName}</Text>
            </TouchableOpacity>            
        </View>

    )
}

export {CityCard}