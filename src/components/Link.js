// @flow

import React from "react";
import styled from "styled-components";

type Props = {
  to: string,
  children: any
};

const StyledLink = styled.a`
  font-family: "Bitter", serif;
  line-height: 1.5;

  @media print {
    text-decoration: none;
    color: #000;
  }
`;

export const Link = (props: Props) => (
  <StyledLink href={props.to} target="_blank">
    {props.children}
  </StyledLink>
);
