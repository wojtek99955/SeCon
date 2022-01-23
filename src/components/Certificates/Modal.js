import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

const ModalContainer = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, 0.8);
    opacity: ${({ model }) => model ? 1 : 0};
    position: fixed;
    transition: opacity .4s ease;
    top:0;
    left:0;
    z-index:10;

    img{
        transform: scale(4);
    }
`

const CloseBtn = styled(CloseOutline)`
width:3rem;
color:white;
position: fixed;
top: 10px;
right:10px;
cursor: pointer;
`
function Modal({ modal, imgsrc, setModal }) {

    console.log(modal)

    const handleClose = () => {
        setModal(false);
    }
    return (


        <ModalContainer model={modal} onClick={handleClose}>
            <img src={imgsrc} alt="" srcset="" />
            <CloseBtn />
        </ModalContainer>
    )
}

export default Modal;
