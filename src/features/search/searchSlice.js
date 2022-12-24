import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSearchList } from "./searchAPI";

const initialState = {
  coins: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const listSearchItems = createAsyncThunk(
  "search/fetchSearch",
  async (input, thunkAPI) => {
    try {
      return await fetchSearchList(input);
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

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listSearchItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(listSearchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coins = action.payload;
      })
      .addCase(listSearchItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default searchSlice.reducer;
