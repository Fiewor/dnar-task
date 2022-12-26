import React from "react";
import styled from "styled-components";
import CoinList from "../components/CoinList";
import MarketLeaders from "../components/MarketLeaders";

const CoinPage = () => {
  return (
    <Content>
      <Container>
        <Text>Market leaders</Text>
        <MarketLeaders />
      </Container>

      <Container>
        <Text>All Coins</Text>
        <CoinList />
      </Container>
    </Content>
  );
};

export default CoinPage;

const Container = styled.div`
  background-color: #241f2a;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 95%;
  min-width: 50vw;
  min-height: 30vh;
  margin: 0 1em 1em;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0.2em;
    width: 100%;
    margin: 0.5rem 0;
    p {
      align-self: center;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 70%;
`;

export const Text = styled.p`
  color: white;
  font-size: 2.5rem;
  margin: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`;
