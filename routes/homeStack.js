import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Country from '../screens/Country'
import React from 'react'

const Stack = createStackNavigator()

const HomeStack = ({
  setFilteredValue,
  setSearchedValue,
  searchedValue,
  filteredValue,
}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#17212f',
        },
        headerTintColor: 'white',
        cardStyle: { backgroundColor: '#17212f' },
      }}>
      <Stack.Screen name="Home">
        {props => (
          <Home
            {...props}
            setFilteredValue={setFilteredValue}
            setSearchedValue={setSearchedValue}
            searchedValue={searchedValue}
            filteredValue={filteredValue}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Country" component={Country} />
    </Stack.Navigator>
  )
}

export default HomeStack
