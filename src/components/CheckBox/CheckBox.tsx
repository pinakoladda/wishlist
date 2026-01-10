import { Checkbox } from '../ui/checkbox'
import { Label } from '@radix-ui/react-label'
import styles from './index.module.css'
import { CheckedState } from '@radix-ui/react-checkbox'

interface CheckBoxProps {
    id: string
    labelText: string
    checked: boolean
    onChange: (value: CheckedState) => void
}

export const CheckBox = ({
    id,
    labelText,
    checked,
    onChange,
}: CheckBoxProps) => {
    return (
        <div className={styles.checkboxContainer}>
            <Checkbox
                id={id}
                className={styles.checkbox}
                checked={checked}
                onCheckedChange={onChange}
            />
            <Label htmlFor={id} className={styles.label}>
                {labelText}
            </Label>
        </div>
    )
}
