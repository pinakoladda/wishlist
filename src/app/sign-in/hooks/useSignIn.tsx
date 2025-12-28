import { signIn } from '@/lib/api/auth'
import { ApiError } from '@/types'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import React, { ChangeEvent, FormEvent } from 'react'

type UpdateFn = (value: string) => void

export const useSignIn = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')
    const router = useRouter()

    const onChange =
        (updateFn: UpdateFn) => (event: ChangeEvent<HTMLInputElement>) => {
            updateFn(event.target.value)
            setErrorMessage('')
        }
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        signIn({ email, password })
            .then((data) => {
                Cookies.set('token', data.token.accessToken)
                router.push('/profile')
            })
            .catch((err: ApiError) => {
                if (err.code === 'UNAUTHORIZED') {
                    setErrorMessage('Wrong email or password')
                    return
                }
                setErrorMessage(err.message)
            })
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
