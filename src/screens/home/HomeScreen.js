import React from 'react'
import {
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native'

import { TextButton } from '../../components/common'

const HomeScreen = ({ onPressAnimated, onPressModal }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar style='auto' />
    <TextButton
      fontStyle={styles.btnText}
      onPress={onPressAnimated}
    >
      Animated
    </TextButton>
    <TextButton
      fontStyle={styles.btnText}
      onPress={onPressModal}
    >
      Modal
    </TextButton>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  btnText: {
    color: 'red',
    fontSize: 18,
  },
})

export default HomeScreen
