'use client'
import { usePopupProps } from '@/hooks/usePopupProps'
import { Wishlist as IWishlit } from '@/lib/api/wishlist'
import styles from './index.module.css'
import { Button } from '@/components/ui/button'
import { PopupAddWish } from '@/app/wishlist/components/PopupAddWish'
import { HeaderPrivate } from '@/components/HeaderPrivate'

interface WishlistProps {
    wishlist: IWishlit
}

export const Wishlist = ({ wishlist }: WishlistProps) => {
    const addWishPopupProps = usePopupProps()

    return (
        <>
            <HeaderPrivate />
            <main className={styles.main}>
                <h1 className={styles.name}>{wishlist.name}</h1>
                <p className={styles.description}>{wishlist.description}</p>
                {wishlist.wishIds.length <= 0 ? (
                    <>
                        {/* <p className={styles.paragraph}>Wishlist is empty :c</p> */}
                        <Button
                            className={styles.addWishBtn}
                            onClick={addWishPopupProps.onOpen}
                            variant="ghost"
                        >
                            Let`s make your first wish!
                        </Button>
                    </>
                ) : (
                    <p>
                        {wishlist.name} includes {wishlist.wishIds.length}
                        <Button
                            onClick={addWishPopupProps.onOpen}
                            variant="outline"
                        >
                            Make new wish!
                        </Button>
                    </p>
                )}

                <PopupAddWish
                    visible={addWishPopupProps.visible}
                    onClose={addWishPopupProps.onClose}
                />
            </main>
        </>
    )
}
