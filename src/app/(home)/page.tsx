import { HeaderPublic } from '@/components/HeaderPublic'
import Link from 'next/link'
import styles from './index.module.css'
import cn from 'classnames'
import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <main>
            <HeaderPublic />
            <section className={styles.mainInfo}>
                <h1 className={styles.header}>
                    Welcome to{' '}
                    <span className={styles.wishWord}>WishList!</span>
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
