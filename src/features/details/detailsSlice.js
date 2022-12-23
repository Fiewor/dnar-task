import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoinDetails } from "./detailsAPI";

const initialState = {
  list: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const listCoinDetails = createAsyncThunk(
  "details/fetchDetails",
  async (value, thunkAPI) => {
    try {
      return await fetchCoinDetails(value);
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
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listCoinDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(listCoinDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.list = action.payload;
      })
      .addCase(listCoinDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export default coinSlice.reducer;
