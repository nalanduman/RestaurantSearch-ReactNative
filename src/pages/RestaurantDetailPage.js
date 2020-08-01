import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import axios from 'axios'

import { DetailItem } from '../components'

const RestaurantDetailPage = (props) => {

    const [list, setList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let {data} = await axios.get("https://opentable.herokuapp.com/api/restaurants/" + props.route.params.restaurantID)
        setList(data)
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <DetailItem detailData={list}/>

            </View>
        </SafeAreaView>
    )
}

export {RestaurantDetailPage}