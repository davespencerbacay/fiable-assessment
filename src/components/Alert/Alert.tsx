import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'
import MuiAlert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { Box, Typography } from '@mui/material'
import type { AlertColor } from '@mui/material/Alert'
import type { ReactElement } from 'react'
import type { AlertProps } from './Alert.types'

const severityStyles: Record<AlertColor, { backgroundColor: string; iconBackgroundColor: string; iconColor: string }> = {
  error: {
    backgroundColor: '#FDECEF',
    iconBackgroundColor: '#F0526A',
    iconColor: '#FFFFFF',
  },
  warning: {
    backgroundColor: '#FFF8E5',
    iconBackgroundColor: '#FFC53D',
    iconColor: '#FFFFFF',
  },
  info: {
    backgroundColor: '#E3F7FC',
    iconBackgroundColor: '#18B7D8',
    iconColor: '#FFFFFF',
  },
  success: {
    backgroundColor: '#E4F7F0',
    iconBackgroundColor: '#31C48D',
    iconColor: '#FFFFFF',
  },
}

const iconBySeverity: Record<AlertColor, ReactElement> = {
  error: <ErrorOutlineRoundedIcon fontSize="small" />,
  warning: <WarningAmberRoundedIcon fontSize="small" />,
  info: <InfoOutlinedIcon fontSize="small" />,
  success: <CheckRoundedIcon fontSize="small" />,
}

const SeverityIcon = ({ severity }: { severity: AlertColor }) => {
  const styles = severityStyles[severity]

  return (
    <Box
      sx={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: styles.iconBackgroundColor,
        color: styles.iconColor,
      }}
    >
      {iconBySeverity[severity]}
    </Box>
  )
}

export const Alert = ({ title, message, children, severity = 'success', ...rest }: AlertProps) => {
  const styles = severityStyles[severity]

  return (
    <MuiAlert
      severity={severity}
      iconMapping={{
        error: <SeverityIcon severity="error" />,
        warning: <SeverityIcon severity="warning" />,
        info: <SeverityIcon severity="info" />,
        success: <SeverityIcon severity="success" />,
      }}
      sx={{
        borderRadius: 2.5,
        border: 'none',
        boxShadow: 'none',
        alignItems: 'center',
        py: 2.25,
        px: 2.5,
        gap: 1.25,
        backgroundColor: styles.backgroundColor,
        color: '#161E2E',
        '& .MuiAlert-icon': {
          margin: 0,
          padding: 0,
          opacity: 1,
          alignItems: 'center',
        },
        '& .MuiAlert-message': {
          padding: 0,
        },
      }}
      {...rest}
    >
      {title ? (
        <AlertTitle sx={{ margin: 0, fontSize: 18, fontWeight: 700, lineHeight: 1.3, fontFamily: "Poppins, 'Roboto', 'Helvetica', 'Arial', sans-serif" }}>{title}</AlertTitle>
      ) : null}
      <Typography sx={{ margin: 0, fontSize: 12, fontWeight: 500, lineHeight: 1.5, fontFamily: "Poppins, 'Roboto', 'Helvetica', 'Arial', sans-serif" }}>
        {children ?? message}
      </Typography>
    </MuiAlert>
  )
}

export default Alert