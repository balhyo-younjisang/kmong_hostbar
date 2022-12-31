import React from "react";
import styled from "styled-components";
import images from "../image";

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  display: grid;
  color: white;
  font-family: "Playfair Display", serif;

  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${images.Room5});
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(90%);

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 70vh;
  }
`;

const StyledTitle = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const StyledSubTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const SecondSection = () => {
  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledTitle>수원 인계동 1등 호스트바</StyledTitle>
          <StyledSubTitle>Suwon No.1 KARAOKE</StyledSubTitle>
          <StyledSubTitle>ONLY 고정선수 항시대기</StyledSubTitle>
        </StyledContainer>
      </StyledSection>
    </>
  );
};

export default SecondSection;
