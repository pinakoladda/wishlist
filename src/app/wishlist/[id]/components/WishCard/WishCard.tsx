import { Wish } from '@/lib/api/wish'
import styles from './index.module.css'
import { Button } from '@/components/ui/button'

interface WishCardProps {
    wish: Wish
}

export const WishCard = ({ wish }: WishCardProps) => {
    return (
        <main className={styles.card}>
            <h1 className={styles.header}>{wish.name}</h1>
            <p className={styles.description}>{wish.description}</p>
            <Button className={styles.reserveBtn} variant="outline">
                Reserve wish
            </Button>
        </main>
    )
}
