import React, { useEffect, useState } from 'react'
import {
  Text,
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
              country.name.common
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
          country.name.common
            .toLowerCase()
            .includes(searchedValue.toLowerCase()),
        ),
      )
    } else {
      setFilteredCountries(countries)
    }
  }, [searchedValue, filteredValue])

  const getCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json()
    setCountries(data)
    setFilteredCountries(data)
  }

  useEffect(() => {
    getCountries()
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Country', { item })}>
      <CountryCard
        flag={item.flags.png}
        name={item.name.common}
        pop={item.population}
        region={item.region}
        capital={item.capital ? item.capital[0] : 'Unknown'}
      />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      {filteredCountries.length > 0 ? (
        <FlatList
          data={filteredCountries}
          should
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <Text style={styles.text}>No results.</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 300,
  },
  text: {
    fontSize: 16,
    fontFamily: 'nunito-regular',
  },
})

export default CountryCards
