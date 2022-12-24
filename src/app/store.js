import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../features/coin/coinSlice";
import marketReducer from "../features/market/marketSlice";
import detailsReducer from "../features/details/detailsSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    coin: coinReducer,
    market: marketReducer,
    details: detailsReducer,
    search: searchReducer,
  },
});
