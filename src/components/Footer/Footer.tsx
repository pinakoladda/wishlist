import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import styles from './index.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Button variant="ghost" className={styles.addWishBtn}>
                <Plus className={styles.btnIcon} size={40} />
                <p className={styles.btnText}>Add wishlist</p>
            </Button>
        </footer>
    )
}
