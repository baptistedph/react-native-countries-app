import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native'

const SearchInput = ({ setSearchedValue }) => {
  const handleChange = value => {
    setSearchedValue(value)
  }

  return (
    <TextInput
      onChangeText={handleChange}
      style={styles.input}
      placeholder="Search a country"
    />
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#00000022',
    borderRadius: 2,
    color: 'black',
    width: Dimensions.get('window').width - 60,
  },
})

export default SearchInput
