import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Loading from "./Loading";
import Error from "./Error";
import { listCoins } from "../features/coin/coinSlice";
import { Coin } from "./Coin";

const CoinList = () => {
  const dispatch = useDispatch();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { list, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.coin
  );

  useEffect(() => {
    dispatch(listCoins());
  }, [isOnline]);

  useEffect(() => {
    const handleStatusChange = () => setIsOnline(navigator.onLine);

    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);

    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={message} />;
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
  gap: 0.5rem;
  width: 100%;
  padding: 1rem 0.5rem;
`;
