import React from 'react'
import Search from '../components/search/Search'
import CountryCards from '../components/country-cards/CountryCards'
import { StyleSheet, View } from 'react-native'

const Home = ({
  setFilteredValue,
  setSearchedValue,
  searchedValue,
  filteredValue,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Search
        setFilteredValue={setFilteredValue}
        setSearchedValue={setSearchedValue}
      />
      <CountryCards
        navigation={navigation}
        options={{ searchedValue, filteredValue }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#17212f',
  },
})

export default Home
