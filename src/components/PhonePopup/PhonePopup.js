import styled from 'styled-components'
import {Phone} from '@styled-icons/boxicons-solid/Phone'

const PhoneIcon = styled(Phone)`
    width:3rem;
    position: absolute;
`

const Container = styled.div`
    position: fixed;
    top: 90%;
`

function PhonePopup() {
  return (
    <Container><PhoneIcon/></Container>
  )
}

export default PhonePopup