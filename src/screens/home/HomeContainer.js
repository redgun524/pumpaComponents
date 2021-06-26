import React from 'react'

import HomeScreen from './HomeScreen'

const HomeContainer = ({ navigation }) => {
  const onPressAnimated = () => {
    navigation.navigate('Animated')
  }

  const onPressModal = () => {
    navigation.navigate('Modal')
  }

  return (
    <HomeScreen
      onPressAnimated={onPressAnimated}
      onPressModal={onPressModal}
    />
  )
}

export default HomeContainer
