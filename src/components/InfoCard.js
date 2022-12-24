import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaReddit, FaGithub, FaChrome } from "react-icons/fa";
import { P } from "./CoinList";

const InfoCard = () => {
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
      name,
      description: { en },
      hashing_algorithm,
      country_origin,
      categories,
      image: { small },
      links: {
        homepage: { 0: homepageURL },
        subreddit_url,
        repos_url: {
          github: { 0: githubURL },
        },
      },

      market_data: { total_supply, max_supply, circulating_supply },
    } = list;

    return (
      <Container>
        <Text>Info Card</Text>
        <ImageContainer>
          <Img src={small} alt={`${name} coin`} />
        </ImageContainer>
        <Description>
          {en
            .split(" ")
            .filter((_, i) => i < 50)
            .join(" ") + "..."}
        </Description>
        <Group>
          <a href={homepageURL} target="_blank" rel="noreferrer noopener">
            <SubGroup>
              <p>Website</p>
              <FaChrome size="2em" color="#3f6eff" title="reddit icon" />
            </SubGroup>
          </a>

          <a href={subreddit_url} target="_blank" rel="noreferrer noopener">
            <SubGroup>
              <FaReddit size="2em" color="#ff502c" title="reddit icon" />
            </SubGroup>
          </a>
          <a href={githubURL} target="_blank" rel="noreferrer noopener">
            <SubGroupBottom>
              <FaGithub size="2em" color="black" title="github icon" />
            </SubGroupBottom>
          </a>
        </Group>
        <FactsList>
          <Text>Facts</Text>
          <Line />
          <Group>
            <Title>Hashing Algorithm</Title>
            <Value>{!hashing_algorithm && "Unknown"}</Value>
          </Group>
          <Group>
            <Title>Country Origin</Title>
            <Value>{!country_origin && "Unknown"}</Value>
          </Group>
          <Group>
            <Title>Category</Title>
            <ValueContainer>
              {categories
                .filter((_, i) => i < 3)
                .map((category, id) => (
                  <Value key={id}>{category}</Value>
                ))}
            </ValueContainer>
          </Group>
        </FactsList>

        <Description>
          <Group>
            <Title>Total Supply</Title>
            <Value>{!total_supply ? 0 : total_supply.toFixed(1)}</Value>
          </Group>
          <Group>
            <Title>Max Supply</Title>
            <Value>{!max_supply ? 0 : max_supply.toFixed(1)}</Value>
          </Group>
          <Group>
            <Title>Circulating</Title>
            <Value>
              {!circulating_supply ? 0 : circulating_supply.toFixed(1)}
            </Value>
          </Group>
        </Description>
      </Container>
    );
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem 2rem;
  margin: 1.5rem 0.5rem;
  background: #241f2a;
  width: 25%;
  height: 100%;
  border-radius: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  border-radius: 15px;
  background: white;
  transform: translate(0, -40%);
  align-self: flex-end;
  padding: 0.2em;
`;

const Img = styled.img``;

const FactsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Text = styled.h2`
  color: white;
  padding: 0rem;
`;

const Description = styled.div`
  background: #7d30f5;
  padding: 1.5rem;
  border-radius: 15px;
  color: white;
  margin-bottom: 1rem;
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  text-align: left;
`;

const SubGroup = styled.div`
  background: black;
  border-radius: 15px;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  p {
    padding-right: 1rem;
  }
`;

const SubGroupBottom = styled.div`
  background: #3f6eff;
  border-radius: 15px;
  padding: 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Line = styled.div`
  background: #7d30f5;
  width: 80%;
  height: 0.7vh;
  margin: 1rem;
  border-radius: 5px;
  align-self: center;
`;

const Title = styled.p`
  color: white;
  font-size: 1rem;
`;

const ValueContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

const Value = styled.p`
  color: white;
  font-size: 0.8rem;
  padding: 0.2rem;
`;

export default InfoCard;
