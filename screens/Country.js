import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const Country = ({ route, navigation }) => {
  const { item } = route.params

  const handlePress = async border => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${border}`)
    const country = await res.json()
    navigation.push('Country', { item: country })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.items}>
        <Text style={styles.item}>
          <Text style={styles.bold}>Population:</Text> {item.population}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Region:</Text> {item.region}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Sub Region:</Text> {item.subregion}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Capital:</Text> {item.capital}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Top Level Domain:</Text>{' '}
          {item.topLevelDomain.map(domain => (
            <Text key={domain}>{domain}</Text>
          ))}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Currencies:</Text>{' '}
          {item.currencies.map(currency => (
            <Text key={currency.name}>{currency.name}</Text>
          ))}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Languages:</Text>{' '}
          {item.languages.map(language => (
            <Text key={language.name}>{language.name}</Text>
          ))}
        </Text>
      </View>
      <View style={{ ...styles.item, marginTop: 30 }}>
        <Text style={{ ...styles.item, ...styles.bold }}>
          Border Countries:
        </Text>
        <View style={styles.borders}>
          {item.borders.map(border => (
            <TouchableOpacity onPress={() => handlePress(border)}>
              <View key={border} style={styles.border}>
                <Text style={styles.item}>{border}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  name: {
    fontSize: 23,
    fontFamily: 'nunito-bold',
  },
  items: {
    marginTop: 10,
  },
  item: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: 'nunito-light',
  },
  bold: {
    fontFamily: 'nunito-bold',
  },
  borders: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  border: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    borderRadius: 3,
    paddingHorizontal: 15,
    paddingTop: 2,
    paddingBottom: 5,
    marginRight: 15,
    marginTop: 10,
  },
})

export default Country
