'use client'
import React from 'react'

export const usePopupProps = () => {
    const [visible, setVisible] = React.useState(false)

    const onClose = () => {
        setVisible(false)
    }
    const onOpen = () => {
        setVisible(true)
    }
    return { visible, onClose, onOpen }
}
