import React, { useState } from 'react';
import Modal from './Modal';
import img1 from '../../assets/img/certificates/no1.jpeg';
import img2 from '../../assets/img/certificates/no2.jpeg';
import img3 from '../../assets/img/certificates/no3.jpeg';
import img4 from '../../assets/img/certificates/no4.jpeg';
import img5 from '../../assets/img/certificates/no5.jpeg';
import img6 from '../../assets/img/certificates/no6.jpeg';
import { Container, GalleryContainer, ImageContainer, Image } from './CertificatesStyles'

const data = [
    {
        id: 1,
        src: img1,
    },
    {
        id: 2,
        src: img2,
    },
    {
        id: 3,
        src: img3,
    },
    {
        id: 4,
        src: img4,
    },
    {
        id: 5,
        src: img5,
    },
    {
        id: 6,
        src: img6,
    },

]

function Certificates() {

    const [modal, setModal] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const getImg = (src) => {
        setImgSrc(src);
        setModal(true);
    }


    return (
        <Container>
            <h2>Certyfikaty</h2>
            {modal ? <Modal imgsrc={imgSrc} modal={modal} setModal={setModal} /> : null}
            <GalleryContainer>
                {data.map((item, index) => {
                    return (
                        <ImageContainer key={index} onClick={() => getImg(item.src)}>
                            <Image src={item.src} />
                        </ImageContainer>
                    )
                })}
            </GalleryContainer>
        </Container>
    );
}

export default Certificates;
