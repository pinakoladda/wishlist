import {
    Select as SelectBase,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface SelectProps {
    className?: string
    items: string[]
    name: string
    id: string
    value?: string
    onSelect?: (v: string) => void
}

export function Select({
    items,
    name,
    id,
    className,
    value,
    onSelect,
}: SelectProps) {
    return (
        <div id={id} className={className}>
            <SelectBase value={value} onValueChange={onSelect}>
                <SelectTrigger className="w-full">
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
            </SelectBase>
        </div>
    )
}
