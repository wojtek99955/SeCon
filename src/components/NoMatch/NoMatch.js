import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f6f6f6;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 3rem;
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
const BackBtn = styled(Link)`
    background: ${({ theme }) => theme.color.mainColor};
    color: white;
    text-decoration: none;
    padding: 0.8rem 1rem;
    border-radius: 10px;
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
                <BackBtn to="/">Strona główna</BackBtn>
            </Wrapper>
        </Container>
    )
}

export default NoMatch
