import styled from 'styled-components';
import img from '../../assets/img/camera.jpeg'
import { device } from '../../assets/media';

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
        margin-top: 5rem;
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: #777777;
        line-height: 1.6rem;
    }
`