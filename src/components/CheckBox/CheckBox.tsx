import { Checkbox } from '../ui/checkbox'
import { Label } from '@radix-ui/react-label'
import styles from './index.module.css'

interface CheckBoxProps {
    id: string
    labelText: string
}

export const CheckBox = ({ id, labelText }: CheckBoxProps) => {
    return (
        <div className={styles.checkboxContainer}>
            <Checkbox id={id} className={styles.checkbox} />
            <Label htmlFor={id} className={styles.label}>
                {labelText}
            </Label>
        </div>
    )
}
