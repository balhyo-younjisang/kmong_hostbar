import React from "react";
import styled from "styled-components";
import images from "./image";

const StyledHeader = styled.header`
  height: 8vh;
  width: 100vw;
  background-color: black;
`;

const StyledImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledImage = styled.img``;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledImageContainer>
          <StyledImage src={images.MainImage} />
        </StyledImageContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
