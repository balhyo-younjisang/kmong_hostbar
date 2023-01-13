import React from "react";
import styled from "styled-components";
import { StyledA } from "./callbutton";
import { BsInstagram } from "react-icons/bs";

const StyledFooter = styled.footer`
  display: grid;
  width: 100vw;
  height: 15vh;
  text-align: center;
  align-content: center;
  justify-content: center;
  color: white;
  margin-top: 300px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 수원 인계동 1등 호스트바</p>
      <StyledA
        href="https://www.instagram.com/suwonkaraoke06/"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <BsInstagram></BsInstagram>
      </StyledA>
    </StyledFooter>
  );
};

export default Footer;
