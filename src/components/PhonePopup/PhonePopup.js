import { useState, useEffect } from 'react'
import { PhoneIcon, Container, Wrapper, CloseIcon } from './PhonePopupStyles'

function PhonePopup() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(!show)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
            console.log(show)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {show ? (
                <Wrapper show={show}>
                    <CloseIcon onClick={handleClose} />
                    <Container>
                        <a href="tel:+48602369987">
                            <PhoneIcon />
                        </a>
                    </Container>
                </Wrapper>
            ) : null}
        </>
    )
}

export default PhonePopup
