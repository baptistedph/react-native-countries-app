import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native'
import CountryCard from './CountryCard'

const CountryCards = ({ options, navigation }) => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  const { searchedValue, filteredValue } = options

  useEffect(() => {
    if (filteredValue && filteredValue !== 'all') {
      if (searchedValue) {
        setFilteredCountries(
          countries.filter(
            country =>
              country.name
                .toLowerCase()
                .includes(searchedValue.toLowerCase()) &&
              country.region.toLowerCase() === filteredValue,
          ),
        )
      } else {
        setFilteredCountries(
          countries.filter(
            country => country.region.toLowerCase() === filteredValue,
          ),
        )
      }
    } else if (searchedValue) {
      setFilteredCountries(
        countries.filter(country =>
          country.name.toLowerCase().includes(searchedValue.toLowerCase()),
        ),
      )
    } else {
      setFilteredCountries(countries)
    }
  }, [searchedValue, filteredValue])

  const getCountries = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()
    setCountries(data)
    setFilteredCountries(data)
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredCountries}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Country', { item })}>
              <CountryCard
                name={item.name}
                pop={item.population}
                region={item.region}
                capital={item.capital}
              />
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30,
  },
})

export default CountryCards
