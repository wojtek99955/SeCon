import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const DropdownContainer = styled.div`
    background-color: white;
    position: absolute;
    top:100%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    transition: height 0.5s ease-in-out;
    height: ${({ $dropdown, height }) => ($dropdown && height) ? height : 0};
    

    @media (max-width: 768px){
        position:sticky;
        box-shadow: none;
    }
    
`
const StyledNavLink = styled(NavLink)`
    display: block;
    text-decoration: none;
    color:black;
  

    &:hover{
        color: ${({ theme }) => theme.color.mainColor};
    }
    padding: 1rem 1rem;
    &:first-of-type{
        padding-top:2rem;
    }

        @media (max-width: 768px){
        font-size: 0.8rem;
    }

`


function Dropdown({ $dropdown }) {

    const [height, setHeight] = useState("0px");
    const dropdownRef = useRef(null);

    useEffect(() => {
        setHeight(`${dropdownRef.current.scrollHeight}px`);
    }, [height]);

    return (
        <DropdownContainer height={height} ref={dropdownRef} $dropdown={$dropdown}>

            <StyledNavLink to="/uslugi/monitoring">Monitoring</StyledNavLink>
            <StyledNavLink to="/uslugi/systemy-zabezpieczen">Systemy zabezpieczeń</StyledNavLink>
            <StyledNavLink to="/uslugi/kontrola-dostepu">Kontrola dostępu</StyledNavLink>
            <StyledNavLink to="/uslugi/pomiary-instalacji-urzadzen-elektrycznych">Pomiary instalacji i urządzeń elektrycznych</StyledNavLink>

        </DropdownContainer>
    )
}

export default Dropdown