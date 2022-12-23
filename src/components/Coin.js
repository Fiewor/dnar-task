import React from "react";
import styled from "styled-components";

export const Coin = ({ name, symbol }) => {
  return (
    <Item>
      <p>{name}</p>
      <p>({symbol})</p>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  justify-content: space-around;
  background: #7d30f5;
  color: white;
  padding: 1rem;
  border-radius: 15px;
  width: 30%;
  min-height: 5%;
  @media (max-width: 768px) {
    width: 40%;
    font-size: 0.9rem;
  }
  p {
    padding: 0 0.5rem;
  }
`;
