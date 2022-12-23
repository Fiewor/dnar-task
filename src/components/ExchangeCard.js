import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import { P } from "./CoinList";

const ExchangeCard = () => {
  const { list, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.details
  );

  if (isLoading) {
    return <P>Loading...</P>;
  }

  if (isError) {
    return <P>Error: {message}</P>;
  }

  if (isSuccess) {
    const {
      market_data: { current_price },
    } = list;

    return (
      <Container>
        <p>Exchange</p>

        <Group>
          <PriceGroup>
            <p>Sell</p>
            <Price>6700</Price>
          </PriceGroup>

          {/* replace with dropdown */}
          <p>USD</p>
        </Group>

        <Group>
          <PriceGroup>
            <p>Buy</p>
            <Price>0.609898</Price>
          </PriceGroup>

          {/* replace with dropdown */}
          <p>BTC</p>
        </Group>

        <Group>
          <p>1 BTC = {current_price.usd} USD</p>
          <Button dataContent={<FaLongArrowAltRight color="white" />}>
            Exchange
          </Button>
        </Group>
      </Container>
    );
  }
};

const Container = styled.div`
  background: #241f2a;
  border-radius: 10px;
  width: 70%;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Price = styled.p`
  font-size: 2rem;
  padding: 1rem;
`;

const PriceGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
`;

const Button = styled.a`
  background: #3f6eff;
  padding: 0.4rem 3rem;
  border-radius: 10px;
  cursor: pointer;
  &:after {
    content: attr(data-content);
    display: inline;
    padding-left: 1em;
  }
`;

export default ExchangeCard;
