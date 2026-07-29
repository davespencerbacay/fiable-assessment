import { HeaderBadge, HeaderContainer, HeaderSubtitle, HeaderTitle, HeaderTitleRow } from './Header.styles'
import type { HeaderProps } from './Header.types'

export const Header = ({ title, subtitle, badgeText }: HeaderProps) => {
    return (
        <HeaderContainer>
            <HeaderTitleRow>
                <HeaderTitle variant="h3">
                    {title}
                </HeaderTitle>

                {badgeText ? <HeaderBadge>{badgeText}</HeaderBadge> : null}
            </HeaderTitleRow>

            {subtitle ? (
                <HeaderSubtitle variant="h5">
                    {subtitle}
                </HeaderSubtitle>
            ) : null}
        </HeaderContainer>
    )
}

export default Header