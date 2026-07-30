import { LabeledValueChip, LabeledValueContainer, LabeledValueIcon, LabeledValueText, LabeledValueTitle } from './LabeledValue.styles'
import type { LabeledValueProps } from './LabeledValue.types'

export const LabeledValue = ({ title, value, icon }: LabeledValueProps) => {
    return (
        <LabeledValueContainer spacing={1}>
            <LabeledValueTitle variant="h6">{title}</LabeledValueTitle>

            <LabeledValueChip>
                {icon ? <LabeledValueIcon>{icon}</LabeledValueIcon> : null}
                <LabeledValueText variant="body1">{value}</LabeledValueText>
            </LabeledValueChip>
        </LabeledValueContainer>
    )
}

export default LabeledValue
