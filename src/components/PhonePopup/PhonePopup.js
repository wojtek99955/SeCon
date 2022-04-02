import {useState} from 'react'
import styled from 'styled-components'
import {Phone} from '@styled-icons/boxicons-solid/Phone'
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'
import {device} from '../../assets/media'

const PhoneIcon = styled(Phone)`
    width:2rem;
    position: absolute;
    color: white;

    @media ${device.tablet}{
        width: 3rem;
    }
`

const Container = styled.div`
    padding: 2rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.color.mainColor};
    cursor: pointer;

    @media ${device.tablet}{
        padding: 2.5rem;
    }

    a{
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Wrapper = styled.div`
    position: fixed;
    top: 88%;
    left: 1rem;
    display: ${({close}) => close? "none" : "flex"};
    justify-content: center;
    align-items: center;
    z-index: 10;
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

    const [close, setClose] = useState(false);
    const handleClose = () => setClose(!close);
  return (
        <Wrapper close={close}>
            <CloseIcon onClick={handleClose}/>
        <Container>
            <a href="tel:+48602369987"><PhoneIcon/></a>
        </Container>
        </Wrapper>
  )
}

export default PhonePopup