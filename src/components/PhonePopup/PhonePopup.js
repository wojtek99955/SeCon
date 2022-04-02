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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.color.mainColor};
`

function PhonePopup() {
  return (
    <Container><PhoneIcon/></Container>
  )
}

export default PhonePopup