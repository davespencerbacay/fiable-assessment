import { createTheme } from '@mui/material/styles'
import { APP_FONT_FAMILY } from '../constants/constants'

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#0F62FE',
    },
    secondary: {
      main: '#6F6F6F',
    },
  },
  typography: {
    fontFamily: APP_FONT_FAMILY,
  },
})