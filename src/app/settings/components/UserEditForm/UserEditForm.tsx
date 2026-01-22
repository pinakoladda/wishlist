'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import styles from './index.module.css'
import { User } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useEditUser } from '../../hooks/useEditUser'

interface UserEditFormProps {
    user: User
}

export const UserEditForm = ({ user }: UserEditFormProps) => {
    const { fields, onEdit, isEdit, onSubmit } = useEditUser({ user })
    return (
        <>
            <section className={styles.editUserSection}>
                <h2 className={styles.subheader}>Edit personal info</h2>
                {isEdit ? (
                    <form onSubmit={onSubmit}>
                        <div className={styles.container}>
                            <Avatar className={styles.avatar}>
                                <AvatarImage src="/avatar.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className={styles.container}>
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
                        <div className={styles.container}>
                            <Label className={styles.label} htmlFor="userName">
                                User name:
                            </Label>
                            <Input
                                id="userName"
                                placeholder={user.username}
                                {...fields.userName}
                            />
                        </div>
                        <div className={styles.container}>
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
                    <>
                        <Avatar className={styles.avatar}>
                            <AvatarImage src="/avatar.jpg" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
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
                    </>
                )}
            </section>
        </>
    )
}
