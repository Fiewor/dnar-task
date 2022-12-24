import axios from "axios";
import { URI } from "../coin/coinAPI";

export async function fetchCoinDetails(coinName = "bitcoin") {
  return axios.get(`${URI}/coins/${coinName}`).then((res) => res.data);
}
