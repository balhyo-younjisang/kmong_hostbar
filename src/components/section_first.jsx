import React from "react";
import styled from "styled-components";
import images from "../image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { StyledA } from "./callbutton";

const StyledSection = styled.section`
  text-align: center;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const StyledImageContainer = styled.div`
  width: 55vw;
  height: 100vh;

  @media screen and (max-width: 728px) {
    width: 90vw;
    height: 80vh;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledCenter = styled.div`
  text-align: center;
  margin: 20px;
`;

const StyledButton = styled.button`
  width: 10vw;
  height: 6vh;
  color: white;
  background-color: #797879;
`;

const FirstSection = () => {
  return (
    <>
      <StyledSection>
        <StyledImageContainer>
          <StyledImage src={images.MainImage} alt="room" />
        </StyledImageContainer>
        <StyledCenter>
          <StyledButton value="call" name="call">
            <StyledA href="tel:010-7762-0416">
              <FontAwesomeIcon icon={faPhone} style={{ paddingRight: "5px" }} />
              010-7762-0416
            </StyledA>
          </StyledButton>
        </StyledCenter>
      </StyledSection>
    </>
  );
};

export default FirstSection;
