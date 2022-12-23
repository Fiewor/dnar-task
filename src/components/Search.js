import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  // placeholder. use dispatch to update search text in redux store
  const handleSearch = (value) => {
    console.log("search input: ", value);
    // search?query={value}
  };

  return (
    <Container>
      <FaSearch color="blue" />
      <Input
        type="text"
        name="search"
        placeholder="search"
        // value={input}
        // onChange={(value) => {
        //   handleSearch(value);
        // }}
      ></Input>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  background: #17151d;
  border-radius: 10px;
  border: white 0.2 linear;
  padding: 0.8rem 1rem;
  margin: 0 1rem;
  height: 2rem;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0.3rem 0.2rem;
  background: #17151d;
`;

export default Search;
