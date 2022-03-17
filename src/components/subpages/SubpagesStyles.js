import styled from 'styled-components';
import { device } from '../../assets/media';

export const Section = styled.section`
    background: #F6F6F6;
`

export const Container = styled.section`
    max-width:1300px;
    margin:auto;
    padding: 0 1rem;

    p{
        margin-top:2rem;
        line-height:1.3rem;
        font-size:${({ theme }) => theme.fontSize.xs};

        &:first-of-type{
            margin-top: 5rem;
        }
    }
`

export const ContentWrapper = styled.div`
    margin:auto;
    padding: 4rem 0;
    @media ${device.tablet}{
        width:80%;
    }
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
         line-height:1.5rem;
         font-size:${({ theme }) => theme.fontSize.xs};
        }
`
export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;

    @media ${device.laptop}{
        flex-direction: row;
        gap: 4rem;
    }
`
export const Description = styled.div`


    ul{
        padding-left: 2rem;
        list-style-type: none;

        li{
            margin-bottom:1rem;
            padding-left:0.5rem;
            font-size: ${({ theme }) => theme.fontSize.xs};

            &::marker {
                color: ${({ theme }) => theme.color.mainColor};
                font-size:1.5rem;
                content: '\\2713';
            }
        }
    }
    
    p{
        line-height:1.5rem;
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
        h3{
        margin:2rem 0;
    }
`

export const Image = styled.img`
    width:90%;
    /* border-top: ${({ theme }) => `1.3rem solid ${theme.color.mainColor}`};
    border-right: ${({ theme }) => `1.3rem solid ${theme.color.mainColor}`};
    border-bottom: ${({ theme }) => `0.4rem solid ${theme.color.mainColor}`}; */

    @media ${device.mobileL}{
        width:60%;
    }
    @media ${device.laptop}{
        width:40%;
    }
`