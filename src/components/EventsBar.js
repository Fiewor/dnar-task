import React from "react";
import Card from "./Card";
import styled from "styled-components";

const list = [
  {
    title: "TOKEN 2049 London",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sunt corporis numquam illo ratione animi sint placeat, repudiandae a quaerat, alias fugiat qui consequuntur dolorum sapiente, dolor quisquam deserunt magnam!",
  },
  {
    title: "TOKEN 2049 London",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sunt corporis numquam illo ratione animi sint placeat, repudiandae a quaerat, alias fugiat qui consequuntur dolorum sapiente, dolor quisquam deserunt magnam!",
  },
  {
    title: "TOKEN 2049 London",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sunt corporis numquam illo ratione animi sint placeat, repudiandae a quaerat, alias fugiat qui consequuntur dolorum sapiente, dolor quisquam deserunt magnam!",
  },
];

const EventsBar = () => {
  return (
    <Container>
      <Text>Events</Text>
      {list.map(({ title, text }, id) => (
        <Card key={id} title={title} text={text} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  background: #241f2a;
  color: white;
  margin: 1rem;
  padding: 1rem 0.2rem;
  border-radius: 20px;
`;

const Text = styled.p`
  padding: 0.5rem 2rem;
`;

export default EventsBar;
