import React from "react";
import styled from "styled-components";
import images from "../image";

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  align-content: space-between;
`;

const StyledContainer = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  color: white;
  font-size: 25px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-family: "Playfair Display", serif;
`;

const StyledExplain = styled.p`
  @media screen and (max-width: 728px) {
    display: none;
  }
`;

const StyledImgContainer = styled.div`
  @media screen and (max-width: 728px) {
    width: 100vw;
    height: 50vh;
    text-align: center;
  }
`;

const StyledImage = styled.img`
  width: 43vw;
  height: 50vh;

  @media screen and (max-width: 728px) {
    width: 80vw;
    height: 40vh;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;

const ThirdSection = () => {
  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledImgContainer>
            <StyledImage src={images.Room10} style={{ marginLeft: "200px" }} />
          </StyledImgContainer>
          <StyledExplain>
            찾아주시는 고객님의 마음을 술잔처럼 채워주는
            <br /> 아름다운 술자리를 약속드리겠습니다.
          </StyledExplain>
        </StyledContainer>
        <StyledContainer>
          <StyledImgContainer>
            <StyledImage src={images.Room9} style={{ marginLeft: "200px" }} />
          </StyledImgContainer>
          <StyledExplain>
            수원 전지역 모든 업소를 고객님의 상황과 성향에 맞게
            <br /> 정확하고 빠르게 안내해드리겠습니다.
          </StyledExplain>
        </StyledContainer>
      </StyledSection>
    </>
  );
};

export default ThirdSection;
