import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CitiesPage, RestaurantsPage } from './pages';

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cities">
        <Stack.Screen 
            name="Cities" 
            component={CitiesPage} 
            options={{
              title: "Şehir Listesi"
            }}
        />

        <Stack.Screen
            name="Restaurants"
            component={RestaurantsPage}
            options={{
              title: "Restoran Listesi"
              
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;