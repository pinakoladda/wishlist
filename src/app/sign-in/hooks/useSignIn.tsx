import React, { ChangeEvent, FormEvent } from 'react'

type UpdateFn = (value: string) => void

export const useSignIn = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')

    const onChange =
        (updateFn: UpdateFn) => (event: ChangeEvent<HTMLInputElement>) => {
            updateFn(event.target.value)
        }
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('ok')
        setErrorMessage('')
    }

    return {
        fields: {
            email: { value: email, onChange: onChange(setEmail) },
            password: { value: password, onChange: onChange(setPassword) },
        },
        onSubmit,
        errorMessage,
    }
}
