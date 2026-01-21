import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import styles from './index.module.css'

export const ProfileInfo = () => {
    return (
        <div className={styles.userInfoContainer}>
            <section className={styles.avatarContainer}>
                <Avatar className={styles.avatar}>
                    <AvatarImage src="/avatar.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </section>
            <section className={styles.userInfo}>
                <h3 className={styles.userName}>Nina</h3>
                <p className={styles.paragraph}>@pinakolada</p>
                <p className={styles.paragraph}>08/07/1999 🥳</p>
            </section>
        </div>
    )
}
