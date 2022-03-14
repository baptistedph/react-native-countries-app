import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const SearchFilter = ({ setFilteredValue }) => {
  const [currentValue, setCurrentValue] = useState(null)
  const [borderColor, setBorderColor] = useState('#ffffff22')

  useEffect(() => {
    inputStyles.inputIOS = { ...inputStyles.inputIOS, borderColor }
  }, [borderColor])

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
      onOpen={() => setBorderColor('#ffffff22')}
      onClose={() => setBorderColor('#ffffff88')}
    />
  )
}

const inputStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ffffff22',
    color: 'white',
    width: Dimensions.get('window').width - 60,
    marginLeft: 30,
    marginTop: 10,
  },
  placeholder: {
    color: '#aaaaaa',
  },
})

export default SearchFilter
