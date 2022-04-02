import styled from 'styled-components'
import {Phone} from '@styled-icons/boxicons-solid/Phone'

const PhoneIcon = styled(Phone)`
    width:3rem;
    position: absolute;
    color: white;
`

const Container = styled.div`
    position: fixed;
    top: 90%;
    left: 1rem;
    padding: 2.5rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.color.mainColor};
    cursor: pointer;

    a{
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

function PhonePopup() {
  return (
    <Container>
        <a href="tel:+48602369987"><PhoneIcon/></a>
        </Container>
  )
}

export default PhonePopup