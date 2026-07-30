import type { ReactNode } from 'react'

export interface LabeledValueProps {
    title: string
    value: string | number
    icon?: ReactNode
}
