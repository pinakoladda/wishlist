'use client'
import { usePopupProps } from '@/hooks/usePopupProps'
import { Wishlist as IWishlit } from '@/lib/api/wishlist'
import styles from './index.module.css'
import { Button } from '@/components/ui/button'
import { PopupAddWish } from '@/app/wishlist/components/PopupAddWish'
import { HeaderPrivate } from '@/components/HeaderPrivate'
import { WishCard } from '../WishCard'
import { X } from 'lucide-react'
import { ConfirmationPopup } from '@/components/ConfirmationPopup'

interface WishlistProps {
    wishlist: IWishlit
}

export const Wishlist = ({ wishlist }: WishlistProps) => {
    const addWishPopupProps = usePopupProps()
    const confirmationPopupProps = usePopupProps()
    const allWishes = wishlist.wishes

    console.log(wishlist)
    return (
        <>
            <HeaderPrivate />
            <main className={styles.wishlist}>
                <h1 className={styles.name}>{wishlist.name}</h1>
                <p className={styles.description}>{wishlist.description}</p>
                {wishlist.wishes.length <= 0 ? (
                    <div className={styles.container}>
                        <p className={styles.paragraph}>Wishlist is empty :c</p>
                        <Button
                            className={styles.addWishBtn}
                            onClick={addWishPopupProps.onOpen}
                            variant="ghost"
                        >
                            Let`s make your first wish!
                        </Button>
                    </div>
                ) : (
                    <div className={styles.container}>
                        {/* <p className={styles.paragraph}>
                            Includes wishes: {wishlist.wishes.length}
                        </p> */}
                        <Button
                            onClick={addWishPopupProps.onOpen}
                            variant="outline"
                            className={styles.addWishBtn}
                        >
                            Make new wish
                        </Button>
                        <section className={styles.wishesSection}>
                            {allWishes.map((wish) => {
                                return <WishCard key={wish.id} wish={wish} />
                            })}
                        </section>
                    </div>
                )}
                <PopupAddWish
                    wishlistId={wishlist.id}
                    visible={addWishPopupProps.visible}
                    onClose={addWishPopupProps.onClose}
                />
                <Button
                    onClick={confirmationPopupProps.onOpen}
                    variant="ghost"
                    className={styles.deleteBtn}
                >
                    <X className={styles.deleteBtnIcon} />
                </Button>
                <ConfirmationPopup
                    visible={confirmationPopupProps.visible}
                    onClose={confirmationPopupProps.onClose}
                    headerText="Delete this Wishlist?"
                />
            </main>
        </>
    )
}
