import cn from 'classnames'
import styles from './index.module.css'
import { Button } from '../ui/button'
import { X } from 'lucide-react'

interface PopupProps {
    visible: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Popup = ({ visible, onClose, children }: PopupProps) => {
    return (
        <div className={cn(styles.popup, visible ? styles.popupVisible : '')}>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.content}>
                <Button
                    className={styles.closeBtn}
                    onClick={onClose}
                    variant="ghost"
                >
                    <X className={styles.btnIcon} size={32} />
                </Button>
                {children}
            </div>
        </div>
    )
}
