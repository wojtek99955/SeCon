import styled from 'styled-components'
import img from '../../assets/img/mainsection.jpeg'
import { keyframes } from 'styled-components'
import { device } from '../../assets/media'
import { Link } from 'react-scroll'

export const StyledSection = styled.section`
    background: rgba(0, 0, 0, 0.4) url(${img});
    background-blend-mode: darken;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    display: flex;
`

export const scaleAnimation = keyframes`
    0%{
        transform: scale(1.0);

    }
    100%{
        transform: scale(1.1);
    }
`

export const MainSection = styled.main`
    max-width: 800px;
    margin: auto;
    display: flex;
    flex-direction: column;

    h1 {
        color: white;
        font-size: ${({ theme }) => theme.fontSize.m};
        text-align: center;
        line-height: 3rem;

        @media ${device.tablet}{
            font-size: ${({ theme }) => theme.fontSize.l};
            line-height: 4.5rem;
        }

        @media ${device.laptopL}{
            font-size: ${({ theme }) => theme.fontSize.xl};
        }
    }

    button {
        padding: 0.8rem 2.2rem;
        background-color: #f7941c;
        color: white;
        border: 5px solid #f7941c;
        font-size: ${({ theme }) => theme.fontSize.s};
        margin-top: 2rem;
        cursor: pointer;
        margin-top: 3rem;
        border-radius: 10px;
        font-weight: 400;
        transition-property: background-color;
        transition-duration: 300ms;
        align-self: center;

        &:hover {
            background-color: transparent;
            animation: ${scaleAnimation};
            animation-duration: 300ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            animation-direction: alternate;
        }
    }
`
export const StyledLink = styled(Link)`
    align-self: center;
`