import styled from 'styled-components';

export const StyledHeader = styled.header`
        position: ${({ fixed }) => fixed ? "fixed" : "absolute"};
        width:100%;
        background-color:white;
        box-shadow: 0px 11px 53px 0px rgba(48, 49, 57, 0.21);
        z-index: 10;
        
        @media (max-width: 768px){
        padding: 0.5rem 0;
    }
`
export const HeaderContainer = styled.div`
    max-width:1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 0rem 1rem;
    background-color: white;
`