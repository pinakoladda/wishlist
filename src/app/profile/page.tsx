'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import styles from './index.module.css'
import { BadgePlus } from 'lucide-react'
import { HeaderPrivate } from '@/components/HeaderPrivate'
import { Footer } from '@/components/Footer'
import { getAllWishlists, Wishlist } from '@/lib/api/wishlist'
import React from 'react'
import { getCurrentUser } from '@/lib/api/auth'
import { WishlistCard } from './components/WishlistCard'

export default function Profile() {
    const [wishlists, setWishlists] = React.useState<Wishlist[]>([])

    React.useEffect(() => {
        getCurrentUser()
            .then((user) => getAllWishlists(user.id))
            .then((data) => setWishlists(data))
    }, [])
    return (
        <>
            <HeaderPrivate />
            <main className={styles.main}>
                <section className={styles.avatarContainer}>
                    <Avatar className={styles.avatar}>
                        <AvatarImage src="/avatar.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </section>
                <section className={styles.userInfo}>
                    <h3 className={styles.userName}>User name</h3>
                    <p className={styles.paragraph}>@login</p>
                    <p className={styles.paragraph}>date of birth</p>
                </section>
                <section className={styles.sectionWish}>
                    {wishlists.length <= 0 ? (
                        <>
                            <p>Still have no wishes?? Let`s make some here!</p>
                            <button className={styles.addWishBtn}>
                                <BadgePlus
                                    className={styles.btnIcon}
                                    size={80}
                                    strokeWidth={1.5}
                                />
                            </button>
                        </>
                    ) : (
                        <button className={styles.addWishBtn}>
                            ✨ Make a wish! ✨
                        </button>
                    )}
                    <section className={styles.cardsContainer}>
                        {wishlists.map((wishlist) => {
                            return (
                                <WishlistCard
                                    key={wishlist.id}
                                    wishlist={wishlist}
                                />
                            )
                        })}
                    </section>
                </section>
                <Footer />
            </main>
        </>
    )
}
