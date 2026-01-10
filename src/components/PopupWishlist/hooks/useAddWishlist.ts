'use client'
import { addWishlist } from '@/lib/api/wishlist'
import { ApiError } from '@/types'
import { CheckedState } from '@radix-ui/react-checkbox'
import React, { ChangeEvent, FormEvent } from 'react'

type UpdateFn = (value: string) => void

export const useAddWishlist = () => {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [visibility, setVisibility] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')

    const onChange =
        (updateFn: UpdateFn) =>
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            updateFn(event.target.value)
        }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addWishlist({
            name: name,
            description: description,
            visibility: visibility ? 'public' : 'private',
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error: ApiError) => {
                setErrorMessage(error.message)
                console.log(errorMessage)
            })
    }

    const onChangeVisibility = (value: CheckedState) => {
        setVisibility(value as boolean)
    }

    return {
        fields: {
            name: { value: name, onChange: onChange(setName) },
            description: {
                value: description,
                onChange: onChange(setDescription),
            },
            visibility: { checked: visibility, onChange: onChangeVisibility },
        },
        onSubmit,
        // errorMessage,
    }
}
