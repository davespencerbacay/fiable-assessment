import { Box, TableCell, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const GridTableContainer = styled(Box)({
  display: 'inline-flex',
  flexDirection: 'column',
})

export const AxisYLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginRight: theme.spacing(1.5),
}))

export const AxisValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.body1.fontSize,
  textAlign: 'center',
}))

export const AxisXLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginTop: theme.spacing(0.5),
  textAlign: 'center',
}))

export const StyledGridCell = styled(TableCell)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: 0,
}))
