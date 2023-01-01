import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const StyledA = styled.a`
  text-decoration: none;
  color: white;
`;

const StyledButton = styled.button`
  width: 4em;
  height: 6vh;
  border-radius: 50%;
  margin: 30px;
  background-color: #222;
  color: white;
  border: 0px;
  position: fixed;
  bottom: 0px;

  &:active {
    background-color: white;
  }

  @media screen and (max-width: 1000px) {
    width: 3em;
  }
`;

const CallButton = () => {
  return (
    <>
      <StyledButton value="fixed-call" name="fixed-call">
        <StyledA href="tel:010-7762-0416">
          <FontAwesomeIcon icon={faPhone} />
        </StyledA>
      </StyledButton>
    </>
  );
};

export default CallButton;
