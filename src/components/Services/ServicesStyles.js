import styled from 'styled-components';
import { CameraDome } from '@styled-icons/fluentui-system-regular/CameraDome'
import { ElectricalServices } from '@styled-icons/material-twotone/ElectricalServices'
import { device } from '../../assets/media';
import { Security } from '@styled-icons/material/Security';
import { Lock } from '@styled-icons/boxicons-regular/Lock';


export const Section = styled.section`
background-color: #F6F6F6;
padding: 5rem 0;

`

export const Container = styled.div`
    max-width: 1300px;
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

    p{
        font-size: ${({ theme }) => theme.fontSize.xs};
        color:#777777;
    }

`
export const Service = styled.div`
background-color: white;
padding: 2rem;
display: flex;
flex-direction: column;
height: 18rem;
position: relative;
width:100%;
box-shadow: 0px 3px 13px -8px rgba(66, 68, 90, 1);
max-width:15rem;



h3{
    color:black;
    text-align: center;
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fontSize.s};
}

    button{
        width:7rem;
        padding: 0.5rem 0;
        border-radius: 5px;
        margin-top: 1rem;
        background-color: ${({ theme }) => theme.color.mainColor};
        color: white;
        border:none;
        cursor: pointer;
        position: absolute;
        bottom: 1rem;
        left: 0;
        right: 0;
        margin: auto;

        &:hover{
            background-color: #c77007;
        }
        

        
    }
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
    margin-bottom: rem;
`