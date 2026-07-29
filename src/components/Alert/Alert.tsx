import MuiAlert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import type { AlertProps } from './Alert.types'

export const Alert = ({ title, message, children, severity = 'success', ...rest }: AlertProps) => {
  return (
    <MuiAlert severity={severity} {...rest}>
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      {children ?? message}
    </MuiAlert>
  )
}

export default Alert