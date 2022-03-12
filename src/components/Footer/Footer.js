import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../assets/img/logo.jpeg'
import { FooterSection, Container, Nav, BottomBar, Logo, StyledHashLink, StyledNavLink, ContactButton, ContentWrapper } from './FooterStyles'



function Footer() {

    const scrollTop = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterSection>
            <Container>
                <ContentWrapper>
                    <StyledNavLink to="/"><Logo src={logo} /></StyledNavLink>
                    <Nav>
                        <h3 onClick={scrollTop}>Secon</h3>
                        <ul>
                            <li><StyledHashLink to="/#about">o nas</StyledHashLink></li>

                            <li><StyledHashLink to="/#projects">realizacje</StyledHashLink></li>
                            <li><StyledHashLink to="/#certificates">certyfikaty</StyledHashLink></li>
                            <li><StyledHashLink to="/#contact">kontakt</StyledHashLink></li>
                        </ul>
                    </Nav>
                    <Nav>
                        <h3>Oferta</h3>
                        <ul>
                            <li><StyledNavLink to="/uslugi/monitoring">monitoring</StyledNavLink></li>
                            <li><StyledNavLink to="/uslugi/systemy-zabezpieczen">systemy zabezpieczeń</StyledNavLink></li>
                            <li><StyledNavLink to="/uslugi/kontrola-dostepu-rejestracja-czasu-pracy">kontrola dostępu</StyledNavLink></li>
                            <li><StyledNavLink to="/uslugi/pomiary-instalacji-i-urzadzen-elektrycznych">pomiary instalacji elektrycznej</StyledNavLink></li>
                        </ul>
                    </Nav>
                    <ContactButton to="/#contact">Kontakt</ContactButton>
                </ContentWrapper>
            </Container>
            <BottomBar />
        </FooterSection>
    )
}

export default Footer
