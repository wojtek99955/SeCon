import styled from 'styled-components';
import { device } from '../../assets/media'
import { Mail } from '@styled-icons/feather/Mail'
import { Location } from '@styled-icons/fluentui-system-regular/Location'
import { Telephone } from '@styled-icons/bootstrap/Telephone'
import img from '../../assets/img/contactimage.jpeg'

export const ContactSection = styled.section`
    padding: 4rem 1rem;
    background: rgba(0, 0, 0, 0.75) url(${img});
    background-blend-mode: darken;
    background-size: cover;

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

    @media ${device.tablet} {
        flex-direction: row;
        align-items: center;
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
        font-size: ${({ theme }) => theme.fontSize.xs};
        margin-bottom: 0.8rem;

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
        border: 1px solid white;
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
        padding: 0.6rem 0.8rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
        font-size: ${({ theme }) => theme.fontSize.xxs};
        transition: background-color 300ms;

        @media ${device.mobileL}{
            padding: 0.9rem 1.4rem;
            font-size: ${({ theme }) => theme.fontSize.xs};
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



