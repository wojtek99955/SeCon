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
    display: ${({show}) => show? "flex" : "none"};
    justify-content: center;
    align-items: center;
    z-index: 10;
    animation-name: bounce;
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
        animation-duration: 1600ms;
        animation-iteration-count: 3;

    @keyframes bounce {
        0%{
            transform: scale(1,1) translateY(0);
        }
        10%{ 
            transform: scale(1.1,.9) translateY(0); 
        }
        30%{ 
            transform: scale(.9,1.1) translateY(-100px); 
        }
        50%{ 
            transform: scale(1.05,.95) translateY(0); 
        }
        57%{ 
            transform: scale(1,1) translateY(-7px); 
        }
        64%{ 
            transform: scale(1,1) translateY(0); 
        }
        100%{ 
            transform: scale(1,1) translateY(0); 
        }
    }
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

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(!show);

  return (

        <Wrapper show={show} >
            <CloseIcon onClick={handleClose}/>
            <Container>
                <a href="tel:+48602369987"><PhoneIcon/></a>
            </Container>
        </Wrapper>

  )
}

export default PhonePopup