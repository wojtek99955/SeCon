import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import logo from '../../assets/img/logo.jpeg'
import { FooterSection, Container, Row, BottomBar, Logo } from './FooterStyles'


function Footer() {

    const scrollTop = () => {
        scroll.scrollToTop()
    }
    return (
        <FooterSection>
            <Container>
                <Row>
                    <ul>
                        <li onClick={scrollTop}>home </li>
                        <li><Link to="about">o nas</Link></li>
                        <li><Link to="services">oferta</Link></li>
                        <li><Link to="projects">realizacje</Link></li>
                    </ul>
                </Row>
                <Row>
                    <ul>
                        <li>referencje</li>
                        <li><Link to="contact">kontakt</Link></li>
                    </ul>
                </Row>
                <Logo onClick={scrollTop} src={logo} />
            </Container>
            <BottomBar />
        </FooterSection>
    )
}

export default Footer
