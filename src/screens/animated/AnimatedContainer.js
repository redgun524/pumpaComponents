import React, { useState, useCallback, useRef } from 'react'
import {
  Alert,
  Keyboard,
} from 'react-native'

import AnimatedScreen from './AnimatedScreen'

const AnimatedContainer = () => {
  const [animatedTextInputValue, setAnimatedTextInputValue] = useState('')
  const [fadeAnimViewVisible, setFadeAnimViewVisible] = useState(false)
  const buttonVerifyRef = useRef(null)

  const onPressOutside = () => {
    Keyboard.dismiss()
  }

  const onChangeTextInput = useCallback(
    text => {
      if (buttonVerifyRef.current) {
        if (animatedTextInputValue.length === 9 && text.length === 10) {
          buttonVerifyRef.current.handleColor(true)
        } else if (animatedTextInputValue.length === 10 && text.length === 9) {
          buttonVerifyRef.current.handleColor(false)
        }
      }
      setAnimatedTextInputValue(text)
    },
    [animatedTextInputValue],
  )

  const onPressVerify = useCallback(
    () => {
      setAnimatedTextInputValue('')
      Alert.alert('인증번호 발송', `${animatedTextInputValue}\n위 번호로 인증번호 발송`)
    },
    [animatedTextInputValue],
  )

  const onPressFadeAnim = useCallback(
    () => {
      setFadeAnimViewVisible(!fadeAnimViewVisible)
    },
    [fadeAnimViewVisible],
  )

  return (
    <AnimatedScreen
      animatedTextInputValue={animatedTextInputValue}
      fadeAnimViewVisible={fadeAnimViewVisible}
      buttonVerifyRef={buttonVerifyRef}
      onPressOutside={onPressOutside}
      onChangeTextInput={onChangeTextInput}
      onPressVerify={onPressVerify}
      onPressFadeAnim={onPressFadeAnim}
    />
  )
}

export default AnimatedContainer
