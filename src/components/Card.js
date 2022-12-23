import React from "react";
import styled from "styled-components";

const Card = ({ title, text }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #7d30f5;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem 0;
`;

const Title = styled.p`
  padding: 0.3rem 0;
`;

const Text = styled.p`
  padding: 1rem 0;
`;

export default Card;
