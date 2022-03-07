import styled from 'styled-components';
import { device } from '../../assets/media';

export const Section = styled.section`

`
export const Container = styled.div`
    max-width:1300px;
    margin:auto;

    p{
        margin-top:5rem;
    }
`
export const ContentWrapper = styled.div`
    width:80%;
    margin:auto;
    padding: 4rem 0;
`
export const Title = styled.div`
    max-width: 30rem;
    margin:auto;
    display: flex;
    flex-direction: column;
    padding:5rem 0;

    h2{
        padding: 3rem 0 0rem 0;
        text-align:center;
        font-size: ${({ theme }) => theme.fontSize.m};

        @media ${device.tablet}{
            font-size: ${({ theme }) => theme.fontSize.l};
        }
    }

    p{
         text-align:center;
         color:#777777;
         line-height:1.3rem;
         font-size:${({ theme }) => theme.fontSize.xs};
        }
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    gap: 3rem;
    @media ${device.tablet}{
        padding: 6rem 0;
    }

    @media ${device.tablet}{
        flex-direction: row;
        gap: 4rem;
    }

    h3{
        margin-bottom: 2rem;
    }

    ul{
        padding-left:2rem;
    }
    li{
        margin-bottom:0.5rem;
    }
`

export const Text = styled.div`

`

export const Image = styled.img`
    width:90%;
    border-top: ${({ theme }) => `1.3rem solid ${theme.color.mainColor}`};
    border-right: ${({ theme }) => `1.3rem solid ${theme.color.mainColor}`};
    border-bottom: ${({ theme }) => `0.4rem solid ${theme.color.mainColor}`};

    @media ${device.mobileL}{
        width:80%;
    }
    @media ${device.tablet}{
        width:40%;
    }
`