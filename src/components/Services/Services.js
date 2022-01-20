import React from 'react'
import { Section, Container, ServicesWrapper, Monitoring, Measurement, CameraIcon, ElectricalIcon, CheckMark, CheckMarkSecond } from './ServicesStyles'


function Services() {

    const monitoringServices = ["Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor."];
    const measurementServices = ["Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor."];


    return (
        <Section id="services">
            <Container>
                <h2>Oferta</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero veritatis minus!</h3>
                <ServicesWrapper>
                    <Monitoring>
                        <CameraIcon />
                        <h3>Lorem ipsum</h3>
                        {monitoringServices.map((service) => {
                            return (
                                <ul>
                                    <li><CheckMark />{service}</li>
                                </ul>
                            )
                        })}
                    </Monitoring>
                    <Measurement>
                        <ElectricalIcon />
                        <h3>Lorem Ipsum</h3>
                        {measurementServices.map((service) => {
                            return (
                                <ul>
                                    <li><CheckMarkSecond />{service}</li>
                                </ul>
                            )
                        })}
                    </Measurement>
                </ServicesWrapper>
            </Container>
        </Section>
    )
}

export default Services
