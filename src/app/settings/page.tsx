'use client'
import styles from './index.module.css'
import { HeaderPrivate } from '@/components/HeaderPrivate'
import { ProfileInfo } from '@/components/ProfileInfo'
import { PasswordChangeForm } from './components/PasswordChangeForm'

export default function Settings() {
    return (
        <main className={styles.settings}>
            <HeaderPrivate />
            <h1 className={styles.header}>Settings</h1>
            <ProfileInfo />
            <PasswordChangeForm />
        </main>
    )
}
