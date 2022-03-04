import React from 'react';
import styled from 'styled-components';
import { LockIcon } from '../Services/ServicesStyles';
import { Contact } from '../Monitoring/Monitoring';
import { HashLink } from 'react-router-hash-link';
import alarmsImg from '../../assets/img/access-control.jpeg';

const Section = styled.section`

`
const Container = styled.div`
    max-width:1300px;
    margin:auto;
    h2{
        padding-top:10rem;
        text-align:center;
    }

    p{
        margin-top:5rem;
    }
`
const ContentWrapper = styled.div`
    width:80%;
    margin:auto;
    padding: 4rem 0;
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

const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Text = styled.div`

`

const Image = styled.img`
    width:25rem;
    border-top: ${({ theme }) => `1.3rem solid ${theme.color.mainColor}`};
    border-right: ${({ theme }) => `1.3rem solid ${theme.color.mainColor}`};
    border-bottom: ${({ theme }) => `0.4rem solid ${theme.color.mainColor}`};
`

function Alarms() {
    return (
        <Section>
            <Container>
                <ContentWrapper>
                    <Title>
                        <LockIcon />
                        <h2>Systemy zabezpieczeń</h2>
                        <p> Elektroniczne systemy zabezpieczeń tworzymy na bazie
                            szerokiej gamy urządzeń  -  Satel, Bosch, DSC, Jablotron i inne. Tworzymy małe, średnie, jak i duże systemy, dla każdego użytkownika.
                        </p>
                    </Title>
                    <Description>
                        <Text>
                            <h3>Alarmy</h3>
                            <ul>
                                <li>włamaniowe</li>
                                <li>napadowe</li>
                                <li>pozarowe</li>
                                <li>innych zdarzeń technicznych i niebezpieczeństw w tym czujniki różnego rodzaju gazów, czujniki zalania wodą, czujniki stanu dowolnych urządzeń,</li>
                                <li>sterowanie: bramy, rolety, inne urządzenia,</li>
                                <li> kontrola dostępu: klawiatury kodowe, karty lub breloki zbliżeniowe</li>
                            </ul>
                        </Text>
                        <Image src={alarmsImg} />
                    </Description>
                </ContentWrapper>
            </Container>
            <Contact>
                <h3>Skontaktuj się po indywidualną wycenę!</h3>
                <HashLink to="/#contact"><button>Kontakt</button></HashLink>
            </Contact>
        </Section>
    )
}

export default Alarms