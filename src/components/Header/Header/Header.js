import Hamburger from '../Hamburger/Hamburger'
import TopBar from '../TopBar/TopBar'
import Logo from '../../../Logo'
import { StyledHeader, HeaderContainer } from './HeaderStyles'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { animateScroll as scroll } from 'react-scroll'


function Header() {

    const [isFixed, setIsFixed] = useState(false);
    const topbarRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > topbarRef.current.clientHeight) {
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
                <TopBar forwardedRef={topbarRef} fixed={isFixed} />
                <HeaderContainer>
                    <Link onClick={scrollTop} to="/"> <Logo /></Link>
                    <Hamburger />
                </HeaderContainer>
            </StyledHeader>
        </>
    )
}

export default Header
