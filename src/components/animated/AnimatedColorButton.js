import React, {
  useState, useRef, forwardRef, useImperativeHandle,
} from 'react'
import {
  TouchableOpacity,
  Text,
  Animated,
  Easing,
} from 'react-native'

import { colors } from '../../lib/styleUtils'

const AnimatedColorButton = ({
  style,
  fontStyle,
  children,
  disabled,
  defaultColor = colors.gray2,
  highlightedColor = colors.main,
  onPress,
}, ref) => {
  const [isHighlighted, setIsHighlighted] = useState(false)
  const colorAnim = useRef(new Animated.Value(0)).current

  useImperativeHandle(ref, () => ({
    handleColor: tempIsHighlighted => {
      if (typeof tempIsHighlighted !== 'boolean') return
      if (tempIsHighlighted !== isHighlighted) {
        setIsHighlighted(tempIsHighlighted)
        Animated.timing(
          colorAnim,
          {
            toValue: tempIsHighlighted ? 1 : 0,
            duration: 1000,
            easing: Easing.out(Easing.exp),
            useNativeDriver: false,
          }
        ).start()
      }
    },
  }))

  const animatedColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [defaultColor, highlightedColor],
  })

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
    >
      <Animated.View style={[style, { backgroundColor: animatedColor }]}>
        <Text style={fontStyle}>{children}</Text>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default forwardRef(AnimatedColorButton)
