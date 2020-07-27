import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import axios from 'axios'

import { RestaurantsItem } from '../components'
import styles from '../styles'

const RestaurantsPage = (props) => {

    const [restaurantsList, setRestaurantsList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let {data} = await axios.get("https://opentable.herokuapp.com/api/restaurants?city=${props.route.params.cityID}")
        setRestaurantsList(data)
    }

    const renderRestaurants = ({item}) => <RestaurantsItem restaurantData={item} />

    return(
        <SafeAreaView>
            <View>

                <View style={styles.pages.restaurantList.cityContainer}>
                    <Text style={styles.pages.restaurantList.cityText}>{props.route.params.cityID} Restorantları</Text>
                </View>

                <FlatList 
                    keyExtractor={(_, index) => index.toString}
                    data={restaurantsList}
                    renderItem={renderRestaurants}
                    ItemSeparatorComponent={() => <View style={{marginVertical: 5, borderWidth: 1, borderColor: 'gray'}} />}
                />
            </View>
        </SafeAreaView>
    )
}

export {RestaurantsPage}