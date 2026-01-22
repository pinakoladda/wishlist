import styles from './index.module.css'
import { HeaderPrivate } from '@/components/HeaderPrivate'
import { PasswordChangeForm } from './components/PasswordChangeForm'
import { getCurrentUser } from '@/lib/api/auth'
import { getAuthToken } from '@/lib/api/server_api'
import { UserEditForm } from './components/UserEditForm/UserEditForm'

export default async function Settings() {
    const token = await getAuthToken()
    const user = await getCurrentUser(token)

    console.log(user)

    return (
        <main className={styles.settings}>
            <HeaderPrivate />
            <h1 className={styles.header}>Settings</h1>
            <div className={styles.container}>
                <div>
                    <UserEditForm user={user} />
                </div>
                <PasswordChangeForm />
            </div>
        </main>
    )
}
