import React, { useEffect, useState, useRef } from 'react'
import {
  Animated,
} from 'react-native'

const FadeAnimView = ({
  show,
  style,
  children,
  delay = 0,
  duration = 800,
}) => {
  const [shouldRender, setRender] = useState(show)
  const opacity = useRef(new Animated.Value(0)).current
  const translateY = useRef(new Animated.Value(7)).current

  useEffect(() => {
    const anim = Animated.parallel([
      Animated.timing(
        opacity,
        {
          toValue: show ? 1 : 0,
          duration,
          delay,
          useNativeDriver: false,
        }
      ),
      Animated.timing(
        translateY,
        {
          toValue: show ? 0 : 7,
          duration,
          delay,
          useNativeDriver: false,
        }
      )
    ])
    if (show) {
      setRender(true)
      anim.start()
    } else {
      anim.start(() => {
        if (!show) setRender(false)
      })
    }
  }, [show])

  return (
    shouldRender && (
      <Animated.View
        style={[style, { opacity, transform: [{ translateY }] }]}
      >
        {children}
      </Animated.View>
    )
  )
}

export default FadeAnimView
