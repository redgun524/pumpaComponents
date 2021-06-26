import { useState } from 'react'
import { Animated } from 'react-native'

import { screenHeight } from '../lib/styleUtils'

const useSlideModal = ({ height }) => {
  const [visible, setVisible] = useState(false)
  const [slideY] = useState(new Animated.Value(screenHeight))

  const handleSlide = () => {
    if (!visible) {
      setVisible(true)
      Animated.timing(slideY, {
        toValue: screenHeight - height,
        duration: 250,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(slideY, {
        toValue: screenHeight,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false)
      })
    }
  }

  return {
    visible,
    slideY,
    slideHeight: height,
    handleSlide,
  }
}

export default useSlideModal
