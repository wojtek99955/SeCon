import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const DropdownContainer = styled.div`
    background-color: white;
    position: absolute;
    top:100%;
    width: auto;

    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);


    @media (max-width: 768px){
        position:sticky;
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

`


function Dropdown() {
    return (
        <DropdownContainer>

            <StyledNavLink to="/services/monitoring">Monitoring</StyledNavLink>
            <StyledNavLink to="/services/alarms">Systemy zabezpieczeń</StyledNavLink>
            <StyledNavLink to="/">Kontrola dostępu</StyledNavLink>
            <StyledNavLink to="/">Pomiary</StyledNavLink>

        </DropdownContainer>
    )
}

export default Dropdown