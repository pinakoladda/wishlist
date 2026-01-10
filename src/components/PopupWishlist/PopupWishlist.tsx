'use client'
import { Popup } from '@/components/Popup'
import styles from './index.module.css'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DatePicker } from '@/components/DatePicker'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { CheckBox } from '../CheckBox'
import { useAddWishlist } from './hooks/useAddWishlist'

interface PopupAddWishlistProps {
    visible: boolean
    onClose: () => void
}

export const PopupWishlist = ({ visible, onClose }: PopupAddWishlistProps) => {
    const { fields, onSubmit } = useAddWishlist()
    return (
        <Popup visible={visible} onClose={onClose}>
            <div className={styles.main}>
                <h3 className={styles.header}>Create Wishlist:</h3>
                <form className={styles.form} onSubmit={onSubmit}>
                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Label htmlFor="wishlistName" className={styles.label}>
                            Wishlist name:
                        </Label>
                        <Input
                            className={styles.input}
                            id="wishlistName"
                            {...fields.name}
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Label htmlFor="dateOfEvent" className={styles.label}>
                            Date of event:
                            <span className={styles.labelOptional}>
                                (optional)
                            </span>
                        </Label>
                        <DatePicker id="dateOfEvent" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Label className={styles.label}>
                            Description
                            <span className={styles.labelOptional}>
                                (optional)
                            </span>
                        </Label>
                        <Textarea
                            placeholder="Description"
                            {...fields.description}
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Label className={styles.label}>
                            Accessibility:
                            <span className={styles.labelOptional}>
                                (public default)
                            </span>
                        </Label>
                        <CheckBox
                            id="private"
                            labelText="Private"
                            {...fields.visibility}
                        />
                    </div>
                    <Button className={styles.submitBtn} type="submit">
                        Create Wishlist
                    </Button>
                </form>
            </div>
        </Popup>
    )
}
