import { Button } from '@/components/ui/button'
import styles from './index.module.css'

import { Wishlist } from '@/lib/api/wishlist'

interface WishCardProps {
    wishlist: Wishlist
}

export const WishlistCard = ({ wishlist }: WishCardProps) => {
    return (
        <main className={styles.card}>
            <div className={styles.container}>
                <h2 className={styles.header}>{wishlist.name}</h2>
                <p className={styles.paragraph}>{wishlist.description}</p>
                <a href="" className={styles.paragraph}></a>
            </div>
            <Button className={styles.btn} variant="outline">
                More info...
            </Button>
        </main>
    )
}
