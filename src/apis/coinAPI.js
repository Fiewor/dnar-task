import axios from "axios";
import { URI } from "./index";

export async function fetchCoinList() {
  return axios
    .get(`${URI}/coins/list/?include_platform=false`)
    .then((res) => res.data.filter((_, i) => i < 9));
}
