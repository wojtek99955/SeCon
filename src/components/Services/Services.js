import React from 'react'
import { Section, Container, ServicesWrapper, Service, CameraIcon, ElectricalIcon, SecurityIcon, LockIcon } from './ServicesStyles'


function Services() {


    const services = [
        {
            img: <CameraIcon />,
            service: "Monitoring",
            url: "../"
        },
        {
            img: <SecurityIcon />,
            service: "Systemy zabezpieczeń",
            url: "..../",
        },
        {
            img: <LockIcon />,
            service: "Kontrola dostępu",
        },
        {
            img: <ElectricalIcon />,
            service: "Pomiary",
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

                                <button>Więcej</button>
                            </Service>
                        )
                    })}
                </ServicesWrapper>
            </Container>
        </Section>
    )
}

export default Services
