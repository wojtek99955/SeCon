import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/img/slider1.jpeg'
import img2 from '../../assets/img/slider2.jpeg'
import img3 from '../../assets/img/slider3.jpeg'
import { Section, Container, PrevIcon, NextIcon, FlipCard, SliderWrapper, StyledSlider } from './OurWorkStyles'

const PrevBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <PrevIcon />
        </div>
    );
};

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <NextIcon />
        </div>
    );
};


function OurWork() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dotsClass: "dots",
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <Section id="projects">
            <Container>
                <SliderWrapper>
                    <h2>Realizacje</h2>
                    <StyledSlider  {...settings}>
                        <FlipCard>
                            <div class="card-container">
                                <div class="card">
                                    <div class="side">
                                        <h2>Text</h2>
                                        <img src={img1} alt="" srcset="" />
                                    </div>
                                    <div class="side back">First</div>
                                </div>
                            </div>
                        </FlipCard>
                        <FlipCard>
                            <div class="card-container">
                                <div class="card">
                                    <div class="side">
                                        <h2>Text</h2>
                                        <img src={img2} alt="" srcset="" />
                                    </div>
                                    <div class="side back">Second</div>
                                </div>
                            </div>
                        </FlipCard>
                        <FlipCard>
                            <div class="card-container">
                                <div class="card">
                                    <div class="side">
                                        <h2>Text</h2>
                                        <img src={img3} alt="" srcset="" />
                                    </div>
                                    <div class="side back">Third</div>
                                </div>
                            </div>
                        </FlipCard>
                        <FlipCard>
                            <div class="card-container">
                                <div class="card">
                                    <div class="side">
                                        <h2>Text</h2>
                                    </div>
                                    <div class="side back">Fourth</div>
                                </div>
                            </div>
                        </FlipCard>

                    </StyledSlider>

                </SliderWrapper>
            </Container>
        </Section>
    )
}

export default OurWork
