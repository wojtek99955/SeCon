import React from 'react';
import styled from 'styled-components';
import img from '../../assets/img/camera-img.jpg';
import { CameraIcon } from '../Services/ServicesStyles';
import cameraicon from '../../assets/img/cctv.png';
import { HashLink } from 'react-router-hash-link';
import { VehicleCar } from '@styled-icons/fluentui-system-regular/VehicleCar';
import { Transfer } from '@styled-icons/boxicons-regular/Transfer';
import { VideoRecording } from '@styled-icons/fluentui-system-regular/VideoRecording';
import { Gear } from '@styled-icons/bootstrap/Gear';
import { HandIndex } from '@styled-icons/bootstrap/HandIndex';
import { device } from '../../assets/media';

const Container = styled.div`
    max-width:1300px;
    margin:auto;

    p{
        margin-top:5rem;
        line-height:1.3rem;
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
        font-size: ${({ theme }) => theme.fontSize.m};

        @media ${device.tablet}{
            font-size: ${({ theme }) => theme.fontSize.l};
        }
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
    flex-direction: column-reverse;

    @media ${device.tablet}{
        flex-direction: row;
        gap:4rem;
        padding: 3rem 0;
    }

    img{
        width:60%;
            @media ${device.tablet}{
            width:40%;
    }
    }
`
const Description = styled.div`

    padding:3rem 0;
    p{
        line-height:1.3rem;
        margin-top:0rem;
    }
    h3{
        margin:2rem 0;
    }
    ul{
        padding-left: 2rem;

        li{
            margin-bottom:0.5rem;
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

const CarIcon = styled(VehicleCar)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`
const TransferIcon = styled(Transfer)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`

const RecordingIcon = styled(VideoRecording)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`
const GearIcon = styled(Gear)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`
const HandIcon = styled(HandIndex)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`

const monitoringDetails = [
    {
        icon: <TransferIcon />,
        title: "Przesyłanie obrazu",
        text: "przewodowo, bezprzewodowo, internet"
    },
    {
        icon: <RecordingIcon />,
        title: "Rejestracja obrazu",
        text: "pamięć bezpośrednio w kamerach (pojedyncze instalacje, małe)lub w dedykowanych rejestratorach",
    },
    {
        icon: <HandIcon />,
        title: "Obsługa",
        text: "stacjonarna, na odległość, poprzez komputer PC lub telefon, tablet w tym podgląd, archiwum, sterowanie",
    },
    {
        icon: <CarIcon />,
        title: "Rejestracja pojazdów",
        text: "w oparciu o „czytanie” tablic rejestracyjnych",
    },
    {
        icon: <GearIcon />,
        title: "Integracja CCTV",
        text: "z innymi systemami",
    }

]

const DetailsContainer = styled.div`
    row-gap: 4.5rem;
    column-gap: 5rem;
    justify-content: center;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    gap:3.5rem;
    width:15rem;
    margin:auto;

    @media ${device.tablet}{
        display: grid;
        grid-template-columns: 15rem 15rem;
        width: auto;
    }

`
const Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    border: 1px solid #dedede;
    width:16rem;
    min-height:15rem;
    padding:1rem;
    border-radius:8px;


    &:nth-of-type(5){
        grid-column-start: 1;
        grid-column-end: 3;
    }


    h3{
        margin:1rem 0;
        font-size: ${({ theme }) => theme.fontSize.s};
    }
    
    p{
        text-align:center;
        margin:0.5rem;
        color:#777777;
        font-size: ${({ theme }) => theme.fontSize.xs};
        line-height:1.3rem;
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
                        <img src={cameraicon} alt="camera" />
                    </ContentContainer>
                    <DetailsContainer>
                        {monitoringDetails.map((detail, id) => {
                            return (
                                <Detail>
                                    {detail.icon}
                                    <h3>{detail.title}</h3>
                                    <p>{detail.text}</p>
                                </Detail>
                            )
                        })}
                    </DetailsContainer>
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