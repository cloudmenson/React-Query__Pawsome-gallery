import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  padding: 15px 20px;
  color: #ffffff;
  background-color: #052659;
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    background-color: #021024;
  }

  &:active {
    background-color: #000000;
  }
`;
