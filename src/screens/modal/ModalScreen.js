import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { TextButton } from '../../components/common'
import { SlideModal } from '../../components/modal'
import {
  hitSlop,
  screenWidth,
  bottomSpace,
} from '../../lib/styleUtils'

const ModalScreen = ({
  slideModalRef,
  onPressHandleSlideModal,
}) => {
  const renderSlideModalContent = () => (
    <View style={styles.slideModalView}>
      <Text>✨ SlideModal ✨</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <TextButton
        fontStyle={{ fontSize: 17 }}
        onPress={onPressHandleSlideModal}
      >
        handleSlideModal
      </TextButton>
      <SlideModal
        height={400}
        ref={slideModalRef}
        content={renderSlideModalContent()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  slideModalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})

export default ModalScreen
