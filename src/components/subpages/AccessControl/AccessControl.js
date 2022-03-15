import { LockIcon } from '../../Services/ServicesStyles'
import { CheckMark } from '../Alarms/AlarmsStyles'
import img from '../../../assets/img/kontrola-dostepu.png'
import { Section, Container, ContentWrapper, Title, ContentContainer, Description, Image } from '../SubpagesStyles'
import { useEffect } from 'react'
import ContactSubpages from '../ContactSubpages'

function AccessControl() {

    useEffect(() => {
        document.title = "Secon - kontrola dostępu, rejestracja czasu pracy"
    }, []);

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
                        <Image src={img} />
                    </ContentContainer>
                </ContentWrapper>
            </Container>
            <ContactSubpages />
        </Section>
    )
}

export default AccessControl