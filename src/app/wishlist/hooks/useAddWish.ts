import React, { ChangeEvent, FormEvent } from 'react'

type UpdateFn = (value: string) => void

export const useAddWish = () => {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [currency, setCurrency] = React.useState('')
    const [link, setLink] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')

    const onChange =
        (updateFn: UpdateFn) =>
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            updateFn(event.target.value)
            setErrorMessage('')
        }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return {
        fields: {
            name: { value: name, onChange: onChange(setName) },
            description: {
                value: description,
                onChange: onChange(setDescription),
            },
            price: { value: price, onChange: onChange(setPrice) },
            currency: { value: currency, onChange: onChange(setCurrency) },
            link: { value: link, onChange: onChange(setLink) },
        },
        errorMessage,
        onSubmit,
    }
}
