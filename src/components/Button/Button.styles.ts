import { styled } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  paddingInline: theme.spacing(2.5),
}))