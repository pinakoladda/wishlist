'use client'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import styles from './index.module.css'
import { PopupWishlist } from '../PopupWishlist'
import { usePopupProps } from '@/hooks/usePopupProps'

export const Footer = () => {
    const addWishlistPopupProps = usePopupProps()
    return (
        <footer className={styles.footer}>
            <Button
                onClick={addWishlistPopupProps.onOpen}
                variant="ghost"
                className={styles.addWishBtn}
            >
                <Plus className={styles.btnIcon} size={40} />
                <p className={styles.btnText}>add wishlist</p>
            </Button>
            <PopupWishlist
                visible={addWishlistPopupProps.visible}
                onClose={addWishlistPopupProps.onClose}
            />
        </footer>
    )
}
