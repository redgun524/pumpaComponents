import React from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'

const TextButton = ({
  style,
  fontStyle,
  onPress,
  children,
}) => (
  <TouchableOpacity style={style} activeOpacity={0.6} onPress={onPress}>
    <Text style={fontStyle}>{children}</Text>
  </TouchableOpacity>
)

export default TextButton
