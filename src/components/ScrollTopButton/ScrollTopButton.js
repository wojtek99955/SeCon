import React, { useState, useEffect } from 'react'
import { ChevronUp } from '@styled-icons/boxicons-regular/ChevronUp'
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'

const UpIcon = styled(ChevronUp)`
    color: white;
    right: 1rem;
    position: fixed;
    cursor: pointer;
    z-index: 10;
    animation: move 400ms ease-in 0s;
    animation-fill-mode: both;
    background-color: ${({ theme }) => theme.color.mainColor};
    border-radius: 50%;
    width: 3rem;

    &:hover {
        background-color: #c77009;
    }

    @keyframes move {
        0% {
            bottom: -10rem;
            opacity: 0;
        }
        100% {
            bottom: 1rem;
            opacity: 1;
        }
    }
`

function ScrollTopButton() {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [])

    const handleScrollTop = () => scroll.scrollToTop()
    return (
        <>
            {showButton && (
                <UpIcon showButton={showButton} onClick={handleScrollTop} />
            )}
        </>
    )
}

export default ScrollTopButton
