import { addWish, AddWishBody } from '@/lib/api/wish'
import { ApiError } from '@/types'
import React, { ChangeEvent, FormEvent } from 'react'

type UpdateFn = (value: string) => void

interface useAddWishProps {
    onClose: () => void
}

export const useAddWish = ({ onClose }: useAddWishProps) => {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [currency, setCurrency] =
        React.useState<AddWishBody['currency']>('USD')
    const [link, setLink] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')

    const onChange =
        (updateFn: UpdateFn) =>
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            updateFn(event.target.value)
            setErrorMessage('')
        }

    const onChangeSelect = (value: string) => {
        setCurrency(value as AddWishBody['currency'])
        setErrorMessage('')
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(link)
        addWish({
            name,
            description,
            price: Number(price),
            currency,
            url: link,
            status: 'available',
        })
            .then(() => {
                onClose()
                setName('')
                setDescription('')
                setLink('')
                setCurrency('USD')
                setPrice('')
                console.log('ok')
            })
            .catch((error: ApiError) => {
                setErrorMessage(error.message)
                console.log(errorMessage)
            })
    }

    return {
        fields: {
            name: { value: name, onChange: onChange(setName) },
            description: {
                value: description,
                onChange: onChange(setDescription),
            },
            price: { value: price, onChange: onChange(setPrice) },
            currency: { value: currency, onSelect: onChangeSelect },
            link: { value: link, onChange: onChange(setLink) },
        },
        errorMessage,
        onSubmit,
    }
}
