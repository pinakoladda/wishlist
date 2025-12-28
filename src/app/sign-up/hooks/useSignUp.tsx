'use client'

import { signUp } from '@/lib/api/auth'
import { ApiError } from '@/types'
import { format } from 'date-fns'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent } from 'react'

type UpdateFn = (value: string) => void

export const useSignUp = () => {
    const [name, setName] = React.useState('')
    const [userName, setUserName] = React.useState('')
    const [dateOfBirth, setDateOfBirth] = React.useState(
        format(new Date(), 'yyyy-MM-dd')
    )
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')
    const router = useRouter()

    const onChange =
        (updateFn: UpdateFn) => (event: ChangeEvent<HTMLInputElement>) => {
            updateFn(event.target.value)
            setErrorMessage('')
        }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (repeatPassword !== password) {
            setErrorMessage('the repeated password must be equal to password')
            return
        }
        signUp({
            email: email,
            password: password,
            username: userName,
            name: name,
        })
            .then((data) => {
                Cookies.set('token', data.token.accessToken)
                router.push('/profile')
            })
            .catch((err: ApiError) => {
                if (err.code === 'VALIDATION_ERROR' && err.details) {
                    const error = err.details[0]
                    setErrorMessage(
                        typeof error === 'string' ? error : error.message
                    )
                    return
                }
                setErrorMessage(err.message)
            })
    }

    return {
        fields: {
            name: { value: name, onChange: onChange(setName) },
            userName: { value: userName, onChange: onChange(setUserName) },
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
