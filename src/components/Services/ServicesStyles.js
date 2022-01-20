import styled from 'styled-components';
import { CameraDome } from '@styled-icons/fluentui-system-regular/CameraDome'
import { ElectricalServices } from '@styled-icons/material-twotone/ElectricalServices'
import { CheckmarkCircle2Outline } from '@styled-icons/evaicons-outline/CheckmarkCircle2Outline'
import { device } from '../../assets/media'


export const Section = styled.section`
background-color: #F6F6F6;
padding: 5rem 0;

`

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    padding:1rem;

    
    h2{
        font-size: ${({ theme }) => theme.fontSize.m};
        color:#777777;
        text-align: center;
        margin-bottom: 6rem;
        text-decoration: ${({ theme }) => `underline solid ${theme.color.mainColor} 5px`};
        text-underline-offset: 1rem;
    }
    h3{
        text-align: center;
        margin-bottom: 4rem;
    }
`

export const ServicesWrapper = styled.div`
    width:100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:10rem;
    align-items:center;

    @media ${device.tablet}{
        flex-direction: row;
        gap:2rem;
    }

        @media ${device.laptop}
{
    width: 90%;
    gap:6rem;
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
export const Monitoring = styled.div`
background-color: ${({ theme }) => theme.color.mainColor};
padding: 2rem;
display: flex;
flex-direction: column;
width:100%;

    @media ${device.tablet}{
        width:50%;
    }


h3{
    color:white;
    text-align: center;
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fontSize.m};
}


li{
    color:white;

}
`
export const Measurement = styled.div`
    background-color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media ${device.tablet}{
        width:50%;
    }

    

    h3{
    color:#777777;
    text-align: center;
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fontSize.m};
}

    li{
        color:#777777;
    }
`

export const CameraIcon = styled(CameraDome)`
    color: white;
    width: 3rem;
    align-self: center;
    margin-bottom: 2rem;

`

export const ElectricalIcon = styled(ElectricalServices)`
    color: ${({ theme }) => theme.color.mainColor};
    width:3rem;
    align-self: center;
    margin-bottom: 2rem;
`

export const CheckMark = styled(CheckmarkCircle2Outline)`
    width: 1rem;
    color:white;
    margin-right: 0.5rem;
`

export const CheckMarkSecond = styled(CheckmarkCircle2Outline)`
    width: 1rem;
    color: ${({ theme }) => theme.color.mainColor};
    margin-right: 0.5rem;
`

