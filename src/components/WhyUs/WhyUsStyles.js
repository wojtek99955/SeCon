import styled from 'styled-components';
import { ShieldCheck } from '@styled-icons/remix-line/ShieldCheck';
import { Medal } from '@styled-icons/remix-line/Medal';
import { device } from '../../assets/media';

export const NumbersSection = styled.section`
    padding-bottom: 4rem;
    @media ${device.tablet}{
        padding: 8rem 0;
    }
`

export const Container = styled.div`
    max-width:1300px;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:5rem;

    @media ${device.tablet}{
        flex-direction: row;
    }
`
export const NumberItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        font-size: 4rem;
        margin-top:1rem;
    }
    p{
        margin-top: 0.5rem;
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: #777777;
    }
`

export const MedalIcon = styled(Medal)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`
export const ShieldIcon = styled(ShieldCheck)`
    width:3rem;
    color: ${({ theme }) => theme.color.mainColor};
`