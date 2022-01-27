import React, { useState, useEffect } from 'react';
import { ArrowUpCircleFill } from '@styled-icons/bootstrap/ArrowUpCircleFill';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { device } from '../../assets/media'

const UpIcon = styled(ArrowUpCircleFill)`
    width:2.5rem;
    color: ${({ theme }) => theme.color.mainColor};
    top:90%;
    right:1rem;
    position:fixed;
    cursor: pointer;
    z-index: 10;

    @media ${device.tablet}{
        width:3rem;
    }

`

function ScrollTopButton() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true)
            } else {
                setShowButton(false);
            }
        })
    }, [])

    const handleScrollTop = () => scroll.scrollToTop();
    return (
        <>
            {showButton && <UpIcon onClick={handleScrollTop} />}
        </>

    );
}

export default ScrollTopButton;
