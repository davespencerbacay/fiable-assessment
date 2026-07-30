import { LabeledValueChip, LabeledValueContainer, LabeledValueText, LabeledValueTitle } from './LabeledValue.styles'
import type { LabeledValueProps } from './LabeledValue.types'
import { Typography } from '@mui/material'

export const LabeledValue = ({ title, value, icon }: LabeledValueProps) => {
    return (
        <LabeledValueContainer spacing={1}>
            <LabeledValueTitle variant="h6">{title}</LabeledValueTitle>

            <LabeledValueChip>
                {icon ? icon : null}
                <LabeledValueText variant="body1">
                    <Typography sx={{ marginBottom: 0, marginLeft: icon ? 1 : 0 }}>{value}</Typography>
                </LabeledValueText>
            </LabeledValueChip>
        </LabeledValueContainer>
    )
}

export default LabeledValue
