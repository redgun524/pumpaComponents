import React, { useRef } from 'react'

import ModalScreen from './ModalScreen'

const ModalContainer = () => {
  const slideModalRef = useRef()

  const onPressHandleSlideModal = () => {
    slideModalRef.current?.handleSlide()
  }

  return (
    <ModalScreen
      slideModalRef={slideModalRef}
      onPressHandleSlideModal={onPressHandleSlideModal}
    />
  )
}

export default ModalContainer
