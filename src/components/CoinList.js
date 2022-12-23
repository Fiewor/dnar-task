import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { listCoins } from "../features/coin/coinSlice";
import { Coin } from "./Coin";

const CoinList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCoins());
  }, []);

  const { list, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.coin
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
        {list.map(({ id, name, symbol }) => (
          <Coin key={id} name={name} symbol={symbol} />
        ))}
      </Container>
    );
  }
};

export default CoinList;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0.5rem;
`;

export const P = styled.p`
  align-self: center;
  font-size: 2rem;
  color: white;
`;
