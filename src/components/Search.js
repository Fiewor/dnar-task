import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import AsyncSelect from "react-select/async";

import {
  listSearchItems,
  listCoinDetails,
  reset,
} from "../features/crypto/cryptoSlice";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDropDownClick = (value) => {
    dispatch(listCoinDetails(value.toLowerCase()));
    navigate("/details");
  };

  const { searchList } = useSelector((state) => state.crypto.search);

  const handleSearch = (inputValue) => {
    // dispatch(reset());
    dispatch(listSearchItems(inputValue));
    return searchList.map(({ id, name, symbol }) => ({
      label: name,
      value: name,
    }));
  };

  const defaultOptions = defaultCoinList.map(({ name }) => ({
    label: name,
    value: name,
  }));

  const loadOptions = (inputValue, callback) => {
    callback(handleSearch(inputValue));
  };

  return (
    <Container>
      <FaSearch color="blue" />
      <AsyncSelect
        placeholder="search"
        defaultOptions={defaultOptions}
        loadOptions={loadOptions}
        onChange={({ value }) => handleDropDownClick(value)}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            width: "100%",
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#17151d",
            border: "#17151d",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "white",
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            cursor: "pointer",
            color: (state) => state.isFocused && "#7d30f5",
          }),
        }}
      />
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
  padding: 1rem 1rem;
  margin: 0.4rem 2rem 1rem 1rem;
  height: 2rem;
  width: 100%;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const defaultCoinList = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    api_symbol: "bitcoin",
    symbol: "BTC",
    market_cap_rank: 1,
    thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
    large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    api_symbol: "ethereum",
    symbol: "ETH",
    market_cap_rank: 2,
    thumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
    large: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    api_symbol: "dogecoin",
    symbol: "DOGE",
    market_cap_rank: 8,
    thumb: "https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png",
    large: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
  },
  {
    id: "apenft",
    name: "APENFT",
    api_symbol: "apenft",
    symbol: "NFT",
    market_cap_rank: 190,
    thumb: "https://assets.coingecko.com/coins/images/15687/thumb/apenft.jpg",
    large: "https://assets.coingecko.com/coins/images/15687/large/apenft.jpg",
  },
];

export default Search;
