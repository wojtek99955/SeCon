import React from 'react'
import styled from 'styled-components'
import img from '../../assets/img/mainsection.jpeg'
import { keyframes } from 'styled-components'
import { device } from '../../assets/media'

const StyledSection = styled.section`
    background: rgba(0, 0, 0, 0.4) url(${img});
    background-blend-mode: darken;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    display: flex;
`

const scaleAnimation = keyframes`
    0%{
        transform: scale(1.0);

    }
    100%{
        transform: scale(1.1);
    }
`

const MainSection = styled.div`
    max-width: 800px;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;

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
        font-size: 1rem;
        margin-top: 2rem;
        cursor: pointer;
        align-self: flex-start;
        margin: auto;
        margin-top: 3rem;
        border-radius: 10px;
        font-weight: 600;
        transition-property: background-color;
        transition-duration: 300ms;
        position: absolute;
        z-index: 1;
        left: 50%;
        margin-left: -100px;
        top: 10rem;

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

function MainPage() {
    return (
        <StyledSection >
            <MainSection>
                <h1>
                    Safe And Secure Home <br /> For You And Your Family
                </h1>
                <button>Click here</button>
            </MainSection>
        </StyledSection>
    )
}

export default MainPage
