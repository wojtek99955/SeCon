import { useEffect } from 'react';
import cameraicon from '../../../assets/img/monitoring-img.png';
import { DetailsContainer, Detail, CarIcon, TransferIcon, RecordingIcon, GearIcon, HandIcon } from './MonitoringStyles';
import { Section, Container, Title, ContentWrapper, ContentContainer, Description, Image } from '../SubpagesStyles';
import { CameraIcon } from '../../Services/ServicesStyles';
import { CheckMark } from '../Alarms/AlarmsStyles';
import ContactSubpages from '../ContactSubpages';



const monitoringDetails = [
    {
        icon: <TransferIcon />,
        title: "Przesyłanie obrazu",
        text: "przewodowo, bezprzewodowo, internet"
    },
    {
        icon: <RecordingIcon />,
        title: "Rejestracja obrazu",
        text: "pamięć bezpośrednio w kamerach (pojedyncze instalacje, małe)lub w dedykowanych rejestratorach",
    },
    {
        icon: <HandIcon />,
        title: "Obsługa",
        text: "stacjonarna, na odległość, poprzez komputer PC lub telefon, tablet w tym podgląd, archiwum, sterowanie",
    },
    {
        icon: <CarIcon />,
        title: "Rejestracja pojazdów",
        text: "w oparciu o „czytanie” tablic rejestracyjnych",
    },
    {
        icon: <GearIcon />,
        title: "Integracja CCTV",
        text: "z innymi systemami",
    }

]

const cameraTypes = ["Stacjonarne", "Obrotowe", "Miniaturowe", `Kamery o kącie widzenia 360 stopni "fisheye"`]

function Monitoring() {

    useEffect(() => {
        document.title = "Secon - monitoring"
    }, []);

    return (
        <Section>
            <Container>
                <ContentWrapper>
                    <Title>
                        <CameraIcon />
                        <h2>
                            Monitoring
                        </h2>
                        <p>Wysokie doświadczenie w projektowaniu i wykonywaniu
                            systemów telewizji dozorowej pozwala nam podejmować
                            zadania zarówno dla małych pojedynczych klientów
                            jak i złożone przeznaczone dla dużych odbiorców.
                        </p>
                    </Title>

                    <ContentContainer>
                        <Description>

                            <p>
                                Różnorodność elementów występująca na rynku niesie
                                za sobą ryzyko braku odpowiedniego doboru poszczególnych
                                elementów.
                                Wykonując systemy CCTV, jak i pojedyncze instalacje
                                dobieramy sprzęt odpowiednio wg potrzeb i kategorii,
                                uwzględniając jego cechy indywidualne –  DAHUA, BCS,
                                BOSCH, APTI, HIK VISION i inne.
                            </p>

                            <h3>Kamery</h3>
                            <ul>
                                {
                                    cameraTypes.map((camera, id) => {
                                        return (
                                            <li key={id}>{camera}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Description>
                        <Image src={cameraicon} alt="camera" />
                    </ContentContainer>
                    <DetailsContainer>
                        {monitoringDetails.map((detail, id) => {
                            return (
                                <Detail key={id}>
                                    {detail.icon}
                                    <h3>{detail.title}</h3>
                                    <p>{detail.text}</p>
                                </Detail>
                            )
                        })}
                    </DetailsContainer>
                </ContentWrapper>
            </Container>
            <ContactSubpages />
        </Section>
    )
}

export default Monitoring