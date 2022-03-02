import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Nav } from './NavigationStyles'
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
            <ul open={open}>
                <li ref={menuRef}><Link to="about" onClick={handleCloseNav}>O Nas</Link></li>
                <li onMouseEnter={handleShowDropdown}
                    onMouseLeave={handleHideDropdown}>
                    <Link to="services" onClick={handleCloseNav}>Oferta</Link>
                    {showDropdown ? <Dropdown /> : null}
                </li>
                <li><Link to="projects" onClick={handleCloseNav}>Projekty</Link></li>
                <li onClick={handleCloseNav}>Certyfikaty</li>
                <li> <Link to="contact" onClick={handleCloseNav}> Kontakt</Link></li>
            </ul>
        </Nav>
    )
}

export default Navigation
