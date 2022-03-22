import { useEffect } from 'react'
import { Section, Container, StyledImg, AboutInfo} from './AboutStyles'
import Aos from 'aos'
import "aos/dist/aos.css"

function About() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <Section id="about">
            <Container>
                <StyledImg data-aos="fade-down" />
                <AboutInfo data-aos="fade-up">
                    <h1>O nas</h1>
                    <h2>
                        Ponad 30 lat doświadczenia
                    </h2>
                    <p>
                        Firma powstała w 1991 roku
                        jako prywatny Zakład Usług Elektrotechnicznych,
                        przekształacając się z czasem w zakład SECON
                        Technicznea Ochrona Mienia. Oprócz obowiązkowych
                        uprawnień wynikających ze stosownych przepisów
                        dotyczących tego rodzaju działalności, firma
                        posoada również Koncesję MSWiA.
                    </p>
                    <p>
                        Obecnie na bazie zdobytego doświadczenia,
                        wiedzy i posiadanych uprawnień, zajmujemy
                        się zarówno małymi, dla indywidualnych
                        odbiorców prostymi systemami alarmowymi,
                        telewizji dozorowej, kontroli dostępu i
                        rejestracji czasu pracy, oraz dużymi,
                        które wymagają kompleksowego opracowania i
                        integracji. Z oczywistych względów nie
                        podajemy listy referencyjnej jednak po
                        dokonaniu uzgodnień, służymy odpowiednimi
                        informacjami.
                    </p>
                    <p>Dbając o jakość wykonywanych przez firmę
                        systemów przyjęliśmy za standard 36
                        miesięczną gwarancję w zakresie wykonywanych
                        prac.
                    </p>
                </AboutInfo>
            </Container>
        </Section>
    )
}

export default About
