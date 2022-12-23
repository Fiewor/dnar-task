import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { listMarketLeaders } from "../features/market/marketSlice";
import MarketCard from "./MarketCard";
import { P } from "./CoinList";

function MarketLeaders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMarketLeaders());
  }, []);

  const { list, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.market
  );

  if (isLoading) {
    return <P>Loading...</P>;
  }

  if (isError) {
    return <P>Error: {message}</P>;
  }

  if (isSuccess) {
    return (
      <Container>
        {list.map(
          ({
            id,
            name,
            symbol,
            current_price,
            price_change_percentage_24h,
          }) => (
            <MarketCard
              key={id}
              name={name}
              symbol={symbol}
              price={current_price}
              change={price_change_percentage_24h}
            />
          )
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  margin: 1rem 0.5rem;
`;

export default MarketLeaders;
