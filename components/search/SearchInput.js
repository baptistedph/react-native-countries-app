import React, { useState } from 'react'
import { StyleSheet, TextInput, Dimensions } from 'react-native'

const SearchInput = ({ setSearchedValue }) => {
  const [borderColor, setBorderColor] = useState('#ffffff22')

  const handleChange = value => {
    setSearchedValue(value)
  }

  return (
    <TextInput
      placeholderTextColor="#aaaaaa"
      onChangeText={handleChange}
      style={{ ...styles.input, borderColor }}
      placeholder="Search a country"
      onFocus={() => setBorderColor('#ffffff88')}
      onBlur={() => setBorderColor('#ffffff22')}
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
    borderRadius: 4,
    color: 'white',
    width: Dimensions.get('window').width - 60,
  },
})

export default SearchInput
