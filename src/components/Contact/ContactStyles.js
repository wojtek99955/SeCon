import styled from 'styled-components';
import { device } from '../../assets/media'
import { Mail } from '@styled-icons/feather/Mail'
import { Location } from '@styled-icons/fluentui-system-regular/Location'
import { Telephone } from '@styled-icons/bootstrap/Telephone'
import img from '../../assets/img/contactimage.jpeg'
import { scaleAnimation } from '../MainPage/MainPageStyles'

export const ContactSection = styled.section`
    padding: 3rem 1rem;
    background: rgba(0, 0, 0, 0.75) url(${img});
    background-blend-mode: darken;
    background-size: cover;
    position:relative;

    @media ${device.tablet}{
        padding: 8rem 1rem;
    }


    h1 {
        color: white;
        font-size: ${({ theme }) => theme.fontSize.l};
        margin-bottom: 6rem;
        text-align: center;
        text-decoration: ${({ theme }) => `underline solid ${theme.color.mainColor} 5px`};
        text-underline-offset: 1rem;

        @media ${device.tablet}{
            text-align: start;
        }
    }
`

export const Container = styled.div`
    max-width: 1300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 5rem ;

    @media ${device.tablet} {
        flex-direction: row;
        align-items: center;
        gap:1rem;
    }
`

export const Text = styled.div`
    margin-bottom: 2rem;
    color: white;

    h2 {
        font-size: ${({ theme }) => theme.fontSize.s};
        margin-bottom: 2.5rem;
        font-weight:400;
    }
    p {
        font-size: ${({ theme }) => theme.fontSize.xxs};
        margin-bottom: 0.8rem;
        @media ${device.laptop}{
            font-size: ${({ theme }) => theme.fontSize.xs};
        }

        &:first-of-type{
            display: flex;
        }
    }
`

export const Form = styled.form`
    align-self: center;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media ${device.tablet} {
        width: 60%;
    }
    @media ${device.laptop} {
        width: 50%;
    }
    label {
        margin-bottom: 0.5rem;
        color: white;
        font-size: ${({ theme }) => theme.fontSize.xxs};
    }
    input {
        margin-bottom: 1.5rem;
        border-radius: 10px;
        padding: 0.6rem 1rem;
        background-color: transparent;
        border: 2px solid white;
        font-size: 1.2rem;
        color: white;
        outline: none;

        &:focus {
            background-color: transparent;
        }
    }
    textarea {
        border-radius: 10px;
        padding: 0.8rem 1rem;
        background-color: transparent;
        border: 2px solid white;
        font-size: 1.2rem;
        color: white;
        outline: none;

        &:focus {
            background-color: transparent;
        }
    }
    button {
        margin-top: 2rem;
        background-color: #f7941c;
        border: 3px solid #f7941c;
        border-radius: 10px;
        align-self: flex-start;
        padding: 0.6rem 0.6rem;
        color: white;
        font-weight: 400;
        cursor: pointer;
        font-size: ${({ theme }) => theme.fontSize.xs};
        transition: background-color 300ms;

        @media ${device.laptop}{
            padding: 0.9rem 1.4rem;
            font-size: ${({ theme }) => theme.fontSize.s};
        }

        &:hover {
            background-color: transparent;
        }
        &:active {
            background-color: rgb(250, 188, 112);
            border-color: rgb(250, 188, 112);
        }
    }
`

export const Logo = styled.div`
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 2rem;
`

export const MailIcon = styled(Mail)`
    color: #f7941c;
    width: 1.5rem;
    margin-right: 0.8rem;
`

export const TelIcon = styled(Telephone)`
    color: #f7941c;
    width: 1.5rem;
    margin-right: 0.8rem;
`

export const LocationIcon = styled(Location)`
    color: #f7941c;
    width: 1.5rem;
    margin-right: 0.8rem;
`
export const TopContainer = styled.div`
    position:absolute;
    top:-15%;
    max-width:1200px;
    padding: 3rem 0;
    margin: 0;
    background-color: white;
    box-shadow: 0px 11px 53px 0px rgba(48, 49, 57, 0.31);
    width:100%;
    left:0;
    margin:auto;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 8px;

    h3{
        text-align: center;
        margin-bottom:1rem;
        color:#777777;
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
    h2{
        text-align: center;
        padding-bottom:1rem;
        
    }
    button{
        background-color: ${({ theme }) => theme.color.mainColor};
        padding: 0.5rem 2rem;
        margin:auto;
        display: block;
        margin-top:1rem;
        color: white;
        border-radius: 10px;
        font-size: ${({ theme }) => theme.fontSize.s};
        cursor: pointer;
        border: 3px solid #f7941c;
        @media ${device.tablet}{
        padding: 0.6rem 2rem;
    }

        &:hover {
            animation: ${scaleAnimation};
            animation-duration: 300ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            animation-direction: alternate;
        }
    }
    @media ${device.tablet}{
        width: 90%;
        margin:auto;
    }

`


