import { SecurityIcon } from '../../Services/ServicesStyles';
import alarmsImg from '../../../assets/img/alarms.png';
import { Section, Container, ContentWrapper, Description, Image, Title, ContentContainer } from '../SubpagesStyles';
import { useEffect } from 'react';
import ContactSubpages from '../ContactSubpages';

const alarmTypes = ["włamaniowe", "napadowe", "pożarowe", "sterowanie: bramy, rolety, inne urządzenia", "kontrola dostępu: klawiatury kodowe, karty lub breloki zbliżeniowe"];

function Alarms() {

    useEffect(() => {
        document.title = "SeCon - systemy zabezpieczeń"
    }, []);

    return (
        <Section>
            <Container>
                <ContentWrapper>
                    <Title>
                        <SecurityIcon />
                        <h2>Systemy zabezpieczeń</h2>
                        <p> Elektroniczne systemy zabezpieczeń tworzymy na bazie
                            szerokiej gamy urządzeń  -  Satel, Bosch, DSC, Jablotron i inne. Tworzymy małe, średnie, jak i duże systemy, dla każdego użytkownika.
                        </p>
                    </Title>
                    <ContentContainer>
                        <Description>
                            <h3>Alarmy</h3>
                            <ul>
                                {
                                    alarmTypes.map((alarm, id) => {
                                        return (
                                            <li key={id}>{alarm}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Description>
                        <Image src={alarmsImg} />
                    </ContentContainer>
                </ContentWrapper>
            </Container>
            <ContactSubpages />
        </Section>
    )
}

export default Alarms