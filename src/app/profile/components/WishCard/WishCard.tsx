import { Button } from '@/components/ui/button'

import styles from './index.module.css'

export const WishCard = () => {
    return (
        <main className={styles.card}>
            <div className={styles.container}>
                <img alt="" src="/avatar.jpg" className={styles.cardAvatar} />
                <h2 className={styles.header}>Wish name</h2>
                <p className={styles.paragraph}>Cost: 100$</p>
                <a href="" className={styles.paragraph}></a>
            </div>
            <Button>More info...</Button>
        </main>
    )
}
