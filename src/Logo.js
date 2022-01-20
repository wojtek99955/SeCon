import React from 'react'
import styled from 'styled-components'
import img from '../src/assets/img/logo.jpeg'

const Container = styled.img`
    width:5rem;
`

function Logo() {
    return (
        <Container src={img} />
    )
}

export default Logo
