import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import styles from './index.module.css'

interface SelectProps {
    items: string[]
    name: string
    id: string
}

export function SelectDemo({ items, name, id }: SelectProps) {
    return (
        <div id={id} className={styles.main}>
            <Select>
                <SelectTrigger className="max-w-[120px] w-full">
                    <SelectValue placeholder={name} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{name}</SelectLabel>
                        {items.map((item) => {
                            return (
                                <SelectItem key={item} value={item}>
                                    {item}
                                </SelectItem>
                            )
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
