
import Hamburger from '../Hamburger/Hamburger'
import TopBar from '../TopBar/TopBar'
import Logo from '../../../Logo'
import { StyledHeader, HeaderContainer } from './HeaderStyles'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll'


function Header() {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setIsFixed(true)
            } else {
                setIsFixed(false);
            }
        })
    }, []);

    const scrollTop = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <StyledHeader fixed={isFixed} >
                <TopBar fixed={isFixed} />
                <HeaderContainer>
                    <Link onClick={scrollTop} to="/"> <Logo /></Link>
                    <Hamburger />
                </HeaderContainer>
            </StyledHeader>
        </>
    )
}

export default Header
