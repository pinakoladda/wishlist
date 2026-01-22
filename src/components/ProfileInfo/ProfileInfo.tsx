import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import styles from './index.module.css'
import { User } from '@/types'

interface ProfileInfoProps {
    user: User
}

export const ProfileInfo = ({ user }: ProfileInfoProps) => {
    return (
        <div className={styles.userInfoContainer}>
            <section className={styles.avatarContainer}>
                <Avatar className={styles.avatar}>
                    <AvatarImage src="/avatar.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </section>
            <section className={styles.userInfo}>
                <h3 className={styles.userName}>{user.name}</h3>
                <p className={styles.paragraph}>{user.username}</p>
                <p className={styles.paragraph}>07/08/1999 🥳</p>
            </section>
        </div>
    )
}
