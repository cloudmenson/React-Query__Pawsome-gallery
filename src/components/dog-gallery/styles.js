// styles.js

import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0;
`;

export const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 25px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledBtn = styled.div`
  margin-top: 50px;
  text-align: center;
`;
