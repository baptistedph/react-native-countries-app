import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Where in the world?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontFamily: 'nunito-regular',
  },
})

export default Header
