import React from 'react'
import styled from 'styled-components'
import { device } from '../../assets/media'
import { LockIcon } from '../Services/ServicesStyles'
import { CheckMark } from '../Alarms/AlarmsStyles'

export const Section = styled.section`
    background: #F6F6F6;
`

export const Container = styled.section`
    max-width:1300px;
    margin:auto;

    p{
        margin-top:5rem;
        line-height:1.3rem;
    }
`

export const ContentWrapper = styled.div`
    width:80%;
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


function AccessControl() {
    return (
        <Section>
            <Container>
                <ContentWrapper>
                    <Title>
                        <LockIcon />
                        <h2>System Kontroli Dostępu i Rejestracji Czasu Pracy</h2>
                        <p>Kontrola dostępu należy do najczęściej używanych
                            systemów bezpieczeństwa. Umożliwia ograniczenie
                            dostępu do wybranych pomieszczeń lub stref wewnątrz
                            i na zewnątrz oraz wizualizację stanów zagrożenia na
                            terenie obiektu lub dowolnego obszaru.
                        </p>
                    </Title>
                    <ContentContainer>
                        <Description>
                            <p>Należą do nich: zwykłe zamki szyfrowe, zamki
                                zbliżeniowe (breloki lub karty zbliżeniowe),
                                klamki elektroniczne, domofony, wideodomofony, kamery, rej
                            </p>
                            <p>Kontrola dostępu realizujemy przy użyciu
                                sprzętu firm: Satel, KaDe, Roger, Unicard, Bosch.
                                Na bazie sprzętu tych samych producentów realizujemy
                                Systemy Rejestracji Czasu Pracy, wraz z oprogramowaniem
                                i możliwością integracji z innymi systemami.
                            </p>
                            <h3>Zastosowanie nawet prostej kontroli dostępu daje możliwość:</h3>
                            <ul>
                                <li><CheckMark />integracji z systemami monitoringu i alarmowymi</li>
                                <li> <CheckMark /> integracji z systemami rejestracji czasu pracy, wspomagania procesów produkcji, kontroli obecności itp.</li>
                            </ul>
                            <p>Do rozliczania czasu pracy lub ewidencji – jeżeli istnieje taka potrzeba, wykorzystujemy oprogramowanie odpowiedniego producenta wraz z serwisem pogwarancyjnym.
                            </p>
                        </Description>
                    </ContentContainer>
                </ContentWrapper>
            </Container>
        </Section>
    )
}

export default AccessControl