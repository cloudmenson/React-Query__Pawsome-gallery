import styled from "styled-components";

export const Button = styled.button`
  padding: 15px;
  background-color: #c1e8ff;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: #7da0ca;
    color: #ffffff;
  }

  &:active {
    background-color: #052659;
  }
`;
