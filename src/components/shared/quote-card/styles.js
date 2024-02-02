import styled from "styled-components";

export const Image = styled.img`
  max-width: 80px;
  width: 100%;
  height: 80px;
  border-radius: 50%;
`;

export const Title = styled.h3`
  margin-left: 32px;
  max-height: 44px;
  line-height: 20px;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: max-height 0.3s, overflow 0.3s;
`;

export const QuoteCard = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 540px;
  min-height: 190px;
  width: 100%;
  border-radius: 24px;
  color: #000000;
  background-color: #ffffff;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05, 1.05);

    ${Title} {
      max-height: 100%;
      overflow: visible;
      -webkit-line-clamp: initial;
    }
  }
`;
