import { useEffect } from 'react'
import { StyledSection, MainSection, StyledLink } from './MainPageStyles'
import Aos from 'aos'
import "aos/dist/aos.css"

function MainPage() {

    useEffect(() => {
        Aos.init({ once: true, duration: 1000 })
    }, []);

    return (
        <StyledSection id="main" >
            <MainSection data-aos="fade-up">
                <h1>
                    Safe And Secure Home <br /> For You And Your Family
                </h1>
                <StyledLink to="contact">
                    <button>Kontakt</button>
                </StyledLink>
            </MainSection>
        </StyledSection>
    )
}

export default MainPage
