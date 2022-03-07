import React from 'react';
import { LockIcon } from '../Services/ServicesStyles';
import { Contact } from '../Monitoring/MonitoringStyles';
import { HashLink } from 'react-router-hash-link';
import alarmsImg from '../../assets/img/access-control.jpeg';
import { Section, Container, ContentWrapper, Description, Text, Image, Title, CheckMark } from './AlarmsStyles';

const alarmTypes = ["włamaniowe", "napadowe", "pożarowe", "innych zdarzeń technicznych i niebezpieczeństw, w tym czujniki różnego rodzaju gazów, czujniki zalania wodą, czujniki stanu dowolnych urządzeń", "sterowanie: bramy, rolety, inne urządzenia", "kontrola dostępu: klawiatury kodowe, karty lub breloki zbliżeniowe"];

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
                                {
                                    alarmTypes.map((alarm, id) => {
                                        return (
                                            <li key={id}><CheckMark />{alarm}</li>
                                        )
                                    })
                                }
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