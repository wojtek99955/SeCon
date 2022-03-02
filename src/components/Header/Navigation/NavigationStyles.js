import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    align-items: center;


    ul {
  list-style: none;
  display: flex;
  gap:1rem;

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
    padding-top: 3.5rem;
    transition: transform 0.5s ease-in-out;
    align-items: center;
    justify-content: center;
    gap:3rem;
  }
        

        li {
            font-size: 0.9rem;
            cursor: pointer;
            color: black;
            font-weight: 600;
            text-transform: uppercase;

            &:nth-of-type(2){
                position:relative;
            }

            @media (max-width: 768px){
                font-size: 3rem;

            }



            &:hover {
                color: #f7941c;
            }
        }

    }
`

export const Dropdown = styled.div`
    position:absolute;
`
