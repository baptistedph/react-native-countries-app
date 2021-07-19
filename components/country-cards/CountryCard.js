import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { SvgUri } from 'react-native-svg'

const CountryCard = ({ name, pop, region, capital }) => {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={{ ...styles.item, marginTop: 12 }}>
          <Text style={styles.bold}>Population</Text>: {pop}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Region</Text>: {region}
        </Text>
        <Text style={styles.item}>
          <Text style={styles.bold}>Capital</Text>: {capital}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width - 60,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    backgroundColor: 'white',
    marginBottom: 30,
  },
  flag: {
    height: 250,
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
  },

  info: {
    padding: 30,
  },
  name: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
  },
  item: {
    fontSize: 20,
    fontFamily: 'nunito-light',
    marginTop: 5,
  },
  bold: {
    fontFamily: 'nunito-bold',
  },
})

export default CountryCard
