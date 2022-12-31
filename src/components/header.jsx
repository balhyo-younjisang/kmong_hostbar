import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 25vh;
  width: 100vw;
  background-color: black;
`;

const StyledLogoContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledLogo = styled.h1`
  text-align: center;
  font-size: 50px;
  text-transform: uppercase;
  color: #858069;
  letter-spacing: 1px;
  font-family: "Playfair Display", serif;
  font-weight: 400;
`;

const StyledSubtitle = styled.span`
  margin-top: 5px;
  font-size: 15px;
  color: #858069;
  word-spacing: 1px;
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-weight: 500;

  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-template-rows: 27px 0;
  grid-gap: 20px;
  align-items: center;

  &:after,
  &:before {
    content: " ";
    display: block;
    border-bottom: 1px solid #858069;
    border-top: 1px solid #858069;
    height: 5px;
    background-color: black;
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledLogoContainer>
          <StyledLogo>
            수원 인계동 1등 호스트바
            <StyledSubtitle>
              동근 실장
              <br />
              010 7762 0416
            </StyledSubtitle>
          </StyledLogo>
        </StyledLogoContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
