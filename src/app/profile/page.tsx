'use client'
import React from 'react'
import { HeaderPrivate } from '@/components/HeaderPrivate'
import { Footer } from '@/components/Footer'
import { getAllWishlists, Wishlist } from '@/lib/api/wishlist'
import { getCurrentUser } from '@/lib/api/auth'
import { WishlistCard } from './components/WishlistCard'
import { ProfileInfo } from '@/components/ProfileInfo'
import styles from './index.module.css'

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
                <ProfileInfo />
                <section className={styles.sectionAddingWish}>
                    {wishlists.length <= 0 ? (
                        <p className={styles.paragraph}>
                            Oh, poor thing, u still haven`t got any wishes...
                        </p>
                    ) : (
                        <p className={styles.paragraph}>
                            You have{' '}
                            {wishlists.length === 1 && ' one active wishlist '}
                            {wishlists.length !== 1 &&
                                wishlists.length + ' active wishlists '}
                            💕
                        </p>
                    )}
                </section>
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
                <Footer />
            </main>
        </>
    )
}
