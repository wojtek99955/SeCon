import React from 'react'
import { ContactSection, Container, Text, Form, Logo, MailIcon, TelIcon, LocationIcon } from './ContactStyles'



function Contact() {
    return (
        <ContactSection id="contact">
            <Container>
                <Text>
                    <h1>Kontakt</h1>
                    <Logo>SeCon</Logo>
                    <h2>Techniczna Ochrona Mienia</h2>
                    <p>
                        <LocationIcon />
                        ul. Strzeszyńska 35/37 pok. 37 <br />
                        60-479 Poznań
                    </p>
                    <p>
                        <MailIcon />
                        biuro@secon.com.pl
                    </p>
                    <p>
                        <TelIcon />
                        +48 602 36 99 87

                    </p>
                </Text>
                <Form>
                    <label htmlFor="name">Imię</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="subject">Temat</label>
                    <input type="text" name="subject" id="subject" />
                    <label htmlFor="message">Wiadomość</label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="8"
                    />
                    <button>Wyślij wiadomość</button>
                </Form>
            </Container>
        </ContactSection>
    )
}

export default Contact
