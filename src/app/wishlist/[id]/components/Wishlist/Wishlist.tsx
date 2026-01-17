'use client'
import { usePopupProps } from '@/hooks/usePopupProps'
import { Wishlist as IWishlit } from '@/lib/api/wishlist'
import styles from './index.module.css'
import { Button } from '@/components/ui/button'
import { PopupAddWish } from '@/app/wishlist/components/PopupAddWish'
import { HeaderPrivate } from '@/components/HeaderPrivate'
import { WishCard } from '../WishCard'

interface WishlistProps {
    wishlist: IWishlit
}

export const Wishlist = ({ wishlist }: WishlistProps) => {
    const addWishPopupProps = usePopupProps()
    const allWishes = wishlist.wishes

    console.log(wishlist)
    return (
        <>
            <HeaderPrivate />
            <main className={styles.main}>
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
                        <p className={styles.paragraph}>
                            Includes wishes: {wishlist.wishes.length}
                        </p>
                        <section className={styles.wishesSection}>
                            {allWishes.map((wish) => {
                                return <WishCard key={wish.id} wish={wish} />
                            })}
                        </section>
                        <Button
                            onClick={addWishPopupProps.onOpen}
                            variant="outline"
                            className={styles.addWishBtn}
                        >
                            Make new wish!
                        </Button>
                    </div>
                )}
                <PopupAddWish
                    wishlistId={wishlist.id}
                    visible={addWishPopupProps.visible}
                    onClose={addWishPopupProps.onClose}
                />
            </main>
        </>
    )
}
