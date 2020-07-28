import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios';

import { CityCard, CitySearchBar } from '../components';

const CitiesPage = (props) => {

    const [cityList, setCityList] = useState([])
    const [filtCityList, setFiltCityList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let {data} = await axios.get("https://opentable.herokuapp.com/api/cities")
        setFiltCityList(data.cities)
        setCityList(data.cities)
        setLoading(false)
        // console.log(data)
    }

    const renderCity = ({item}) => {
        return(
            <CityCard 
                cityName={item}
                onCitySelect={() => citySelect(item)}                               
            />
        )
    }

    function citySelect(city) {
        props.navigation.navigate("Restaurants", {cityID: city})
    }

    // toUpperCase: aramayı küçük yada büyük harfle yapabilesin diye
    const searchCity = (text) => {
        let filteredList = cityList.filter(function(item) {
            const itemData = item.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setFiltCityList(filteredList)
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>

                <CitySearchBar onSearch={searchCity}/>
                
                {
                    loading ?
                        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <ActivityIndicator size="large" />
                        </View>
                        :
                        <FlatList
                            refreshing={loading}
                            onRefresh={fetchData}
                            keyExtractor={(_, index) => index.toString()}
                            data={filtCityList}
                            renderItem={renderCity}
                            ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
                        />                        
                }

            </View>
        </SafeAreaView>
    )
} 

export {CitiesPage}