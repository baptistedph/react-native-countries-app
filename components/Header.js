import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.subtitle}>Made with ❤️ by Baptiste D. - 2021</Text>
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
    backgroundColor: '#17212f',
  },
  text: {
    fontSize: 20,
    fontFamily: 'nunito-bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 10,
    fontFamily: 'nunito-regular',
    color: 'white',
  },
})

export default Header
