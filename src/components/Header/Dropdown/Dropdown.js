import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const DropdownContainer = styled.div`
    background-color: white;
    position: absolute;
    top:100%;
    border:1px solid #dedede;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    height: ${({ height }) => height ? height : 0};
    

    @media (max-width: 768px){
        position:sticky;
        box-shadow: none;
        height:auto;
        border:none;
        margin:auto;
    }
    
`
const StyledNavLink = styled(NavLink)`
    display: block;
    text-decoration: none;
    color:black;
    border-bottom: 1px solid #dedede;
    white-space: nowrap;
    font-weight: 400;
    text-transform: capitalize;
    color: #777777;

    @media (max-width: 768px){
        border-bottom: none;
        font-size: ${({theme}) => theme.fontSize.xs};
        padding: 0.6rem 0;
        white-space: normal;

        &:last-of-type{
            padding-bottom:0;
        }
    }
  

    &:hover{
        color: ${({ theme }) => theme.color.mainColor};
    }
    padding: 0.8rem 1rem;
    &:first-of-type{
        padding-top:1rem;
    }

`


function Dropdown() {

    const [height, setHeight] = useState("0px");
    const dropdownRef = useRef(null);

    useEffect(() => {
        setHeight(`${dropdownRef.current.scrollHeight}px`);
    }, [height]);

    return (
        <DropdownContainer height={height} ref={dropdownRef}>
            <StyledNavLink to="/uslugi/monitoring">Monitoring</StyledNavLink>
            <StyledNavLink to="/uslugi/systemy-zabezpieczen">Systemy zabezpieczeń</StyledNavLink>
            <StyledNavLink to="/uslugi/kontrola-dostepu-rejestracja-czasu-pracy">Kontrola dostępu</StyledNavLink>
            <StyledNavLink to="/uslugi/pomiary-instalacji-i-urzadzen-elektrycznych">Pomiary instalacji i<br/> urządzeń elektrycznych</StyledNavLink>
        </DropdownContainer>
    )
}

export default Dropdown