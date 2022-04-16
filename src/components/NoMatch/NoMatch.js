import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

function NoMatch() {
    return (
        <Container>
            <div>Page not found</div>
        </Container>
    )
}

export default NoMatch
