import { Box, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const LabeledValueContainer = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(1),
}))

export const LabeledValueTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    color: theme.palette.text.primary,
    lineHeight: 1.2,
    marginBottom: 0,
    fontSize: 18
}))

export const LabeledValueChip = styled(Box)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 0,
    width: 'fit-content',
    padding: theme.spacing(0.9, 1.5),
    borderRadius: 10,
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.primary,
    marginTop: 0
}))

export const LabeledValueText = styled(Typography)(() => ({
    fontWeight: 500,
    lineHeight: 1,
    fontSize: 15,
    marginTop: 0
}))
