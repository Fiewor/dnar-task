import axios from "axios";
import { URI } from "./index";

export async function fetchSearchList(searchInput) {
  console.log("search input: ", searchInput);
  return axios
    .get(`${URI}/search?query=${searchInput}`)
    .then((res) => res.data.coins); //instead of res.data so we can have dropdown of only coin info
}
