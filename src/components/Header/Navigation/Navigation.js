import React, { useRef, useEffect, useState } from 'react'
import { Nav, Ul, Li, LiMobile, StyledHashLink } from './NavigationStyles'
import Dropdown from '../Dropdown/Dropdown';


function Navigation({ open, setOpen }) {

    const menuRef = useRef(null)

    const handleCloseNav = () => {
        setOpen(false)
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }

    });


    const [showDropdown, setShowDropdown] = useState(false);

    const handleShowDropdown = () => setShowDropdown(true);

    const handleHideDropdown = () => setShowDropdown(false);

    return (
        <Nav open={open}>
            <Ul open={open}>
                <Li ref={menuRef}><StyledHashLink to="/#about" onClick={handleCloseNav}>O Nas</StyledHashLink></Li>
                <Li> <StyledHashLink onClick={handleCloseNav} to="/#services" onMouseEnter={handleShowDropdown} onMouseLeave={handleHideDropdown}>Oferta {showDropdown ? <Dropdown /> : null}</StyledHashLink>
                </Li>
                <LiMobile onMouseEnter={handleShowDropdown}
                    onMouseLeave={handleHideDropdown}>
                    <StyledHashLink to="/#services" onClick={handleCloseNav}>Oferta
                    </StyledHashLink>
                    <Dropdown />
                </LiMobile>
                <Li><StyledHashLink to="/#projects" onClick={handleCloseNav}>Projekty</StyledHashLink></Li>
                <Li onClick={handleCloseNav}>Certyfikaty</Li>
                <Li> <StyledHashLink to="/#contact" onClick={handleCloseNav}> Kontakt</StyledHashLink></Li>
            </Ul>
        </Nav>
    )
}

export default Navigation
