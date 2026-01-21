import { Button } from '@/components/ui/button'
import styles from './index.module.css'

import { Wishlist } from '@/lib/api/wishlist'
import Link from 'next/link'

interface WishCardProps {
    wishlist: Wishlist
}

export const WishlistCard = ({ wishlist }: WishCardProps) => {
    return (
        <main className={styles.card}>
            <div className={styles.container}>
                <h2 className={styles.header}>{wishlist.name}</h2>
                <a href="" className={styles.paragraph}></a>
            </div>
            <Link
                className={styles.moreBtnLink}
                href={`/wishlist/${wishlist.id}`}
            >
                <Button className={styles.moreBtn} variant="outline">
                    More info...
                </Button>
            </Link>
        </main>
    )
}
