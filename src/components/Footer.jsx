import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -55px;
  width: 100%;
`;

export function Footer() {
  return (
    <FooterDiv >
    <h5> Made with ♥ by&nbsp;<a style={{textDecoration : "none"}} href="https://github.com/Neelpatel11">Neel Patel</a> </h5>
    </FooterDiv>
  );
}
