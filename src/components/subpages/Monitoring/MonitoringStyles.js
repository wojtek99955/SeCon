import styled from 'styled-components';
import { VehicleCar } from '@styled-icons/fluentui-system-regular/VehicleCar';
import { Transfer } from '@styled-icons/boxicons-regular/Transfer';
import { VideoRecording } from '@styled-icons/fluentui-system-regular/VideoRecording';
import { Gear } from '@styled-icons/bootstrap/Gear';
import { HandIndex } from '@styled-icons/bootstrap/HandIndex';
import { device } from '../../../assets/media';

export const DetailsContainer = styled.div`
    row-gap: 4.5rem;
    column-gap: 5rem;
    justify-content: center;
    padding: 0 0 4rem 0;
    display: flex;
    flex-direction: column;
    gap:3.5rem;
    width:16rem;
    margin:auto;
    @media ${device.tablet}{
        display: grid;
        grid-template-columns: 16rem 16rem;
        width: auto;
    }
`

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    border: 1px solid #dedede;
    padding:1rem;
    width: 16rem;
    height:17.5rem;
    border-radius:8px;

    &:nth-of-type(5){
        grid-column-start: 1;
        grid-column-end: 3;
    }
    h3{
        margin:1rem 0;
        font-size: ${({ theme }) => theme.fontSize.s};
        text-align:center;
    }
    p{
            text-align:center;
    margin-top:-2rem;
    margin:0.5rem;
    color:#777777;
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height:1.3rem;
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
