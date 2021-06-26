import React, { useState, forwardRef, useImperativeHandle } from 'react'
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import {
  hitSlop,
  screenWidth,
  screenHeight,
  bottomSpace,
} from '../../lib/styleUtils'
import CloseIcon from '../../images/close2.svg'

const SlideModal = ({
  height,
  content,
  hasShadow = true,
  backgroundTouch = true,
  onPressBackgroundCallback,
}, ref) => {
  const [visible, setVisible] = useState(false)
  const [slideY] = useState(new Animated.Value(screenHeight))

  const onPressBackground = () => {
    if (typeof ref?.current.handleSlide === 'function') {
      ref.current.handleSlide()
    }
    if (typeof onPressBackgroundCallback === 'function') {
      onPressBackgroundCallback()
    }
  }

  useImperativeHandle(
    ref,
    () => ({
      handleSlide: () => {
        const anim = Animated.timing(slideY, {
          toValue: visible ? height - bottomSpace : bottomSpace,
          duration: 250,
          useNativeDriver: true,
        })
        if (!visible) {
          setVisible(true)
          anim.start()
        } else {
          anim.start(() => {
            setVisible(false)
          })
        }
      },
    }),
    [visible],
  )

  return visible && (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={backgroundTouch && onPressBackground}>
        <View style={[styles.container, hasShadow && { backgroundColor: 'rgba(45, 45, 45, 0.70)' }]} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.slideView,
          (height > 0) && { height },
          { transform: [{ translateY: slideY }] }
        ]}
      >
        {content}
        <TouchableOpacity
          style={styles.btnCloseWrapper}
          activeOpacity={0.6}
          hitSlop={hitSlop}
          onPress={() => {
            if (typeof ref?.current.handleSlide === 'function') {
              ref.current.handleSlide()
            }
          }}
        >
          <CloseIcon width={15} height={15} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: screenWidth,
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  slideView: {
    width: screenWidth,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
  },
  btnCloseWrapper: {
    position: 'absolute',
    right: 20,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    backgroundColor: '#333',
    borderRadius: 16,
  },
  btnClose: {
    width: 30,
  },
})

export default forwardRef(SlideModal)
