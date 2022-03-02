import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
    background-color: white;
    position: absolute;

    ul{
        display: flex;
        flex-direction: column;
        padding: 2rem 0 0 0;
        gap:0;
    }
    li{
        margin: 0;
        border-bottom: 1px solid grey;
        padding: 0.5rem 1rem;
        padding-right:8rem;

        &:last-of-type{
            border-bottom:none;
        }

    }

`


function Dropdown() {
    return (
        <DropdownContainer>
            <ul>
                <li>Monitoring</li>
                <li>Systemy zabezpieczeń</li>
                <li>Kontrola dostępu</li>
                <li>Pomiary</li>
            </ul>

        </DropdownContainer>
    )
}

export default Dropdown