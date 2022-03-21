import { ElectricalIcon } from '../../Services/ServicesStyles'
import img from '../../../assets/img/pomiary.jpeg'
import { Section, Container, ContentWrapper, Title, ContentContainer, Description, Image } from '../SubpagesStyles'
import { useEffect } from 'react'
import ContactSubpages from '../ContactSubpages'
import Aos from 'aos'
import "aos/dist/aos.css"


const measurements = ["Pomiary parametrów pętli zwarcia", "Pomiary rezystancji uziemień", "Pomiary parametrów wyłączników różnicowoprądowych RCD", "Pomiary rezystancji izolacji", "Pomiary prądu, mocy czynnej, biernej i pozornej oraz współczynnika cosφ", "Sprawdzenie poprawności wykonania połączeń przewodu ochronnego", "Pomiary natężenia oświetlenia"];

function Measurement() {

    useEffect(() => {
        document.title = "Secon - pomiary instalacji i urządzeń elektrycznych"
    }, []);

    useEffect(() => {
        Aos.init({ once: true, duration: 1000 })
    }, []);

    return (
        <Section>
            <Container>
                <ContentWrapper>
                    <Title data-aos="fade-up">
                        <ElectricalIcon />
                        <h2>Pomiary instalacji i urządzeń elektrycznych</h2>
                        <p>Zgodnie z normą PN-HD 60364-6:2008 każda
                            instalacja powinna być sprawdzona po jej ukończeniu,
                            Również w przypadku rozbudowy lub zmiany istniejącej instalacji.
                        </p>
                    </Title>
                    <ContentContainer >
                        <Description>
                            <h3 data-aos="fade-up">Wykonujemy pomiary w zakresie:</h3>
                            <ul data-aos="fade-up">
                                {measurements.map((measure, id) => {
                                    return (
                                        <li key={id}>{measure}</li>
                                    )
                                })}
                            </ul>
                            <p data-aos="fade-up">Pomiary zakończone zostają zawsze stosownym
                                protokołem, ważnym przez okres 5 lat, w stosunku
                                do budynków i pomieszczeń standardowych,
                                nie posiadających statusu pomieszczeń,
                                w których występują warunki szczególne.
                            </p>
                            <p data-aos="fade-up">Usługi wykonujemy na terenie całego kraju.</p>
                        </Description>
                        <Image data-aos="fade-up" src={img}></Image>
                    </ContentContainer>
                </ContentWrapper>
            </Container>
            <ContactSubpages />
        </Section>
    )
}

export default Measurement