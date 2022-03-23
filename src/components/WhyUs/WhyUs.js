import { useState, useEffect, useRef } from 'react'
import { NumbersSection, Container, NumberItem, MedalIcon, ShieldIcon } from './WhyUsStyles'
import Aos from 'aos'
import "aos/dist/aos.css"


function WhyUs() {

    const numberRef = useRef(null);

    const [height, setHeight] = useState(0);

    const [experience, setExperience] = useState(1);
    const [warranty, setWarranty] = useState(1);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.pageYOffset + window.innerHeight > numberRef.current.offsetTop) {
                setHeight(true);
            } else {
                setHeight(false);
            }
        });

    }, []);

    useEffect(() => {

        const interval = setInterval(() => {
            if (height === true && experience < 30) {
                setExperience((prev) => prev + 1);
            }
        }, 50);

        return () => clearInterval(interval);

    }, [experience, height]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (height === true && warranty < 36) {
                setWarranty((prev) => prev + 1);
            }
        }, 50);

        return () => clearInterval(interval);

    }, [warranty, height]);

    useEffect(() => {
        console.log("routesie zmienil")
    }, []);

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, []);

    return (
        <NumbersSection ref={numberRef}>
            <Container data-aos="fade-up">
                <NumberItem>
                    <MedalIcon />
                    <h3>{experience} </h3>
                    <p>lat doświadczenia</p>
                </NumberItem>
                <NumberItem>
                    <ShieldIcon />
                    <h3>{warranty}</h3>
                    <p>miesięcy gwarancji</p>
                </NumberItem>
            </Container>
        </NumbersSection>
    )
}

export default WhyUs