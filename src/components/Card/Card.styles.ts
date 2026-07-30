import { Box, List, ListItem, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CardContainer = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    marginBottom: theme.spacing(2),
}))

export const CardTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    marginBottom: theme.spacing(1.5),
    color: theme.palette.text.primary,
}))

export const CardDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    marginBottom: 0,
}))

export const CardList = styled(List)(({ theme }) => ({
    paddingLeft: theme.spacing(2),
    '& .MuiListItem-root': {
        paddingLeft: 0,
        paddingTop: theme.spacing(0.75),
        paddingBottom: theme.spacing(0.75),
    },
}))

export const CardListItem = styled(ListItem)({
    display: 'list-item',
})
