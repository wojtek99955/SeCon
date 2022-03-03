
import Hamburger from '../Hamburger/Hamburger'
import TopBar from '../TopBar/TopBar'
import Logo from '../../../Logo'
import { StyledHeader, HeaderContainer } from './HeaderStyles'
import { Link } from 'react-router-dom';



function Header() {
    return (
        <>
            <StyledHeader >
                <TopBar />
                <HeaderContainer>
                    <Link to="/"> <Logo /></Link>
                    <Hamburger />
                </HeaderContainer>
            </StyledHeader>
        </>
    )
}

export default Header
