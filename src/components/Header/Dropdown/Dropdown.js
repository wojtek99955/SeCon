import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const DropdownContainer = styled.div`
    background-color: white;
    position: absolute;

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
    padding-bottom: 1rem;

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