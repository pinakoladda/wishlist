'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import styles from './index.module.css'
import { usePathname } from 'next/navigation'

const LINKS = [
    { url: '/sign-in', text: 'Sign-in' },
    { url: '/', text: 'Main Page' },
]

export const Header = () => {
    const pathname = usePathname()

    return (
        <header className={styles.header}>
            {LINKS.map(({ url, text }) => (
                <Button variant="link" key={url} disabled={pathname === url}>
                    <Link href={url}>{text}</Link>
                </Button>
            ))}
        </header>
    )
}
