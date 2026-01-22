import { updateUserInfo } from '@/lib/api/auth'
import { User } from '@/types'
import React, { ChangeEvent, FormEvent } from 'react'

interface useEditUserProps {
    user: User
}

type UpdateFn = (value: string) => void

export const useEditUser = ({ user }: useEditUserProps) => {
    const [name, setName] = React.useState(user.name)
    const [userName, setUserName] = React.useState(user.username)
    const [date, setDate] = React.useState('')
    const [isEdit, setIsEdit] = React.useState(false)

    const onChange =
        (updateFn: UpdateFn) => (event: ChangeEvent<HTMLInputElement>) => {
            updateFn(event.target.value)
        }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        updateUserInfo({
            name,
            username: userName,
        }).then(() => {
            setIsEdit(false)
            console.log('submit')
        })
    }

    const onEdit = () => {
        setIsEdit(true)
        console.log('click')
    }

    return {
        fields: {
            name: { value: name, onChange: onChange(setName) },
            userName: { value: userName, onChange: onChange(setUserName) },
            date: { value: date, onChange: onChange(setDate) },
        },
        onSubmit,
        onEdit,
        isEdit,
    }
}
