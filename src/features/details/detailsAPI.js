import axios from "axios";

export const URI = "https://api.coingecko.com/api/v3";

export async function fetchCoinDetails(coinName) {
  return axios.get(`${URI}/coins/${coinName}`).then((res) => res.data);
}
