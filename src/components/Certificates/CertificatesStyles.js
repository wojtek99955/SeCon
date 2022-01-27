import styled from 'styled-components';
import { ZoomIn } from '@styled-icons/bootstrap/ZoomIn';

export const Container = styled.div`


    h2{
        text-align:center;
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 10rem);
    align-items: center;
    gap:2rem;
    padding: 4rem 4rem;
    justify-content: center;
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
    width: 2.5rem;
    color:white;
`