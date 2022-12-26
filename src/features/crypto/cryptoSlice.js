import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchCoinDetails,
  fetchMarketLeaders,
  fetchSearchList,
  fetchCoinList,
} from "../../apis";

const initialState = {
  allCoins: {
    allCoinsList: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  coinDetails: {
    coinDetailsList: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  marketLeaders: {
    marketLeadersList: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  search: {
    searchList: [],
  },
};

export const listCoinDetails = createAsyncThunk(
  "crypto/fetchDetails",
  async (value, thunkAPI) => {
    try {
      return await fetchCoinDetails(value);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const listMarketLeaders = createAsyncThunk(
  "crypto/fetchMarketLeaders",
  async (thunkAPI) => {
    try {
      return await fetchMarketLeaders();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const listCoins = createAsyncThunk(
  "crypto/fetchCoins",
  async (thunkAPI) => {
    try {
      return await fetchCoinList();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const listSearchItems = createAsyncThunk(
  "search/fetchSearch",
  async (input, thunkAPI) => {
    try {
      return await fetchSearchList(input);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    reset: (state) => {
      //   state.list = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // list all coins
      .addCase(listCoins.pending, (state) => {
        state.allCoins.isLoading = true;
      })
      .addCase(listCoins.fulfilled, (state, action) => {
        state.allCoins.isLoading = false;
        state.allCoins.isSuccess = true;
        state.allCoins.isError = false;
        state.allCoins.allCoinsList = action.payload;
      })
      .addCase(listCoins.rejected, (state, action) => {
        state.allCoins.isLoading = false;
        state.allCoins.isError = true;
        state.allCoins.message = action.payload;
      })

      // coin details
      .addCase(listCoinDetails.pending, (state) => {
        state.coinDetails.isLoading = true;
      })
      .addCase(listCoinDetails.fulfilled, (state, action) => {
        state.coinDetails.isLoading = false;
        state.coinDetails.isSuccess = true;
        state.coinDetails.isError = false;
        state.coinDetails.coinDetailsList = action.payload;
      })
      .addCase(listCoinDetails.rejected, (state, action) => {
        state.coinDetails.isLoading = false;
        state.coinDetails.isError = true;
        state.coinDetails.message = action.payload;
      })

      // market leaders
      .addCase(listMarketLeaders.pending, (state) => {
        state.marketLeaders.isLoading = true;
      })
      .addCase(listMarketLeaders.fulfilled, (state, action) => {
        state.marketLeaders.isLoading = false;
        state.marketLeaders.isSuccess = true;
        state.marketLeaders.isError = false;
        state.marketLeaders.marketList = action.payload;
      })
      .addCase(listMarketLeaders.rejected, (state, action) => {
        state.marketLeaders.isLoading = false;
        state.marketLeaders.isError = true;
        state.marketLeaders.message = action.payload;
      })

      // search result
      .addCase(listSearchItems.fulfilled, (state, action) => {
        state.searchList = action.payload;
      });
  },
});

export const { reset } = cryptoSlice.actions;

export default cryptoSlice.reducer;
