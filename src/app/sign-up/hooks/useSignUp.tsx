'use client'

import { format } from 'date-fns'
import React, { ChangeEvent, FormEvent } from 'react'

type UpdateFn = (value: string) => void

export const useSignUp = () => {
    const [name, setName] = React.useState('')
    const [surname, setSurname] = React.useState('')
    const [dateOfBirth, setDateOfBirth] = React.useState(
        format(new Date(), 'yyyy-MM-dd')
    )
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')

    const onChange =
        (updateFn: UpdateFn) => (event: ChangeEvent<HTMLInputElement>) => {
            updateFn(event.target.value)
        }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (repeatPassword !== password) {
            setErrorMessage('the repeated password must be equal to password')
        }
    }

    return {
        fields: {
            name: { value: name, onChange: onChange(setName) },
            surname: { value: surname, onChange: onChange(setSurname) },
            dateOfBirth: {
                value: dateOfBirth,
                onChange: onChange(setDateOfBirth),
            },
            email: { value: email, onChange: onChange(setEmail) },
            password: { value: password, onChange: onChange(setPassword) },
            repeatPassword: {
                value: repeatPassword,
                onChange: onChange(setRepeatPassword),
            },
        },
        onSubmit,
        errorMessage,
    }
}
