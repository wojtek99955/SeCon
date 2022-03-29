import styled from 'styled-components';
import { CameraDome } from '@styled-icons/fluentui-system-filled/CameraDome'
import { ElectricalServices } from '@styled-icons/material-twotone/ElectricalServices'
import { device } from '../../assets/media';
import { Security } from '@styled-icons/material/Security';
import { Lock } from '@styled-icons/boxicons-regular/Lock';
import {scaleAnimation} from '../MainPage/MainPageStyles';

export const Section = styled.section`
background-color: #F6F6F6;
padding: 3rem 0;

@media ${device.tablet}{
    padding: 5rem 0;
}

`

export const Container = styled.div`
    max-width: 1300px;
    margin: auto;
    padding:1rem;

    
    h2{
        font-size: ${({ theme }) => theme.fontSize.m};
        color:#777777;
        text-align: center;
        margin-bottom: 5rem;
        text-decoration: ${({ theme }) => `underline solid ${theme.color.mainColor} 5px`};
        text-underline-offset: 1rem;
    }
    h3{
        text-align: center;
        max-width:25rem;
        margin:auto;
        margin-bottom: 4rem;

        @media ${device.tablet}{
            margin-bottom:6rem;
        }
    }
`

export const ServicesWrapper = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
    align-items:center;
    gap: 2rem;

    @media ${device.tablet}{
        grid-template-columns: 1fr 1fr;
    }

        @media ${device.laptop}{
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

    ul{
        list-style-type:none;
        margin:auto;
    }
    li{
        margin-top: 1rem;
        display: flex;
        align-items: center;
    }

`

export const Button = styled.button`

    width:7rem;
    padding: 0.5rem 0;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.mainColor};
    color: white;
    border:none;
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: auto;
    font-size: ${({theme}) => theme.fontSize.xs};

        &:hover{
            background-color: #c77007;
            
        }
`

export const Service = styled.div`
background-color: white;
padding: 2rem;
display: flex;
flex-direction: column;
height: 19rem;
position: relative;
width:100%;
box-shadow: 0px 3px 13px -8px rgba(66, 68, 90, 1);
max-width:15rem;
transition: transform;
transition-duration: 400ms;

    &:hover{
        transform: scale(1.1);
    }
    &:hover ${Button}{
        animation: ${scaleAnimation};
        animation-duration: 300ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-direction: alternate;
}

h3{
    color:black;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.s};
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
}    
`
export const Title = styled.div`
    
`

export const CameraIcon = styled(CameraDome)`
    color: ${({ theme }) => theme.color.mainColor};
    width: 4rem;
    align-self: center;
    margin-bottom: 2rem;

`

export const ElectricalIcon = styled(ElectricalServices)`
    color: ${({ theme }) => theme.color.mainColor};
    width:4rem;
    align-self: center;
    margin-bottom: 2rem;
`

export const SecurityIcon = styled(Security)`
    color: ${({ theme }) => theme.color.mainColor};
    width: 4rem;
    align-self: center;
    margin-bottom: 2rem;
`
export const LockIcon = styled(Lock)`
    color: ${({ theme }) => theme.color.mainColor};
    width: 4rem;
    align-self: center;
    margin-bottom: 2rem;
`
