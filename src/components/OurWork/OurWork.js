import { useEffect } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from '../../assets/img/slider1.jpeg'
import img2 from '../../assets/img/slider2.jpeg'
import img3 from '../../assets/img/slider3.jpeg'
import { Section, Container, PrevIcon, NextIcon, FlipCard, SliderWrapper, StyledSlider, Title } from './OurWorkStyles'
import Aos from 'aos'
import "aos/dist/aos.css"

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

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

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
                <Title>
                <h2 data-aos="fade-up">Realizacje</h2>
                <h3 data-aos="fade-up">Dołącz do grona setek zadowolonych klientów!</h3>
                </Title>
                <SliderWrapper data-aos="fade-down">
                    <StyledSlider  {...settings}>
                        <FlipCard>
                            <div className="card-container">
                                <div className="card">
                                    <div className="side">
                                        <h2>Text</h2>
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="side back">First</div>
                                </div>
                            </div>
                        </FlipCard>
                        <FlipCard>
                            <div className="card-container">
                                <div className="card">
                                    <div className="side">
                                        <h2>Text</h2>
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="side back">Second</div>
                                </div>
                            </div>
                        </FlipCard>
                        <FlipCard>
                            <div className="card-container">
                                <div className="card">
                                    <div className="side">
                                        <h2>Text</h2>
                                        <img src={img3} alt="" />
                                    </div>
                                    <div className="side back">Third</div>
                                </div>
                            </div>
                        </FlipCard>
                        <FlipCard>
                            <div className="card-container">
                                <div className="card">
                                    <div className="side">
                                        <h2>Text</h2>
                                    </div>
                                    <div className="side back">Fourth</div>
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
