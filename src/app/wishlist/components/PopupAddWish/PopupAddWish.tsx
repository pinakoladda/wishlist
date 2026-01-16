import { Popup } from '@/components/Popup'
import styles from './index.module.css'
import { Label } from '@radix-ui/react-label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAddWish } from '../../hooks/useAddWish'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Select } from '@/components/Select'
import cn from 'classnames'

interface PopupAddWishprops {
    visible: boolean
    onClose: () => void
}

const CURRENCY = ['USD', 'EUR', 'Zl']

export const PopupAddWish = ({ visible, onClose }: PopupAddWishprops) => {
    const { fields, errorMessage, onSubmit } = useAddWish({ onClose })

    return (
        <Popup visible={visible} onClose={onClose}>
            <div className={styles.main}>
                <h3 className={styles.header}>Let`s make a Wish:</h3>
                <form className={styles.form} onSubmit={onSubmit}>
                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Label htmlFor="wishLink" className={styles.label}>
                            Add link:
                        </Label>
                        <Input
                            className={styles.input}
                            {...fields.link}
                            id="wishLink"
                            required
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Label htmlFor="wishName" className={styles.label}>
                            Name:
                        </Label>
                        <Input
                            className={styles.input}
                            id="wishName"
                            {...fields.name}
                            required
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Label className={styles.label}>
                            Description{' '}
                            <span className={styles.labelOptional}>
                                (optional)
                            </span>
                        </Label>
                        <Textarea
                            placeholder="Description"
                            {...fields.description}
                        />
                    </div>
                    <div className={styles.priceContainer}>
                        <div className="grid w-full max-w-sm items-center gap-2">
                            <Label htmlFor="wishPrice" className={styles.label}>
                                Price:
                            </Label>
                            <Input
                                className={cn(styles.input, styles.inputPrice)}
                                id="wishPrice"
                                {...fields.price}
                            />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-2">
                            <Label
                                htmlFor="wishCurrency"
                                className={styles.label}
                            >
                                Currency:
                            </Label>
                            <Select
                                id="currency"
                                items={CURRENCY}
                                name="Currency"
                                {...fields.currency}
                            />
                        </div>
                    </div>
                    <ErrorMessage errorMessage={errorMessage} />
                    <Button className={styles.submitBtn} type="submit">
                        Wish!
                    </Button>
                </form>
            </div>
        </Popup>
    )
}
