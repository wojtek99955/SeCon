import styled from 'styled-components';
import Slider from "react-slick";
import { MdOutlineNavigateNext } from 'react-icons/md';
import { MdOutlineNavigateBefore } from 'react-icons/md';

export const Section = styled.section`
    padding: 1rem ;
`
export const Container = styled.div`
    max-width: 1200px;
    margin:auto;

    h2{
        text-align: center;
        text-decoration: ${({ theme }) => `underline solid ${theme.color.mainColor} 5px`};
        text-underline-offset: 1rem;
    }
`

export const PrevIcon = styled(MdOutlineNavigateBefore)`
    color: ${({ theme }) => theme.color.mainColor};
    font-size: 2rem;
`
export const NextIcon = styled(MdOutlineNavigateNext)`
    color: ${({ theme }) => theme.color.mainColor};
    font-size: 2rem;
`



export const FlipCard = styled.div`
padding: 2rem;


 .card-container {
  cursor: pointer;
  perspective: 600;
  position: relative;
  width:100%;
  height: 300px;
  margin: 5rem 0;

}

.card {
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: all 600ms ease-in-out;
  width: 100%;
}
.card:hover {
  transform: rotateY(180deg);
}
.card .side {
  backface-visibility: hidden;
  border-radius: 6px;
  height: 100%;
  position: absolute;
  overflow: hidden;
  width: 100%;
}
.card .back {
  background: #eaeaed;
  color: #0087cc;
  line-height: 150px;
  text-align: center;
  transform: rotateY(180deg);
}
.side{
    position:relative;
}
img{
    width:100%;
    height:auto;
    position:absolute;
}

`
export const SliderWrapper = styled.div`
width:100%;
margin:auto;
`

export const StyledSlider = styled(Slider)`


display: flex;
flex-direction: column;
    .slick-prev::before, .slick-next::before{
    display: none;



}

.dots{
    display: block;
    margin:auto;

    li{
          list-style: none;
  cursor: pointer;
  display: inline-block;
  margin: 0 3px;
  padding: 0;
  justify-content: center;
    }
li button {
  border: none;
  background: ${({ theme }) => theme.color.mainColor};
  color: transparent;
  cursor: pointer;

  height: 15px;
  width: 15px;
  border-radius: 7.5px;
}
.slick-active button {
  background-color: #fcd4a4;
}

li button:hover{
  background: #bf6c07;
  outline: 0;
}

}


`