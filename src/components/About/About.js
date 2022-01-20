import React from 'react'
import { Section, Container, StyledImg, AboutInfo } from './AboutStyles'



function About() {
    return (
        <Section id="about">
            <Container>
                <StyledImg />
                <AboutInfo>
                    <h1>O nas</h1>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo a excepturi placeat nostrum, officiis voluptate
                        ipsa molestias tempore velit eaque voluptates? Possimus
                        similique harum quae temporibus reprehenderit veniam
                        voluptates ipsam magnam ut consequatur exercitationem,
                        sed, quasi ea sunt vitae cupiditate ex, maiores minus
                        nisi quisquam.
                    </p>
                </AboutInfo>
            </Container>
        </Section>
    )
}

export default About
