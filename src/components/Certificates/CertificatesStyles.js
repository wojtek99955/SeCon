import styled from 'styled-components';

export const Container = styled.section`
    max-width:1300px;
    margin:auto;

    h2{
        text-align:center;
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:2rem;
    padding: 4rem 0;
`

export const ImageContainer = styled.div`

`

export const Image = styled.img`
    width:100%;
    cursor: pointer;
    transition: transform 400ms ease;

    &:hover{
        transform: scale(1.1);
    }
`