
import Hamburger from '../Hamburger/Hamburger'
import TopBar from '../TopBar/TopBar'
import Logo from '../../../Logo'
import { StyledHeader, HeaderContainer } from './HeaderStyles'



function Header() {
    return (
        <>
            <StyledHeader >
                <TopBar />
                <HeaderContainer>
                    <Logo />
                    <Hamburger />
                </HeaderContainer>
            </StyledHeader>
        </>
    )
}

export default Header
