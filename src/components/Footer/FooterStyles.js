import styled from 'styled-components';
import { device } from '../../assets/media'

export const FooterSection = styled.footer``

export const Container = styled.div`
    max-width: 1300px;
    margin: auto;
    padding: 2rem 0;
`

export const Row = styled.div`
    display: flex;
    justify-content: center;

    &:nth-of-type(2) {
        margin-top: 1.5rem;
    }
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        @media ${device.tablet} {
            flex-direction: row;
        }
    }
    li {
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        text-transform: uppercase;

        &:hover {
            color: #f7941c;
        }
    }
`

export const BottomBar = styled.div`
    height: 3rem;
    background-color: #f7941c;
`

export const Logo = styled.img`
width:6rem;
display: block;
margin: auto;
padding-top: 2rem;
cursor: pointer;
`