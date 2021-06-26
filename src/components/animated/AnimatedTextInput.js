import _ from 'lodash'
import React, { memo, forwardRef, useRef } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Animated,
  Easing,
} from 'react-native'

import { colors, screenRatio } from '../../lib/styleUtils'

const MemoizedTextInput = memo(forwardRef(({
  style,
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
  keyboardType,
  maxLength,
  editable,
  onFocus,
  onEndEditing,
}, ref) => (
  <TextInput
    ref={ref}
    style={style}
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
    onChangeText={onChangeText}
    value={value}
    keyboardType={keyboardType}
    maxLength={maxLength}
    editable={editable}
    onFocus={onFocus}
    onEndEditing={onEndEditing}
  />
)), (pp, np) => (
  _.isEqual(pp.style, np.style)
  && pp.value === np.value
  && pp.editable === np.editable
))

const AnimatedTextInput = ({
  style,
  inputStyle,
  title,
  placeholder,
  placeholderTextColor = colors.gray2,
  onChangeText,
  value,
  keyboardType,
  maxLength,
  editable,
  insideComponent,
  rightComponent,
}, ref) => {
  const FILL_ANIM_INIT_VALUE = 0
  const FONT_SCALE_ANIM_INIT_VALUE = 14 * screenRatio

  const fillAnim = useRef(new Animated.Value(FILL_ANIM_INIT_VALUE)).current
  const fontScaleAnim = useRef(new Animated.Value(FONT_SCALE_ANIM_INIT_VALUE)).current

  const handleFocus = isFocused => {
    Animated.parallel([
      Animated.timing(
        fillAnim,
        {
          toValue: isFocused ? 1 : FILL_ANIM_INIT_VALUE,
          duration: isFocused ? 1500 : 300,
          easing: Easing.out(Easing.exp),
          useNativeDriver: false,
        }
      ),
      Animated.timing(
        fontScaleAnim,
        {
          toValue: isFocused ? 17 * screenRatio : FONT_SCALE_ANIM_INIT_VALUE,
          duration: isFocused ? 1000 : 300,
          easing: Easing.out(Easing.exp),
          useNativeDriver: false,
        }
      )
    ]).start()
  }

  const animatedWidth = fillAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  })

  return (
    <View style={style}>
      <Animated.Text
        style={{
          lineHeight: 18 * screenRatio,
          fontSize: fontScaleAnim,
          fontWeight: '700',
        }}
      >
        {title}
      </Animated.Text>
      <View style={styles.inputView}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MemoizedTextInput
              ref={ref}
              style={[styles.input, inputStyle]}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              onChangeText={onChangeText}
              value={value}
              keyboardType={keyboardType}
              maxLength={maxLength}
              editable={editable}
              onFocus={() => { handleFocus(true) }}
              onEndEditing={() => { handleFocus(false) }}
            />
            {insideComponent}
          </View>
          <View style={styles.borderContainer}>
            <Animated.View style={[styles.fillBar, { width: animatedWidth }]} />
          </View>
        </View>
        <View style={{ marginLeft: 20 }}>
          {rightComponent}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  borderContainer: {
    alignItems: 'flex-start',
    height: 2,
    backgroundColor: colors.gray2,
  },
  fillBar: {
    flex: 1,
    backgroundColor: colors.main,
  },
})

export default memo(forwardRef(AnimatedTextInput))
