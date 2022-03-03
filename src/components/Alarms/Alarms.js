import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    max-width:1300px;
    margin:auto;
    height:100vh;
    h2{
        padding-top:10rem;
        text-align:center;
    }

    p{
        margin-top:5rem;
    }
`
const ContentWrapper = styled.div`
    width:80%;
    margin:auto;
`

function Alarms() {
    return (
        <Container>
            <ContentWrapper>
                <h2>Alarmy</h2>
                <p> Elektroniczne systemy zabezpieczeń tworzymy na bazie
                    szerokiej gamy urządzeń  -  Satel, Bosch, DSC, Jablotron i inne.
                </p>
                <p>Tworzymy małe, średnie, jak i duże systemy, dla każdego użytkownika.</p>
            </ContentWrapper>
        </Container>
    )
}

export default Alarms