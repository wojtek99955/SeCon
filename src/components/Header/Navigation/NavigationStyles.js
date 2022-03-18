import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { CaretDown } from '@styled-icons/boxicons-regular/CaretDown';
import { device } from '../../../assets/media';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 0;

  @media ${device.mobileM}{
      gap:1rem;
  }

    @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    z-index:2;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    transition: transform 0.5s ease-in-out;
    align-items: center;
    justify-content: center;
  }


    

`
export const Li = styled.li`
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
    font-weight: 600;
    text-transform: uppercase;
    padding:1rem 0;

            &:nth-of-type(2){
                position:relative;
                @media (max-width: 768px){
                    display:none;
                }
            }
            @media ${device.mobileM}{
                font-size: 2rem;
            }
            @media ${device.tablet}{
                font-size: 1rem;
            }

            &:hover {
                color: #f7941c;
            }

`

export const LiMobile = styled.li`
    position: relative;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align:center;
    font-weight:600;
    padding: 1rem 0;
    
    @media (min-width: 769px){
        display: none;
    }
    @media ${device.mobileM}{
        font-size: 2rem;
    }
`
export const StyledHashLink = styled(HashLink)`
    text-decoration: none;
    color:black;

    &:hover{
        color: ${({ theme }) => theme.color.mainColor};
    }
`

export const DownIcon = styled(CaretDown)`
    width: 1rem;
    color:${({ theme }) => theme.color.mainColor};
    transform: ${({ dropdown }) => dropdown ? "rotate(180deg)" : null};

`