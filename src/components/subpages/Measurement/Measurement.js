import { ElectricalIcon } from '../../Services/ServicesStyles'
import { CheckMark } from '../Alarms/AlarmsStyles'
import img from '../../../assets/img/pomiary.jpeg'
import { Contact } from '../Monitoring/MonitoringStyles'
import { HashLink } from 'react-router-hash-link'
import { Section, Container, ContentWrapper, Title, ContentContainer, Description, Image } from '../SubpagesStyles'
import { useEffect } from 'react'


const measurements = ["Pomiary parametrów pętli zwarcia", "Pomiary rezystancji uziemień", "Pomiary parametrów wyłączników różnicowoprądowych RCD", "Pomiary rezystancji izolacji", "Pomiary prądu, mocy czynnej, biernej i pozornej oraz współczynnika cosφ", "Sprawdzenie poprawności wykonania połączeń przewodu ochronnego", "Pomiary natężenia oświetlenia"];

function Measurement() {

    useEffect(() => {
        document.title = "Secon - pomiary instalacji i urządzeń elektrycznych"
    }, []);

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
                        <Image src={img}></Image>
                    </ContentContainer>
                </ContentWrapper>
            </Container>
            <Contact>
                <h3>Skontaktuj się po indywidualną wycenę!</h3>
                <HashLink to="/#contact"><button>Kontakt</button></HashLink>
            </Contact>
        </Section>
    )
}

export default Measurement