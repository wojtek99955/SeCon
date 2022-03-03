import React from 'react';
import styled from 'styled-components';
import img from '../../assets/img/camera-img.jpg';
import { CameraIcon } from '../Services/ServicesStyles';
import cameraicon from '../../assets/img/cctv.png';
import { HashLink } from 'react-router-hash-link';

const Container = styled.div`
    max-width:1300px;
    margin:auto;

    p{
        margin-top:5rem;
    }
`
const ContentWrapper = styled.div`
    width:80%;
    margin:auto;
    padding: 4rem 0;
`
const Section = styled.section`
    background: #F6F6F6;
`

const Title = styled.div`
 max-width: 30rem;
 margin:auto;
 display: flex;
 flex-direction: column;
 padding:5rem 0;

    h2{
        padding: 3rem 0 0rem 0;
        text-align:center;
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    p{
         text-align:center;
         color:#777777;
         line-height:1.3rem;
         font-size:${({ theme }) => theme.fontSize.xs};
        }
`

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:5rem;

    img{
        width:40%;
    }
`
const Description = styled.div`

    padding:5rem 0;
    p{
        line-height:1.3rem;
    }
    h3{
        margin:2rem 0;
    }
    ul{
        padding-left: 2rem;

        li{
            text-decoration-color: ${({ theme }) => theme.color.mainColor};
        }
    }
`

export const Contact = styled.div`
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
        font-size: ${({ theme }) => theme.fontSize.m} ;
    }
    button{
        width:9rem;
        background-color: ${({ theme }) => theme.color.mainColor};
        padding: 0.6rem 0;
        font-size: ${({ theme }) => theme.fontSize.s};
        color:white;
        border-radius:10px;
        border: 3px solid transparent;
        transition: background-color 300ms;
        cursor: pointer;

        &:hover{
            background-color: transparent;
            border: ${({ theme }) => `3px solid ${theme.color.mainColor}`};

        }
    }
`

function Monitoring() {
    return (
        <Section>
            <Container>
                <ContentWrapper>
                    <Title>
                        <CameraIcon />
                        <h2>
                            Monitoring
                        </h2>
                        <p>Wysokie doświadczenie w projektowaniu i wykonywaniu
                            systemów telewizji dozorowej pozwala nam podejmować
                            zadania zarówno dla małych pojedynczych klientów
                            jak i złożone przeznaczone dla dużych odbiorców.
                        </p>
                    </Title>

                    <ContentContainer>
                        <Description>

                            <p>
                                Różnorodność elementów występująca na rynku niesie
                                za sobą ryzyko braku odpowiedniego doboru poszczególnych
                                elementów.
                                Wykonując systemy CCTV, jak i pojedyncze instalacje
                                dobieramy sprzęt odpowiednio wg potrzeb i kategorii,
                                uwzględniając jego cechy indywidualne –  DAHUA, BCS,
                                BOSCH, APTI, HIK VISION i inne.
                            </p>

                            <h3>Kamery</h3>
                            <ul>
                                <li>Stacjonarne</li>
                                <li>Obrotowe</li>
                                <li>Miniaturowe</li>
                                <li>Kamery o kącie widzenia <span>360</span> "fisheye"</li>
                            </ul>
                        </Description>
                        <img src={cameraicon} alt="" srcset="" />
                    </ContentContainer>

                    <p>PRZESYŁANIE OBRAZU: przewodowo, bezprzewodowo, internet</p>
                    <p>REJESTRACJA OBRAZU: pamięć bezpośrednio w kamerach (pojedyncze instalacje, małe)lub w dedykowanych rejestratorach</p>
                    <p>OBSŁUGA: stacjonarna, na odległość, poprzez komputer PC lub telefon, tablet w tym podgląd, archiwum, sterowanie.</p>
                    <p>REJESTRACJA POJAZDÓW w oparciu o „czytanie” tablic rejestracyjnych.</p>
                    <p>INTEGRACJA CCTV z innymi systemami.</p>

                </ContentWrapper>
            </Container>
            <Contact>
                <h3>Skontaktuj się po indywidualną wycenę!</h3>
                <HashLink to="/#contact"><button>Kontakt</button></HashLink>
            </Contact>
        </Section>
    )
}

export default Monitoring