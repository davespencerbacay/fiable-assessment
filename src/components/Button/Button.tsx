import { StyledButton } from './Button.styles'
import type { ButtonProps } from './Button.types'

const intentColorMap = {
  primary: 'primary',
  secondary: 'secondary',
} as const

export const Button = ({ label, intent = 'primary', ...rest }: ButtonProps) => {
  return (
    <StyledButton variant="contained" color={intentColorMap[intent]} {...rest}>
      {label}
    </StyledButton>
  )
}

export default Button