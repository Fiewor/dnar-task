import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { listMarketLeaders } from "../features/crypto/cryptoSlice";
import MarketCard from "./MarketCard";
import Loading from "./Loading";
import Error from "./Error";

function MarketLeaders() {
  const dispatch = useDispatch();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { marketLeadersList, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.crypto.marketLeaders);

  useEffect(() => {
    dispatch(listMarketLeaders());
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
        {marketLeadersList.map(
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
  @media (max-width: 768px) {
    margin: auto;
  }
`;

export default MarketLeaders;
