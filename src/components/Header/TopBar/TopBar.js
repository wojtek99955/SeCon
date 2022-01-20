import React from 'react'
import styled from 'styled-components'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
import { Location } from '@styled-icons/fluentui-system-filled/Location'
import { device } from '../../../assets/media';

const Bar = styled.div`
    background-color: #f7941c;
    padding: 0.4rem 1rem;
    display: none;

    @media ${device.tablet} {
        display: block;
    }
`

const Container = styled.div`
    max-width: 1300px;
    margin: auto;
    display: flex;

    h3 {
        color: white;
        font-size: 0.7rem;
    }
`
const MailIcon = styled(EmailOutline)`
    width: 1.2rem;
    color: white;
`
const LocationIcon = styled(Location)`
    width: 1.2rem;
    color: white;
    margin-left: 2rem;
`
const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

function TopBar() {
    return (
        <Bar>
            <Container>
                <ItemContainer>
                    <MailIcon />
                    <h3>support@secon.com</h3>
                </ItemContainer>
                <ItemContainer>
                    <LocationIcon />
                    <h3>Poznan, Strzeszyńska 67</h3>
                </ItemContainer>
            </Container>
        </Bar>
    )
}

export default TopBar
