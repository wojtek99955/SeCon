import React, { useState, useEffect } from 'react';
import { ChevronUp } from '@styled-icons/boxicons-regular/ChevronUp';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { device } from '../../assets/media'

const UpIcon = styled(ChevronUp)`
    color: white;
    right:1rem;
    position:fixed;
    cursor: pointer;
    z-index: 10;
    animation: move 400ms ease-in 0s;
    animation-fill-mode:both;
    background-color: ${({ theme }) => theme.color.mainColor};
    border-radius: 50%;

    &:hover{
        background-color: #C77009;
    }

    @keyframes move{
        0%{
            top:100%;
            opacity: 0;
        }
        100%{
            top: 90%;
            opacity: 1;
        }
    }

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
            {showButton && <UpIcon showButton={showButton} onClick={handleScrollTop} />}
        </>

    );
}

export default ScrollTopButton;
