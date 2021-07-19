import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const SearchFilter = ({ setFilteredValue }) => {
  const [currentValue, setCurrentValue] = useState(null)

  return (
    <RNPickerSelect
      style={inputStyles}
      placeholder={{
        label: 'Filter by region',
        value: null,
      }}
      items={[
        {
          label: 'All',
          value: 'all',
        },
        {
          label: 'Europe',
          value: 'europe',
        },
        {
          label: 'Africa',
          value: 'africa',
        },
        {
          label: 'Asia',
          value: 'asia',
        },
        {
          label: 'Americas',
          value: 'americas',
        },
        {
          label: 'Oceania',
          value: 'oceania',
        },
      ]}
      value={currentValue}
      onValueChange={value => setCurrentValue(value)}
      onDonePress={() => setFilteredValue(currentValue)}
    />
  )
}

const inputStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#00000022',
    borderRadius: 2,
    color: 'black',
    width: Dimensions.get('window').width - 60,
    marginLeft: 30,
    marginTop: 10,
  },
})

export default SearchFilter
