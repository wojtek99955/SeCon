import { SecurityIcon } from '../../Services/ServicesStyles';
import alarmsImg from '../../../assets/img/services-alarms.jpg';
import { Section, Container, ContentWrapper, Description, Image, Title, ContentContainer } from '../SubpagesStyles';
import { useEffect } from 'react';
import ContactSubpages from '../ContactSubpages';
import Aos from 'aos'
import "aos/dist/aos.css"

const alarmTypes = ["włamaniowe", "napadowe", "pożarowe", "sterowanie: bramy, rolety, inne urządzenia", "kontrola dostępu: klawiatury kodowe, karty lub breloki zbliżeniowe"];

function Alarms() {

    useEffect(() => {
        document.title = "SECON - systemy zabezpieczeń"
    }, []);

    useEffect(() => {
        Aos.init({ once: true, duration: 1000 })
    }, []);

    return (
        <Section>
            <Container>
                <ContentWrapper>
                    <Title data-aos="fade-up">
                        <SecurityIcon />
                        <h2>Systemy zabezpieczeń</h2>
                        <p> Elektroniczne systemy zabezpieczeń tworzymy na bazie
                            szerokiej gamy urządzeń  -  Satel, Bosch, DSC, Jablotron i inne. Tworzymy małe, średnie, jak i duże systemy, dla każdego użytkownika.
                        </p>
                    </Title>
                    <ContentContainer>
                        <Description>
                            <h3 data-aos="fade-up">Alarmy</h3>
                            <ul data-aos="fade-up">
                                {
                                    alarmTypes.map((alarm, id) => {
                                        return (
                                            <li key={id}>{alarm}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Description>
                        <Image src={alarmsImg} data-aos="fade-up" />
                    </ContentContainer>
                </ContentWrapper>
            </Container>
            <ContactSubpages />
        </Section>
    )
}

export default Alarms