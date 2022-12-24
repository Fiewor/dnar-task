import React from "react";
import styled from "styled-components";
import { FaAlignCenter } from "react-icons/fa";

const SideBar = () => {
  return (
    <Container>
      <Icon>
        <FaAlignCenter color="white" />
      </Icon>
      <Icon>
        <FaAlignCenter color="white" />
      </Icon>
    </Container>
  );
};

const Container = styled.div`
  background: #241f2a;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  max-width: 5vw;
  margin: 0 0.5rem;
  width: 100%;
  min-height: 85%;
  @media (max-width: 768px) {
    max-width: 10vw;
    width: 20%;
  }
`;

const Icon = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0.6rem;
  cursor: pointer;
  display: flex;
  align-content: center;
  justify-content: center;

  &:active {
    background: #3f6eff;
    border-radius: 10px;
  }
`;

export default SideBar;
