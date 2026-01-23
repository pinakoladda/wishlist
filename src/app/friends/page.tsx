import { HeaderPrivate } from '@/components/HeaderPrivate'
import styles from './index.module.css'
import { FriendCard } from './components/FriendCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

const FRIENDS = [
    { name: 'Petro', dateofBrth: '09/08/2001🥳' },
    { name: 'Anna', dateofBrth: '09/08/2001' },
    { name: 'Kira', dateofBrth: '09/08/2001' },
]

export default function Friends() {
    return (
        <main className={styles.main}>
            <HeaderPrivate />
            <h1 className={styles.header}>Friends</h1>
            <div className={styles.searchContainer}>
                <Input className={styles.search} placeholder="search" />
                <Button className={styles.searchBtn} variant="outline">
                    <Search />
                </Button>
            </div>
            <section className={styles.sectionFriends}>
                {FRIENDS.map((friend) => {
                    return (
                        <FriendCard
                            key={friend.name}
                            name={friend.name}
                            dateOfBrth={friend.dateofBrth}
                        />
                    )
                })}
            </section>
        </main>
    )
}
