import styled from 'styled-components';
import { ZoomIn } from '@styled-icons/bootstrap/ZoomIn';
import { device } from '../../assets/media';

export const Container = styled.div`
    max-width: 1300px;
    margin:auto;
    h2{
        text-align:center;
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 8rem);
    align-items: center;
    gap: 2rem;
    padding: 4rem 4rem;
    justify-content: center;

    @media ${device.mobileL}{
        grid-template-columns: repeat(2, 9rem);
        gap: 3rem;
    }
    @media ${device.tablet}{
        grid-template-columns: repeat(3, 11rem);
    }
    @media ${device.laptop}{
        grid-template-columns: repeat(3, 13rem);
    }
    @media ${device.laptopL}{
        grid-template-columns: repeat(3, 1fr);
    }
`

export const ImageContainer = styled.div`
    position: relative;
    transition: transform 400ms ease;

    &:hover{
        transform: scale(1.1);
    }
`


export const Image = styled.img`
    width: 100%;
    cursor: pointer;
`
export const Overlay = styled.div`
    position: absolute;
    opacity: 0;
    background-color: rgba(0,0,0,0.5);
    width:100%;
    height:100%;
    top: 0; 
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 400ms ease;

    &:hover{
        opacity:1;
    }

`

export const ZoomIcon = styled(ZoomIn)`
    width:1.5rem;
    color:white;

    @media ${device.tablet}{
        width:2.5rem;
    }
`