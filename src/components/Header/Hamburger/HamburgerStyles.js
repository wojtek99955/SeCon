import styled from 'styled-components';
import { device } from '../../../assets/media';

export const Burger = styled.div`
    height: 30px;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-flow: column nowrap;
    position: relative;
    z-index: 3;
    cursor: pointer;
    position: ${({ open }) => open ? "fixed" : "block"};
    margin-right: ${({ open }) => open ? 0 : "none"};
    right: ${({ open }) => open ? "1rem" : "none"};

    @media ${device.tablet}{
        display: none;
    }


`
export const Bar = styled.div`
    height: 4px;
    background-color: ${({ theme }) => theme.color.mainColor};
    transform-origin:1px;
    border-radius: 10px;
    transition: all 0.3s linear;

        &:nth-child(1) {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
        opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }

`