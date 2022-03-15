import styled from 'styled-components';
import { VehicleCar } from '@styled-icons/fluentui-system-regular/VehicleCar';
import { Transfer } from '@styled-icons/boxicons-regular/Transfer';
import { VideoRecording } from '@styled-icons/fluentui-system-regular/VideoRecording';
import { Gear } from '@styled-icons/bootstrap/Gear';
import { HandIndex } from '@styled-icons/bootstrap/HandIndex';
import img from '../../../assets/img/camera-img.jpg';
import { device } from '../../../assets/media';

export const DetailsContainer = styled.div`
    row-gap: 4.5rem;
    column-gap: 5rem;
    justify-content: center;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    gap:3.5rem;
    width:15rem;
    margin:auto;
    @media ${device.tablet}{
        display: grid;
        grid-template-columns: 15rem 15rem;
        width: auto;
    }
`

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    border: 1px solid #dedede;
    width:16rem;
    height:16rem;
    padding:1rem;
    border-radius:8px;
    &:nth-of-type(5){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    h3{
        margin:1rem 0;
        font-size: ${({ theme }) => theme.fontSize.s};
    }
    
    p{
        text-align:center;
        margin:0.5rem;
        color:#777777;
        font-size: ${({ theme }) => theme.fontSize.xs};
        line-height:1.3rem;
    }
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
        background: rgba(0,0,0,0.6) url(${img});
    background-size: cover;
    height:25rem;
    background-position:center;
    background-blend-mode: darken;
    h3{
        text-align:center;
        color:white;
        margin-bottom:2rem;
        font-size: ${({ theme }) => theme.fontSize.m} ;
    }
    button{
        width:9rem;
        background-color: ${({ theme }) => theme.color.mainColor};
        padding: 0.6rem 0;
        font-size: ${({ theme }) => theme.fontSize.s};
        color:white;
        border-radius:10px;
        border: 3px solid transparent;
        transition: background-color 300ms;
        cursor: pointer;

        &:hover{
            background-color: transparent;
            border: ${({ theme }) => `3px solid ${theme.color.mainColor}`};

        }
    }
`

export const CarIcon = styled(VehicleCar)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`
export const TransferIcon = styled(Transfer)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`

export const RecordingIcon = styled(VideoRecording)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`
export const GearIcon = styled(Gear)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`
export const HandIcon = styled(HandIndex)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`
