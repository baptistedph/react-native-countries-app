import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'

const CountryCard = ({ flag, name, pop, region, capital }) => {
  return (
    <View style={styles.card}>
      <Image
        style={{ width: '100%', height: 150, borderRadius: 8 }}
        source={{ uri: flag }}
      />
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
    backgroundColor: '#1f2b3d',
    marginBottom: 20,
    borderRadius: 8,
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
    color: 'white',
  },
  item: {
    fontSize: 20,
    fontFamily: 'nunito-light',
    marginTop: 5,
    color: 'white',
  },
  bold: {
    fontFamily: 'nunito-bold',
    color: 'white',
  },
})

export default CountryCard
