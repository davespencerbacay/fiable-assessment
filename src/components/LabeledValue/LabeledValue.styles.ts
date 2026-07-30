import { Box, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const LabeledValueContainer = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(0.75),
    minWidth: 180,
}))

export const LabeledValueTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: theme.palette.text.secondary,
    lineHeight: 1.2,
    marginBottom: 0,
    fontSize: 12,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
}))

export const LabeledValueChip = styled(Box)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    width: 'fit-content',
    padding: theme.spacing(1.1, 1.6),
    borderRadius: 14,
    background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
    color: theme.palette.text.primary,
    marginTop: 0,
}))

export const LabeledValueIcon = styled(Box)(({ theme }) => ({
    width: 34,
    height: 34,
    borderRadius: 999,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
    flexShrink: 0,
}))

export const LabeledValueText = styled(Typography)(() => ({
    fontWeight: 700,
    lineHeight: 1.1,
    fontSize: 16,
    marginTop: 0,
}))
