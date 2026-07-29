import type { AlertProps as MuiAlertProps } from '@mui/material/Alert'
import type { ReactNode } from 'react'

export interface AlertProps extends Omit<MuiAlertProps, 'children'> {
  title?: string
  message?: string
  children?: ReactNode
}