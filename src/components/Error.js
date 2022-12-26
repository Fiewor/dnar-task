import React from "react";
import styled from "styled-components";
import "./Loading.css";
import { MdCancel } from "react-icons/md";

const Error = ({ message }) => {
  console.log("error message: ", message);
  return (
    <Container>
      <MdCancel color="white" size="1.5em" />
      <Message>{message}</Message>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 0;
  width: 70%;
  margin: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    margin: 0.4rem;
    flex-direction: column;
  }
`;

const Message = styled.p`
  color: white;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export default Error;
