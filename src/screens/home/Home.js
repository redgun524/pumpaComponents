import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeContainer from './HomeContainer'
import { AnimatedScreen } from '../animated'
import ModalScreen from '../modal'

const Stack = createStackNavigator()

const Home = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Home'
      component={HomeContainer}
      options={{ title: 'Home' }}
    />
    <Stack.Screen name='Animated' component={AnimatedScreen} />
    <Stack.Screen name='Modal' component={ModalScreen} />
  </Stack.Navigator>
)

export default Home
