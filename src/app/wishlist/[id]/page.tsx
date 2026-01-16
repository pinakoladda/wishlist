import styles from './index.module.css'
import { getWishlist } from '@/lib/api/wishlist'
import { getServerApiOptions } from '@/lib/api/server_api'
import { Wishlist } from './components/Wishlist'

interface WishlistPageProps {
    params: Promise<{ id: string }>
}

export default async function Page({ params }: WishlistPageProps) {
    const { id } = await params

    const options = await getServerApiOptions()
    const wishlist = await getWishlist(id, options)

    return (
        <main className={styles.main}>
            <Wishlist wishlist={wishlist} />
        </main>
    )
}
