import { Header } from '@/components/Header'
import Link from 'next/link'
import styles from './index.module.css'
import { Carattere } from 'next/font/google'
import cn from 'classnames'
import { Button } from '@/components/ui/button'

const carattere = Carattere({
    weight: ['400'],
    subsets: ['latin'],
    fallback: ['Comic_Relief', 'Arial', 'sans-serif'],
})

export default function Home() {
    return (
        <main>
            <Header />
            <section className={styles.mainInfo}>
                <h1 className={styles.header}>
                    Welcome to{' '}
                    <span
                        className={cn(
                            `${carattere.className}`,
                            styles.wishWord
                        )}
                    >
                        WishList!
                    </span>
                </h1>
                <h4 className={styles.paragraph}>
                    here you can organize your wishes and share them with
                    others!
                </h4>
                <p className={cn(styles.paragraph, styles.signIn)}>
                    Let your Wish come true!
                    <Button className={styles.link} variant="link">
                        <Link href="sign-up">create account now!</Link>
                    </Button>
                </p>
            </section>
        </main>
    )
}
