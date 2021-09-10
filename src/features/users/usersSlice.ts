import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
interface User {
  id: string;
  name: string;
}

// Normalizing Data
// Read more here: https://redux.js.org/tutorials/essentials/part-6-performance-normalization
export const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});
// status: idle, loading, succeeded, failed
const initialState = usersAdapter.getInitialState({
  status: "idle",
  error: null,
});
//slice
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase("users/fetchPosts/pending", (state) => {
        state.status = "loading";
      })
      .addCase("users/fetchPosts/fulfilled", (state, action: any) => {
        state.status = "succeeded";
        usersAdapter.upsertMany(state, action.payload);
      })
      .addCase("users/fetchPosts/rejected", (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default usersSlice.reducer;
