import React, { useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Nav } from './NavigationStyles'


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

    return (
        <Nav open={open}>
            <ul open={open}>
                <li ref={menuRef}><Link to="about" onClick={handleCloseNav}>O Nas</Link></li>
                <li><Link to="services" onClick={handleCloseNav}>Oferta</Link></li>
                <li><Link to="projects" onClick={handleCloseNav}>Projekty</Link></li>
                <li onClick={handleCloseNav}>Referencje</li>
                <li> <Link to="contact" onClick={handleCloseNav}> Kontakt</Link></li>
            </ul>
        </Nav>
    )
}

export default Navigation
