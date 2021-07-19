import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, FlatList, View } from 'react-native'
import CountryCard from './CountryCard'

const CountryCards = ({ options }) => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  const { searchedValue, filteredValue } = options

  useEffect(() => {
    if (filteredValue && filteredValue !== 'all') {
      console.log(1)
      if (searchedValue) {
        console.log(3)
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
        countries.filter(country => country.name.includes(searchedValue)),
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
            <CountryCard
              name={item.name}
              pop={item.population}
              region={item.region}
              capital={item.capital}
            />
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
