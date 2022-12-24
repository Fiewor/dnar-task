import React from "react";
import styled from "styled-components";
import { FaGripLines } from "react-icons/fa";

import Search from "../components/Search";
import SideBar from "../components/SideBar";
import CoinPage from "./CoinPage";
import EventsBar from "../components/EventsBar";

const Home = () => {
  return (
    <Page>
      <Top>
        <IconContainer>
          <FaGripLines color="blue" />
        </IconContainer>
        <Search />
      </Top>

      <Bottom>
        <SideBar />
        <CoinPage />
        <EventsBar />
      </Bottom>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  height: 100%;
  background: #17151d;
  @media (max-width: 768px) {
    ${
      "" /* display: grid;
    grid-template-columns: 20% 40%; */
    }
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0.5rem;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: space-around;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 70vh;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const IconContainer = styled.div`
  background: #241f2a;
  padding: 1rem;
  margin: 0.3rem 0 1rem;
  border-radius: 10px;
  max-width: 5vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  &:hover {
    background: white;
  }
  @media (max-width: 768px) {
    margin: 0.3rem 1em 0.5em;
    max-width: 10vw;
  } ;
`;

export default Home;
