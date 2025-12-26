import { Header } from '@/components/Header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import styles from './index.module.css'
export default function Profile() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Avatar>
                    <AvatarImage src="/avatar.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </main>
        </>
    )
}
