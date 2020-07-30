import React from 'react'
import { Text, View, Image } from 'react-native'

import styles from '../styles'

const DetailItem = props => {
    return(
        <View style={styles.components.detailItem.container}>
            <Image style={styles.components.detailItem.image} source={{uri: props.detailData.image_url}}/>
            <Text style={styles.components.detailItem.detailName}>{props.detailData.name}</Text>
            <Text style={styles.components.detailItem.detail}>Address: {props.detailData.address}</Text>   
            <Text style={styles.components.detailItem.detail}>{props.detailData.area}</Text>
            <Text style={styles.components.detailItem.detail}>Phone Number: {props.detailData.phone}</Text>               
        </View>
    )
}

export {DetailItem}