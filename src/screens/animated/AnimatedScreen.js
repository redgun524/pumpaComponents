import React from 'react'
import {
  StyleSheet, View, Text, Image, StatusBar, TouchableWithoutFeedback,
} from 'react-native'

import { TextButton } from '../../components/common'
import { AnimatedTextInput, AnimatedColorButton, FadeAnimView } from '../../components/animated'
import { colors } from '../../lib/styleUtils'

const AnimatedScreen = ({
  animatedTextInputValue,
  fadeAnimViewVisible,
  buttonVerifyRef,
  onPressOutside,
  onChangeTextInput,
  onPressVerify,
  onPressFadeAnim,
}) => (
  <TouchableWithoutFeedback onPress={onPressOutside}>
    <View style={styles.container}>
      <AnimatedTextInput
        style={styles.textInput}
        title='휴대폰 번호'
        placeholder='- 없이 입력해주세요'
        value={animatedTextInputValue}
        onChangeText={onChangeTextInput}
        keyboardType='number-pad'
        maxLength={11}
        insideComponent={(
          <Image
            source={require('../../images/btnCheck.png')}
            style={{ tintColor: colors.main }}
          />
        )}
        rightComponent={(
          <AnimatedColorButton
            ref={buttonVerifyRef}
            disabled={animatedTextInputValue.length < 10}
            style={[
              styles.verifyButton
            ]}
            fontStyle={{ color: 'white' }}
            onPress={onPressVerify}
          >
            인증번호 받기
          </AnimatedColorButton>
        )}
      />
      <View style={{ marginTop: 30, alignItems: 'center' }}>
        <TextButton onPress={() => { onPressFadeAnim() }}>
          <Text>클릭해보세요</Text>
        </TextButton>
        <View style={{ flexDirection: 'row' }}>
          <FadeAnimView style={styles.fadeAnimView} show={fadeAnimViewVisible}>
            <View style={[styles.circle, { backgroundColor: 'red' }]} />
          </FadeAnimView>
          <FadeAnimView style={styles.fadeAnimView} show={fadeAnimViewVisible} delay={300}>
            <View style={[styles.circle, { backgroundColor: 'blue' }]} />
          </FadeAnimView>
          <FadeAnimView style={styles.fadeAnimView} show={fadeAnimViewVisible} delay={600}>
            <View style={[styles.circle, { backgroundColor: 'green' }]} />
          </FadeAnimView>
          <FadeAnimView style={styles.fadeAnimView} show={fadeAnimViewVisible} delay={900}>
            <View style={[styles.circle, { backgroundColor: 'orange' }]} />
          </FadeAnimView>
        </View>
      </View>
      <StatusBar />
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  textInput: {
    width: '100%',
  },
  verifyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 106,
    height: 37,
    backgroundColor: colors.gray2,
    borderRadius: 5,
  },
  fadeAnimView: {
    marginTop: 10,
  },
  circle: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 25,
  },
})

export default AnimatedScreen
