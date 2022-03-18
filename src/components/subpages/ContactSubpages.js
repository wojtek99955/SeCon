import styled from 'styled-components'
import img from '../../assets/img/camera-img.jpg'
import { HashLink } from 'react-router-hash-link'
import { device } from '../../assets/media'

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
        background: rgba(0,0,0,0.6) url(${img});
    background-size: cover;
    height:25rem;
    background-position:center;
    background-blend-mode: darken;
    h3{
        text-align:center;
        color:white;
        margin-bottom:2rem;
        font-size: ${({ theme }) => theme.fontSize.s};
        @media ${device.mobileM}{
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }
    button{
        width:9rem;
        background-color: ${({ theme }) => theme.color.mainColor};
        padding: 0.6rem 0;
        font-size: ${({ theme }) => theme.fontSize.xs};
        color:white;
        border-radius:10px;
        border: 3px solid transparent;
        transition: background-color 300ms;
        cursor: pointer;

        @media ${device.mobileM}{
            font-size: ${({ theme }) => theme.fontSize.s};
        }

        &:hover{
            background-color: transparent;
            border: ${({ theme }) => `3px solid ${theme.color.mainColor}`};

        }
    }
`

function ContactSubpages() {
    return (
        <Contact>
            <h3>Skontaktuj się po indywidualną wycenę!</h3>
            <HashLink to="/#contact"><button>Kontakt</button></HashLink>
        </Contact>
    )
}

export default ContactSubpages