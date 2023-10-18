import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
};

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoins.rejected, (state, action) => {
      state.status = "error";
    });
    builder.addCase(getCoins.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(getCoins.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default coinSlice.reducer;

export const getCoins = createAsyncThunk("coins/get", async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en&precision=5#"
  );
  return response.data;
});
