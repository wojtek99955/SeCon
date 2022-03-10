import React, { useState, useEffect, useRef } from 'react';
import { NumbersSection, Container, NumberItem, MedalIcon, ShieldIcon } from './WhyUsStyles';

function WhyUs() {

    const numberRef = useRef(null);

    const [height, setHeight] = useState(0);

    const [experience, setExperience] = useState(1);
    const [warranty, setWarranty] = useState(1);

    useEffect(() => {

        document.addEventListener('DOMContentLoaded', function () {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset + window.innerHeight > numberRef.current.offsetTop) {
                    setHeight(true);
                } else {
                    setHeight(false);
                }
            });
        }
        )
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (height === true && experience < 20) {
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

    return (
        <NumbersSection ref={numberRef}>
            <Container>
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