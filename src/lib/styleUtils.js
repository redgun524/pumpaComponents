import React from 'react'
import { View, Platform, Dimensions } from 'react-native'
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper'

export const screenWidth = Dimensions.get('window').width
export const screenHeight = Dimensions.get('window').height
export const screenRatio = screenWidth / 375
export const isSE = screenWidth < 330
export const isShortWidth = screenWidth < 370
export const isShortHeight = screenHeight < 600
export const isShortHeight2 = screenHeight < 650
export const isTablet = screenWidth > 600 && screenHeight > 1000

export const IS_IOS = Platform.OS === 'ios'
export const IS_ANDROID = Platform.OS === 'android'

export const isX = isIphoneX()
export const bottomSpace = getBottomSpace()

export const colors = {
  main: 'rgb(242, 81, 48)',
  gray2: 'rgb(179, 179, 179)',
}

export const fonts = {
  bold: 'NotoSansCJKkr-Bold',
  medium: 'NotoSansCJKkr-Medium',
  black: 'NotoSansCJKkr-Black',
  regular: 'NotoSansCJKkr-Regular',
}

export const hitSlop = {
  top: 15,
  bottom: 15,
  left: 15,
  right: 15,
}

export const androidNavigationOption = Platform.select({
  android: { headerLeft: <View /> },
})
