import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";

const RankCard = () => {
  const { coinDetailsList, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.crypto.coinDetails);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={message} />;
  }

  if (isSuccess) {
    const {
      public_interest_stats: { alexa_rank },
    } = coinDetailsList;

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
