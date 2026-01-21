import { updateUserInfo } from '@/lib/api/auth'
import React, { ChangeEvent, FormEvent } from 'react'

type UpdateFn = (value: string) => void

export const useChangePassword = () => {
    const [currentPassword, setCurrentPassword] = React.useState('')
    const [newPassword, setNewPassword] = React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (newPassword !== repeatPassword) {
            setErrorMessage('New password and repeat password is not equal')
            throw new Error('New password and repeat password is not equal')
        }

        updateUserInfo({
            password: newPassword,
        })
    }

    const onChangePassword =
        (updateFn: UpdateFn) => (event: ChangeEvent<HTMLInputElement>) => {
            updateFn(event.target.value)
        }

    return {
        fields: {
            currentPassword: {
                value: currentPassword,
                onChange: onChangePassword(setCurrentPassword),
            },
            newPassword: {
                value: newPassword,
                onChange: onChangePassword(setNewPassword),
            },
            repeatPassword: {
                value: repeatPassword,
                onChange: onChangePassword(setRepeatPassword),
            },
        },
        onSubmit,
        errorMessage,
    }
}
