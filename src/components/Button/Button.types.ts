import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'

export type ButtonIntent = 'primary' | 'secondary'

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'color' | 'children'> {
  label: string
  intent?: ButtonIntent
}