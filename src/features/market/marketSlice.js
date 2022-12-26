import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMarketLeaders } from "./marketAPI";

const initialState = {
  list: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const listMarketLeaders = createAsyncThunk(
  "market/fetchMarketLeaders",
  async (thunkAPI) => {
    try {
      return await fetchMarketLeaders();
    } catch (error) {
      console.log("error: ", error);
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

export const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listMarketLeaders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(listMarketLeaders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.list = action.payload;
      })
      .addCase(listMarketLeaders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const selectMarket = (state) => state.market;

// export const { } = counterSlice.actions;

export default marketSlice.reducer;
