import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "./data";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

const Container = styled.div``;
const Title = styled.h1``;
const SubTitle = styled.h3``;
const Wrapper = styled.div``;
const Slide = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const Box = styled.div``;
const Arrow = styled.div``;

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className="App">
      <Container>
        <Title>React Lab 101</Title>
        <SubTitle>Challenge 1</SubTitle>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
            </Slide>
          ))}
        </Wrapper>
        <Box>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <MdArrowBack />
          </Arrow>
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <MdArrowForward />
          </Arrow>
        </Box>
      </Container>
    </div>
  );
}

export default App;
