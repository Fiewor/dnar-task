import axios from "axios";

export const URI = "https://api.coingecko.com/api/v3";

export async function fetchCoinList() {
  return axios
    .get(`${URI}/coins/list/?include_platform=false`)
    .then((res) => res.data.filter((_, i) => i < 9));
}
