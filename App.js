import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import { useFonts } from 'expo-font'
import CountryCards from './components/country-cards/CountryCards'
import Search from './components/search/Search'

const App = () => {
  const [fontsLoaded] = useFonts({
    'nunito-light': require('./assets/fonts/NunitoSans-Light.ttf'),
    'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
  })

  const [filteredValue, setFilteredValue] = useState(null)
  const [searchedValue, setSearchedValue] = useState(null)

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <Header />
      <Text>{searchedValue}</Text>
      <Search
        setFilteredValue={setFilteredValue}
        setSearchedValue={setSearchedValue}
      />
      <CountryCards options={{ searchedValue, filteredValue }} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
