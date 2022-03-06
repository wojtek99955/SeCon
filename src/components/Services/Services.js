import React from 'react'
import { Section, Container, ServicesWrapper, Service, CameraIcon, ElectricalIcon, SecurityIcon, LockIcon } from './ServicesStyles';
import { Link } from 'react-router-dom';


function Services() {


    const services = [
        {
            img: <CameraIcon />,
            service: "Monitoring",
            url: "/services/monitoring"
        },
        {
            img: <SecurityIcon />,
            service: "Systemy zabezpieczeń",
            url: "/services/alarms",
        },
        {
            img: <LockIcon />,
            service: "Kontrola dostępu",
            url: "/services/access-control",

        },
        {
            img: <ElectricalIcon />,
            service: "Pomiary instalacji i urządzeń elektrycznych",
            url: "/services/measurement",
        }
    ]


    return (
        <Section id="services">
            <Container>
                <h2>Oferta</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero veritatis minus!</h3>
                <ServicesWrapper>
                    {services.map((service, id) => {
                        return (
                            <Service>
                                {service.img}
                                <h3>{service.service}</h3>
                                <p>{service.description}</p>
                                <Link to={{ pathname: `${service.url}` }}><button>Więcej</button></Link>
                            </Service>
                        )
                    })}
                </ServicesWrapper>
            </Container>
        </Section>
    )
}

export default Services
