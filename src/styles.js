import { StyleSheet, Dimensions } from 'react-native'

const styles = {
    components: {
        cityCard: StyleSheet.create({
            container: {
                padding: 10, 
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: '#FF5722',
                marginHorizontal: 5
            },

            text: {
                fontSize: 20,
                color: 'white'
            }
        }),

        restaurantItem: StyleSheet.create({
            container: {
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center'
            },

            text: {
                fontSize: 20,
                color: '#FF5722'
            },

            image: {
                borderRadius: 10,
                resizeMode: 'contain',
                height: Dimensions.get('window').height/4
            }
        }),

        searchBar: StyleSheet.create({
            container: {
                backgroundColor: '#757575',
                margin: 15,
                padding: 1,
                borderRadius: 10
            }
        }),
        detailItem: StyleSheet.create({
            container: {
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center'
            },
            image: {
                borderRadius: 10,
                resizeMode: 'contain',
                height: Dimensions.get('window').height/3
            },
            detail: {
                color: 'black',
                margin: 5,
                padding: 10,
                borderRadius: 10,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            detailName: {
                color: '#FF5722',
                fontSize: 20,
                fontWeight: 'bold',
                margin: 5,
                padding: 10,
                borderRadius: 10,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }
        })
    },

    pages: {
        cityList: StyleSheet.create({
            selectCityText: {
                fontSize: 25,
                margin: 10,
                fontWeight: 'bold'
            }
        }),

        restaurantList: StyleSheet.create({
            cityContainer: {
                padding: 10,
                borderBottomWidth: 1,
                borderColor: '#bdbdbd',
                borderRadius: 10
            },

            cityText: {
                padding: 15,
                fontWeight: 'bold',
                alignSelf: 'center'
            }
        })
    }
}

export default styles