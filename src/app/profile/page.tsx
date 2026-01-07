import { Header } from '@/components/Header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import styles from './index.module.css'
import { BadgePlus } from 'lucide-react'
import { WishCard } from './components/WishCard'

const WISHES = ['']

export default function Profile() {
    return (
        <>
            <Header />
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
                    {WISHES.length <= 0 ? (
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
                        ''
                    )}
                    <button className={styles.addWishBtn}>
                        {/* <BadgePlus
                            className={styles.btnIcon}
                            size={80}
                            strokeWidth={1.5}
                        /> */}
                        ✨ Make a wish! ✨
                    </button>
                    <section className={styles.cardsContainer}>
                        <WishCard />
                        <WishCard />
                        <WishCard />
                        <WishCard />
                        <WishCard />
                        <WishCard />
                    </section>
                </section>
            </main>
        </>
    )
}
