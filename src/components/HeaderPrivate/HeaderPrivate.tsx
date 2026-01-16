'use client'
import Cookies from 'js-cookie'

import Link from 'next/link'
import { Button } from '../ui/button'
import styles from './index.module.css'
import { usePathname, useRouter } from 'next/navigation'

const LINKS = [
    { url: '/profile', text: 'Profile' },
    { url: '/friends', text: 'Friends' },
    { url: '/settings', text: 'Settings' },
]

export const HeaderPrivate = () => {
    const router = useRouter()
    const pathname = usePathname()

    const logout = () => {
        Cookies.remove('token')
        router.replace('/sign-in')
    }

    return (
        <header className={styles.header}>
            {LINKS.map(({ url, text }) => (
                <Button variant="link" key={url} disabled={pathname === url}>
                    <Link className={styles.headerLink} href={url}>
                        {text}
                    </Link>
                </Button>
            ))}
            <Button
                variant="link"
                className={styles.headerLink}
                onClick={logout}
            >
                Log out
            </Button>
        </header>
    )
}
