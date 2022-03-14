import React from 'react'
import {
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

const Country = ({ route, navigation }) => {
  const { item } = route.params

  const handlePress = async border => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    const country = await res.json()
    navigation.push('Country', { item: country[0] })
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        style={{ width: '100%', height: 200, borderRadius: 8 }}
        source={{ uri: item.flags.png }}
      />
      <Text style={{ ...styles.name, marginTop: 20 }}>
        {item.flag} {item.name.common}
      </Text>
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
          {item.tld?.map(domain => (
            <Text key={domain}>{domain}</Text>
          ))}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Currencies:</Text>{' '}
          {Object.entries(item.currencies || {})?.map(([_, currency]) => (
            <Text key={currency.name}>{currency.name}</Text>
          ))}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Languages:</Text>{' '}
          {Object.entries(item.languages || {})?.map(([_, language]) => (
            <Text key={language}>{language}</Text>
          ))}
        </Text>
      </View>
      <View style={{ ...styles.item, marginTop: 30, paddingBottom: 60 }}>
        <Text style={{ ...styles.item, ...styles.bold }}>
          Border Countries:
        </Text>
        <View style={styles.borders}>
          {item.borders?.map(border => (
            <TouchableOpacity key={border} onPress={() => handlePress(border)}>
              <View style={styles.border}>
                <Text style={styles.item}>{border}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#17212f',
  },
  name: {
    fontSize: 23,
    fontFamily: 'nunito-bold',
    color: 'white',
  },
  items: {
    marginTop: 10,
  },
  item: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: 'nunito-light',
    color: 'white',
  },
  bold: {
    fontFamily: 'nunito-bold',
  },
  borders: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  border: {
    backgroundColor: '#1f2b3d',
    color: 'red',
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingTop: 2,
    paddingBottom: 5,
    marginRight: 15,
    marginTop: 10,
  },
})

export default Country
