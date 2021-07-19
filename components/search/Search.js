import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchFilter from './SearchFilter'
import SearchInput from './SearchInput'

const Search = ({ setFilteredValue, setSearchedValue }) => {
  return (
    <View style={styles.container}>
      <SearchInput setSearchedValue={setSearchedValue} />
      <SearchFilter setFilteredValue={setFilteredValue} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
  },
})

export default Search
