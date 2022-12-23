import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { listCoinDetails } from "../features/details/detailsSlice";

const MarketCard = ({ id, name, symbol, price, change }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (value) => {
    dispatch(listCoinDetails(value.toLowerCase()));
    navigate("/details");
  };

  return (
    <Container onClick={() => handleClick(name)}>
      <Group>
        <p>{name}</p>
        <p>({symbol.toUpperCase()})</p>
      </Group>

      <Group>
        <SmallText
          style={{ color: change.toString()[0] === "-" ? "red" : "#1bd236" }}
        >
          {change}
        </SmallText>
        {new Intl.NumberFormat(`en-US`, {
          currency: `USD`,
          style: "currency",
        }).format(price)}
      </Group>
    </Container>
  );
};

const Container = styled.div`
  background: #7d30f5;
  color: white;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  padding: 1.5rem 2rem;
  width: 90%;
  cursor: pointer;
  &:hover {
    background: #661eda;
  }
  &:active {
    background: #4c11ac;
    ${"" /* #2e076d; */}
  }
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const SmallText = styled.p`
  font-size: 0.7rem;
  color: #1bd236;
  align-self: flex-end;
`;

export default MarketCard;
