import React, { useState } from 'react'
import Navigation from '../Navigation/Navigation';
import { Burger, Bar } from './HamburgerStyles';

function Hamburger() {
    const [open, setOpen] = useState(false);

    const handleToggleMenu = (e) => {
        e.stopPropagation()
        setOpen(!open);
    }


    return (
        <>
            <Navigation open={open} setOpen={setOpen} />
            <Burger open={open} onMouseDown={handleToggleMenu}>
                <Bar open={open} />
                <Bar open={open} />
                <Bar open={open} />
            </Burger >
        </>
    )
}

export default Hamburger
