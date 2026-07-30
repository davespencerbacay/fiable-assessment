import { Typography } from '@mui/material'
import { CardContainer, CardDescription, CardList, CardListItem, CardTitle } from './Card.styles'
import type { CardProps } from './Card.types'

export const Card = ({ title, description, list }: CardProps) => {
    return (
        <CardContainer>
            {title ? <CardTitle variant="h6" sx={{ marginBottom: description ? 1.5 : 0 }}>{title}</CardTitle> : null}

            {description ? <CardDescription variant="body2">{description}</CardDescription> : null}

            {list && list.length > 0 ? (
                <CardList>
                    {list.map((item, index) => (
                        <CardListItem key={index}>
                            <Typography sx={{ marginBottom: 0, fontSize: 12 }}>{item}</Typography>
                        </CardListItem>
                    ))}
                </CardList>
            ) : null}
        </CardContainer>
    )
}

export default Card
