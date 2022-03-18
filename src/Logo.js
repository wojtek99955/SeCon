import React from 'react'
import styled from 'styled-components'
import img from '../src/assets/img/logo.jpeg'
import { device } from './assets/media'

const LogoImg = styled.img`
    width:6rem;
    @media ${device.tablet}{
        width:5rem;
    }
`

function Logo() {
    return (
        <LogoImg src={img} />
    )
}

export default Logo
