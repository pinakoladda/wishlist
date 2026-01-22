'use client'
import { Label } from '@radix-ui/react-label'
import styles from './index.module.css'
import { Input } from '@/components/ui/input'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Button } from '@/components/ui/button'
import { useChangePassword } from '../../hooks/useChangePassword'

export const PasswordChangeForm = () => {
    const { onSubmit, fields, errorMessage } = useChangePassword()
    return (
        <form onSubmit={onSubmit} className={styles.changePasswordSection}>
            <h2 className={styles.subheader}>Change password</h2>
            <div className={styles.passwordContainer}>
                <Label className={styles.label} htmlFor="currentPassword">
                    Current password:
                </Label>
                <Input
                    type="password"
                    className={styles.input}
                    id="currentPassword"
                    {...fields.currentPassword}
                />
            </div>
            <div className={styles.passwordContainer}>
                <Label className={styles.label} htmlFor="newPassword">
                    New password:
                </Label>
                <Input
                    type="password"
                    id="newPassword"
                    {...fields.newPassword}
                />
            </div>
            <div className={styles.passwordContainer}>
                <Label className={styles.label} htmlFor="repeatPassword">
                    Repeat password:
                </Label>
                <Input
                    type="password"
                    id="repeatPassword"
                    {...fields.repeatPassword}
                />
            </div>
            <ErrorMessage errorMessage={errorMessage} />
            <Button
                type="submit"
                variant="outline"
                className={styles.sumbitBtn}
            >
                Save changes
            </Button>
        </form>
    )
}
