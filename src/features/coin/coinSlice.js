import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoinList } from "./coinAPI";

const initialState = {
  list: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const listCoins = createAsyncThunk(
  "coin/fetchCoins",
  async (thunkAPI) => {
    try {
      return await fetchCoinList();
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

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listCoins.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(listCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.list = action.payload;
      })
      .addCase(listCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const selectCoins = (state) => state.coin;

// export const { } = counterSlice.actions;

export default coinSlice.reducer;
