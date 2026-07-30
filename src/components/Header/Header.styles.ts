import { Box, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const HeaderContainer = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(1),
}))

export const HeaderTitleRow = styled(Stack)(({ theme }) => ({
    alignItems: 'center',
    gap: theme.spacing(2),
    flexDirection: 'row',
    flexWrap: 'wrap',
}))

export const HeaderTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    color: theme.palette.text.primary,
}))

export const HeaderSubtitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}))

export const HeaderBadge = styled(Box)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: theme.spacing(0.75, 1.75),
    fontWeight: 500,
    fontSize: '1rem',
    color: '#0F4CCF',
    background: 'linear-gradient(180deg, #E8F0FF 0%, #DDE9FF 100%)',
    border: '1px solid #C8D9FF',
    fontFamily: theme.typography.fontFamily,
}))