import styled from 'styled-components';
import { device } from '../../assets/media'
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom'

export const FooterSection = styled.footer``

export const Container = styled.div`
    max-width: 1300px;
    margin: auto;
    padding: 2rem 1rem;
`

export const Nav = styled.nav`

    ul {
        list-style-type: none;


        @media ${device.tablet} {
            flex-direction: row;
        }

    }
    li {
        font-size: ${({ theme }) => theme.fontSize.xs};
        font-weight: 500;
        cursor: pointer;
        text-align: center;

        @media ${device.tablet}{
            text-align: start;
        }
    }
    h3{
        font-size: ${({ theme }) => theme.fontSize.m};
        text-transform: uppercase;
        margin-bottom:1rem;
        text-align:center;

        @media ${device.tablet}{
            text-align: start;
            font-size: ${({ theme }) => theme.fontSize.s}
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
    cursor: pointer;
    margin:auto;
`
export const StyledHashLink = styled(HashLink)`
    text-decoration:none;
    color: #777777;
    display: block;
    padding: 0.6rem 0;
    text-transform: capitalize;
    font-weight:400;

    &:hover {
        color: #f7941c;
    }
    @media ${device.tablet}{
        padding: 0.4rem 0;
    }
`
export const StyledNavLink = styled(HashLink)`
    text-decoration:none;
    color: #777777;
    display: block;
    padding: 0.6rem 0;
    text-transform: capitalize;
    font-weight:400;

    &:hover {
        color: #f7941c;
    }

    @media ${device.tablet}{
        padding: 0.4rem 0;
    }
`
export const ContactButton = styled(HashLink)`
    background-color: ${({ theme }) => theme.color.mainColor};
    border: none;
    padding: 0.7rem 2rem;
    align-self: center;
    color:white;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    align-self: center;
    font-size: ${({ theme }) => theme.fontSize.xs};

    @media ${device.tablet}{
        padding: 0.6rem 2.2rem;
    }

    @media ${device.laptop}{
        align-self: flex-start;
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media ${device.tablet}{
        flex-direction: row;
        justify-content: space-between;
    }

`

export const LogoLink = styled(HashLink)`
    
`