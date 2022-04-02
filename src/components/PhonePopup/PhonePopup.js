import styled from 'styled-components'
import {Phone} from '@styled-icons/boxicons-solid/Phone'
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'

const PhoneIcon = styled(Phone)`
    width:3rem;
    position: absolute;
    color: white;
`

const Container = styled.div`
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
const Wrapper = styled.div`
    width: 6rem;
    height:6rem;
    position: fixed;
    top: 90%;
    left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CloseIcon = styled(CloseOutline)`
    width:1rem;
    position: absolute;
    top: 0;
    right: -1rem;
    color: #777777;
    cursor: pointer;

`

function PhonePopup() {
  return (
        <Wrapper>
            <CloseIcon/>
        <Container>
            <a href="tel:+48602369987"><PhoneIcon/></a>
        </Container>
        </Wrapper>
  )
}

export default PhonePopup