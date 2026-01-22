import { HeaderPrivate } from '@/components/HeaderPrivate'
import { Footer } from '@/components/Footer'
import { getAllWishlists } from '@/lib/api/wishlist'
import { getCurrentUser } from '@/lib/api/auth'
import { WishlistCard } from './components/WishlistCard'
import { ProfileInfo } from '@/components/ProfileInfo'
import styles from './index.module.css'
import { getAuthToken, getServerApiOptions } from '@/lib/api/server_api'

export default async function Profile() {
    const token = await getAuthToken()
    const apiOpts = await getServerApiOptions()

    const user = await getCurrentUser(token)
    const wishlists = await getAllWishlists(user.id, apiOpts)

    return (
        <>
            <HeaderPrivate />
            <main className={styles.main}>
                <ProfileInfo user={user} />
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
