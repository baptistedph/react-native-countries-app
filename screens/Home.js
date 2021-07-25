import React from 'react'
import Search from '../components/search/Search'
import CountryCards from '../components/country-cards/CountryCards'

const Home = ({
  setFilteredValue,
  setSearchedValue,
  searchedValue,
  filteredValue,
  navigation,
}) => {
  return (
    <>
      <Search
        setFilteredValue={setFilteredValue}
        setSearchedValue={setSearchedValue}
      />
      <CountryCards
        navigation={navigation}
        options={{ searchedValue, filteredValue }}
      />
    </>
  )
}

export default Home
