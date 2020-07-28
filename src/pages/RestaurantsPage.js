import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import axios from 'axios'

import { RestaurantsItem, RestaurantSearchBar } from '../components'
import styles from '../styles'

const RestaurantsPage = (props) => {

    const [originalList, setOriginalList] = useState([])
    const [restaurantsList, setRestaurantsList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let {data} = await axios.get("https://opentable.herokuapp.com/api/restaurants?city=" + props.route.params.cityID)
        setRestaurantsList(data.restaurants)
        setOriginalList(data.restaurants)
        setLoading(false)
        // console.log(data.restaurants)
    }

    const renderRestaurants = ({item}) => {
        return(
            <RestaurantsItem 
                restaurantData={item} 
                onRestaurantSelect={() => restaurantSelect(item)}    
            />
        )
    }

    function restaurantSelect(restaurant) {
        props.navigation.navigate("Detail", {restaurantID: restaurant.id})        
    }

    const searchRestaurant = (text) => {
        let filteredList = originalList.filter(function(item) {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setRestaurantsList(filteredList)
    }

    return(
        <SafeAreaView>
            <View>

                <View style={styles.pages.restaurantList.cityContainer}>
                    <Text style={styles.pages.restaurantList.cityText}>{props.route.params.cityID} Restoranları</Text>
                </View>
                
                <RestaurantSearchBar onSearch={searchRestaurant} />

                <FlatList 
                    refreshing={loading}
                    onRefresh={fetchData}
                    keyExtractor={(_, index) => index.toString}
                    data={restaurantsList}
                    renderItem={renderRestaurants}
                    ItemSeparatorComponent={() => <View style={{marginVertical: 5, borderWidth: 1, borderColor: '#FF5722'}} />}
                />
            </View>
        </SafeAreaView>
    )
}

export {RestaurantsPage}