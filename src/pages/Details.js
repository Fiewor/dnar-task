import React from "react";
import styled from "styled-components";
import { FaGripLines } from "react-icons/fa";

import InfoCard from "../components/InfoCard";
import SideBar from "../components/SideBar";
import Search from "../components/Search";
import Graph from "../components/Graph";
import ExchangeCard from "../components/ExchangeCard";
import RankCard from "../components/RankCard";
import { IconContainer } from "../pages/Home";

const Details = () => {
  return (
    <Page>
      <Right>
        <IconContainer>
          <FaGripLines color="blue" />
        </IconContainer>
        <SideBar />
      </Right>

      <Middle>
        <Search />
        <Graph />
        <BottomMiddle>
          <ExchangeCard />
          <RankCard />
        </BottomMiddle>
      </Middle>

      <InfoCard />
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  background: #17151d;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  padding: 2rem 1rem 0;
`;

const BottomMiddle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Details;
