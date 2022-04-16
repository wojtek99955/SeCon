import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f6f6f6;
`
const Wrapper = styled.div`
    h2,
    h3,
    p {
        text-align: center;
    }
    h2 {
        font-size: 5rem;
    }
    h3 {
        font-size: 2.5rem;
    }
    span {
        color: ${({ theme }) => theme.color.mainColor};
    }
    p {
        font-size: 1.5rem;
        padding: 2rem;
    }
`

function NoMatch() {
    return (
        <Container>
            <Wrapper>
                <h2>
                    4<span>0</span>4
                </h2>
                <h3>Oops...</h3>
                <p>Page Not Found</p>
            </Wrapper>
        </Container>
    )
}

export default NoMatch
