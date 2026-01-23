'use client'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import styles from './index.module.css'
import { ConfirmationPopup } from '@/components/ConfirmationPopup'
import { usePopupProps } from '@/hooks/usePopupProps'

interface FriendCardProps {
    name: string
    dateOfBrth: string
}

export const FriendCard = ({ name, dateOfBrth }: FriendCardProps) => {
    const unfollowConfirmPopupProps = usePopupProps()
    const unfollowFriend = () => {
        console.log('friend was unfollow')
        unfollowConfirmPopupProps.onClose()
    }
    return (
        <section className={styles.card}>
            <div className={styles.container}>
                <Avatar className={styles.avatar}>
                    <AvatarImage src="/avatar.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className={styles.infoContainer}>
                    <h4 className={styles.name}>{name}</h4>
                    <p className={styles.paragraph}>{dateOfBrth}</p>
                    <p className={styles.paragraph}>2 active wishlists</p>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <Button variant="outline" className={styles.btn}>
                    View profile
                </Button>
                <Button
                    onClick={unfollowConfirmPopupProps.onOpen}
                    variant="outline"
                    className={styles.btnUnfollow}
                >
                    Unfollow
                </Button>
            </div>
            <ConfirmationPopup
                onConfirm={unfollowFriend}
                {...unfollowConfirmPopupProps}
                headerText="Are you sure?"
            />
        </section>
    )
}
