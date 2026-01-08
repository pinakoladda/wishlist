import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { ChevronDownIcon } from 'lucide-react'
import { Label } from '@radix-ui/react-label'

interface DatePickerProps {
    labelText?: string
    id?: string
}

export const DatePicker = ({ labelText, id }: DatePickerProps) => {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    return (
        <div>
            {labelText && (
                <Label htmlFor="date" className="px-1">
                    {labelText}
                </Label>
            )}
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id={id ? id : 'date'}
                        className="w-full justify-between font-normal"
                    >
                        {date ? date.toLocaleDateString() : 'Select date'}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                >
                    <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
