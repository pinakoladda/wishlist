'use client'
import { addWishlist } from '@/lib/api/wishlist'
import { ApiError } from '@/types'
import { CheckedState } from '@radix-ui/react-checkbox'
import React, { ChangeEvent, FormEvent } from 'react'

type UpdateFn = (value: string) => void

interface useAddWishlistProps {
    onClose: () => void
}

export const useAddWishlist = ({ onClose }: useAddWishlistProps) => {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [isPrivate, setIsPrivate] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')

    const onChange =
        (updateFn: UpdateFn) =>
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            updateFn(event.target.value)
            setErrorMessage('')
        }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addWishlist({
            name: name,
            description: description,
            visibility: isPrivate ? 'private' : 'public',
        })
            .then(() => {
                onClose()
                setName('')
                setDescription('')
                setErrorMessage('')
            })
            .catch((error: ApiError) => {
                setErrorMessage(error.message)
                console.log(errorMessage)
            })
    }

    const onChangeVisibility = (value: CheckedState) => {
        setIsPrivate(value as boolean)
    }

    return {
        fields: {
            name: { value: name, onChange: onChange(setName) },
            description: {
                value: description,
                onChange: onChange(setDescription),
            },
            isPrivate: { checked: isPrivate, onChange: onChangeVisibility },
        },
        onSubmit,
        errorMessage,
    }
}
