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

    // const renderDetail = ({item}) => {
    //     return(
    //         <DetailItem 
    //             detailData={item}   
    //         />
    //     )
    // }

    return(
        <SafeAreaView>
            <View>

                <DetailItem detailData={list}/>

                {/* <FlatList 
                    keyExtractor={(_, index) => index.toString}
                    data={list}
                    renderItem={renderDetail}
                    ItemSeparatorComponent={() => <View style={{marginVertical: 5, borderWidth: 1, borderColor: '#FF5722'}} />}
                /> */}

            </View>
        </SafeAreaView>
    )
}

export {RestaurantDetailPage}