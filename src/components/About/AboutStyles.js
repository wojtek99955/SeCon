import styled from 'styled-components';
import img from '../../assets/img/camera.jpeg'
import { device } from '../../assets/media';
import img2 from '../../assets/img/light-bgr.svg';

export const Section = styled.section`
    margin: 4rem 2rem;
`

export const Container = styled.div`
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    position:relative;

    &::before{
        content:"";
        background-image: url(${img2});
        background-repeat: no-repeat;
        background-size: contain;
        width:300px;
        height:300px;
        position:absolute;
        right:-30px;
        top:-30px;
        display: none;

        @media ${device.tablet}{
            display: block;
        }
    }

    &::after{
        content:"";
        background-image: url(${img2});
        background-repeat: no-repeat;
        background-size: contain;
        width:120px;
        height:120px;
        position:absolute;
        bottom:80px;
        left:50%;

    }

    @media ${device.tablet}{
        flex-direction: row;
                gap:2rem;
    }
`

export const StyledImg = styled.div`
    height: 400px;
    width:100%;
    background-image: url(${img});
    background-size: cover;
    box-sizing: content-box;
    border-top: 1.5rem solid #f7941c;
    border-right: 1.5rem solid #f7941c;
    border-bottom: 0.4rem solid #f7941c;
    margin-bottom: 0;

    @media ${device.tablet}{
        width:40%;
        height:700px;

    }

`
export const AboutInfo = styled.div`
    position: relative;
    z-index:1;
@media ${device.tablet}{
    width:50%;
}

    h1 {
        border-bottom: 0.4rem solid #f7941c;
        display: inline-block;
        font-size: ${({ theme }) => theme.fontSize.l};
        margin-bottom: 3rem;
        padding-bottom: 0.5rem;
        margin-top: 2rem;
    }
    h2 {
        font-size: ${({ theme }) => theme.fontSize.m}
    }
    p {
        

        
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: #777777;
        line-height: 1.6rem;
        margin-bottom:2rem;

        &:first-of-type{
margin-top: 5rem;
        }
    }
`