import React from "react";
import styled from "styled-components";
import images from "../image";

const StyledSection = styled.section`
  height: 100vh;
  width: 100vw;
  margin-top: 100px;
  font-size: 25px;
  font-family: "Playfair Display", serif;
  text-align: center;
  color: white;
`;

const StyledImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  @media (max-width: 500px) {
    grid-template-columns: 400px;
  }
`;

const StyledImage = styled.img`
  width: 600px;
  height: 400px;
  margin-top: 30px;

  @media screen and (max-width: 728px) {
    width: 200px;
    height: 200px;
  }
`;

const FourthSection = () => {
  return (
    <StyledSection>
      <h3>최저가 주대금액</h3>
      <h3>즐거운 술자리를 만들어드립니다</h3>
      <StyledImageContainer>
        <StyledImage src={images.Room3} />
        <StyledImage src={images.Room4} />
        <StyledImage src={images.Room8} />
        <StyledImage src={images.Room6} />
      </StyledImageContainer>
    </StyledSection>
  );
};

export default FourthSection;
