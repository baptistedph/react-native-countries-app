import React, { useState } from 'react'
import Header from './components/Header'
import { useFonts } from 'expo-font'
import HomeStack from './routes/homeStack'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  const [fontsLoaded] = useFonts({
    'nunito-light': require('./assets/fonts/NunitoSans-Light.ttf'),
    'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
  })

  const [filteredValue, setFilteredValue] = useState(null)
  const [searchedValue, setSearchedValue] = useState(null)

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Header />
      <HomeStack
        setFilteredValue={setFilteredValue}
        setSearchedValue={setSearchedValue}
        filteredValue={filteredValue}
        searchedValue={searchedValue}
      />
    </NavigationContainer>
  )
}

export default App
