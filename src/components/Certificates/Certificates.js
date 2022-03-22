import { useState, useEffect } from 'react'
import Modal from './Modal'
import { Container, GalleryContainer, ImageContainer, Image, Overlay, ZoomIcon, Title } from './CertificatesStyles'
import certificates from '../../certificates'
import Aos from 'aos'
import "aos/dist/aos.css"

function Certificates() {

    const [modal, setModal] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const getImg = (src) => {
        setImgSrc(src);
        setModal(true);
    }

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <Container id="certificates">
            <Title>
            <h2 data-aos="fade-up">Certyfikaty</h2>
            <h3 data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque</h3>
            </Title>
            {modal ? <Modal imgsrc={imgSrc} modal={modal} setModal={setModal} /> : null}
            <GalleryContainer data-aos="fade-down">
                {certificates.map((item) => {
                    return (
                        <ImageContainer key={item.id} onClick={() => getImg(item.src)}>
                            <Image src={item.src} />
                            <Overlay>
                                <ZoomIcon />
                            </Overlay>
                        </ImageContainer>
                    )
                })}
            </GalleryContainer>
        </Container>
    );
}

export default Certificates;
