import { Popup } from '../Popup'
import { Button } from '../ui/button'
import styles from './index.module.css'
import cn from 'classnames'

interface ConfirmationPopupProps {
    visible: boolean
    onConfirm: () => void
    onClose: () => void
    headerText?: string
}

export const ConfirmationPopup = ({
    visible,
    onClose,
    headerText,
    onConfirm,
}: ConfirmationPopupProps) => {
    return (
        <Popup visible={visible} onClose={onClose}>
            <main className={styles.main}>
                <h3 className={styles.header}>
                    {headerText ? headerText : 'Are you shure?'}
                </h3>
                <section className={styles.sectionVariants}>
                    <Button
                        variant="outline"
                        className={cn(styles.btn, styles.confBtn)}
                        onClick={onConfirm}
                    >
                        yes
                    </Button>
                    <Button
                        onClick={onClose}
                        className={cn(styles.btn, styles.declBtn)}
                    >
                        no
                    </Button>
                </section>
            </main>
        </Popup>
    )
}
