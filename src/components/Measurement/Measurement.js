import React from 'react'
import styled from 'styled-components'
import { device } from '../../assets/media'
import { ElectricalIcon } from '../Services/ServicesStyles'
import { CheckMark } from '../Alarms/AlarmsStyles'
import img from '../../assets/img/electrical-installation.jpeg'

export const Section = styled.section`
    background: #F6F6F6;
`

export const Container = styled.section`
    max-width:1300px;
    margin:auto;
    padding: 0 1rem;

    p{
        margin-top:5rem;
        line-height:1.3rem;
    }
`

export const ContentWrapper = styled.div`
    margin:auto;
    padding: 4rem 0;
`

export const Title = styled.div`
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
export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;
    @media ${device.tablet}{
        padding: 6rem 0;
    }

    @media ${device.laptop}{
        flex-direction: row;
        gap: 4rem;
    }
`
export const Description = styled.div`


    ul{
        padding-left: 2rem;
        list-style-type: none;

        li{
            margin-bottom:1rem;
        }
    }
    p{
        line-height:1.3rem;
    }
        h3{
        margin:2rem 0;
    }
`
const measurements = ["Pomiary parametrów pętli zwarcia", "Pomiary rezystancji uziemień", "Pomiary parametrów wyłączników różnicowoprądowych RCD", "Pomiary rezystancji izolacji", "Pomiary prądu, mocy czynnej, biernej i pozornej oraz współczynnika cosφ", "Sprawdzenie poprawności wykonania połączeń przewodu ochronnego", "Pomiary natężenia oświetlenia"];

const Img = styled.img`
    margin:auto;
    width:90%;
    border-top: ${({ theme }) => `1.3rem solid ${theme.color.mainColor}`};
    border-right: ${({ theme }) => `1.3rem solid ${theme.color.mainColor}`};
    border-bottom: ${({ theme }) => `0.4rem solid ${theme.color.mainColor}`};

    @media ${device.mobileL}{
        width:80%;
    }
    @media ${device.tablet}{
        width:45%;
    }
`

function Measurement() {
    return (
        <Section>
            <Container>
                <ContentWrapper>
                    <Title>
                        <ElectricalIcon />
                        <h2>Pomiary instalacji i urządzeń elektrycznych</h2>
                        <p>Zgodnie z normą PN-HD 60364-6:2008 każda
                            instalacja powinna być sprawdzona po jej ukończeniu,
                            Również w przypadku rozbudowy lub zmiany istniejącej instalacji.
                        </p>
                    </Title>
                    <ContentContainer>
                        <Description>
                            <h3>Wykonujemy pomiary w zakresie:</h3>
                            <ul>
                                {measurements.map((measure, id) => {
                                    return (
                                        <li key={id}><CheckMark />{measure}</li>
                                    )
                                })}
                            </ul>
                            <p>Pomiary zakończone zostają zawsze stosownym
                                protokołem, ważnym przez okres 5 lat, w stosunku
                                do budynków i pomieszczeń standardowych,
                                nie posiadających statusu pomieszczeń,
                                w których występują warunki szczególne.
                            </p>
                            <p>Usługi wykonujemy na terenie całego kraju.</p>
                        </Description>
                        <Img src={img}></Img>
                    </ContentContainer>
                </ContentWrapper>
            </Container>
        </Section>
    )
}

export default Measurement