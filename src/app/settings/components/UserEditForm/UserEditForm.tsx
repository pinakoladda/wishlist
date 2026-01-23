'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import styles from './index.module.css'
import { User } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useEditUser } from '../../hooks/useEditUser'
import { Pencil } from 'lucide-react'

interface UserEditFormProps {
    user: User
}

export const UserEditForm = ({ user }: UserEditFormProps) => {
    const { fields, onEdit, isEdit, onSubmit } = useEditUser({ user })
    return (
        <>
            <>
                {isEdit ? (
                    <form
                        onSubmit={onSubmit}
                        className={styles.editSectionForm}
                    >
                        <h2 className={styles.subheader}>Edit personal info</h2>
                        <div className={styles.editUserInfo}>
                            <label
                                htmlFor="avatarInput"
                                className={styles.avatarLabelContainer}
                            >
                                <input
                                    id="avatarInput"
                                    type="file"
                                    {...fields.avatar}
                                    className={styles.editAvatarInput}
                                />
                                <Avatar className={styles.avatar}>
                                    <AvatarImage src="/avatar.jpg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                    <Pencil
                                        size={60}
                                        strokeWidth={1.25}
                                        className={styles.editImg}
                                    />
                                </Avatar>
                            </label>
                        </div>
                        <div className={styles.editUserInfo}>
                            <Label className={styles.label} htmlFor="name">
                                Name:
                            </Label>
                            <Input
                                className={styles.input}
                                id="name"
                                placeholder={user.name}
                                {...fields.name}
                            />
                        </div>
                        <div className={styles.editUserInfo}>
                            <Label className={styles.label} htmlFor="userName">
                                User name:
                            </Label>
                            <Input
                                id="userName"
                                placeholder={user.username}
                                {...fields.userName}
                            />
                        </div>
                        <div className={styles.editUserInfo}>
                            <Label className={styles.label} id="dateOfBrth">
                                Birthday:
                            </Label>
                            <Input
                                placeholder="date of birth"
                                {...fields.date}
                            />
                        </div>
                        <Button
                            className={styles.btn}
                            variant="outline"
                            type="submit"
                        >
                            Save
                        </Button>
                    </form>
                ) : (
                    <section className={styles.editUserSection}>
                        <h2 className={styles.subheader}>Edit personal info</h2>
                        <Avatar className={styles.avatar}>
                            <AvatarImage src="/avatar.jpg" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className={styles.staticUserInfo}>
                            <p className={styles.paragraph}>{user.name}</p>
                            <p className={styles.paragraph}>{user.username}</p>
                            <p className={styles.paragraph}>07/08/1999 🥳</p>
                        </div>
                        <Button
                            onClick={onEdit}
                            className={styles.btn}
                            variant="outline"
                        >
                            Edit info
                        </Button>
                    </section>
                )}
            </>
        </>
    )
}
