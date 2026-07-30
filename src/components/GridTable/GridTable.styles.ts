import { Box, TableCell, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const GridTableContainer = styled(Box)({
  display: 'inline-flex',
  flexDirection: 'column',
})

export const AxisYLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginRight: theme.spacing(1.5),
  fontSize: 10,
  fontWeight: 700,
  textTransform: 'uppercase',

}))

export const AxisValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.body1.fontSize,
  textAlign: 'center',
}))

export const AxisXLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(0.5),
  textAlign: 'center',
  fontSize: 10,
  fontWeight: 700,
  textTransform: 'uppercase',

}))

export const StyledGridCell = styled(TableCell)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: 0,
}))
