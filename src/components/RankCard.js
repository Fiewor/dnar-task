import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { P } from "./CoinList";

const RankCard = () => {
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
      public_interest_stats: { alexa_rank },
    } = list;

    return (
      <Container>
        <p>Alexa Rank</p>
        <p>{alexa_rank}</p>
      </Container>
    );
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  background: #241f2a;
  border-radius: 10px;
  padding: 2.5rem;
  margin: 0 1rem;
  width: 30%;
  color: white;
  gap: 0.5rem;
  p:last-of-type {
    font-size: 2rem;
  }
`;

export default RankCard;