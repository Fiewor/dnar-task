import axios from "axios";
import { URI } from "./index";

export async function fetchMarketLeaders() {
  return axios
    .get(
      `${URI}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false`
    )
    .then((res) => res.data);
}
