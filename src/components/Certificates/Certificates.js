import React, { useState } from 'react';
import Modal from './Modal';
import { Container, GalleryContainer, ImageContainer, Image, Overlay, ZoomIcon } from './CertificatesStyles';
import certificates from '../../certificates';


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
