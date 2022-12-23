import React from "react";
import styled from "styled-components";
import CoinList from "../components/CoinList";
import MarketLeaders from "../components/MarketLeaders";

const CoinPage = () => {
  return (
    <Content>
      <Main>
        <Container>
          <Text>Market leaders</Text>
          <MarketLeaders />
        </Container>

        <Container>
          <Text>All Coins</Text>
          <CoinList />
        </Container>
      </Main>
    </Content>
  );
};

export default CoinPage;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 70%;
`;

const Container = styled.div`
  background-color: #241f2a;
  border-radius: 30px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin: 1rem;
  width: 60%;
  min-width: 50vw;
  min-height: 30vh;
`;

export const Text = styled.p`
  color: white;
  font-size: 2.5rem;
  margin: 1rem;
`;
