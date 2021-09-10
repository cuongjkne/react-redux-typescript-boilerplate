import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
}

// Normalizing Data
// Read more here: https://redux.js.org/tutorials/essentials/part-6-performance-normalization
export const postsAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
});
// status: idle, loading, succeeded, failed
const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});
//slice
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase("posts/fetchPosts/pending", (state) => {
        state.status = "loading";
      })
      .addCase("posts/fetchPosts/fulfilled", (state, action: any) => {
        state.status = "succeeded";
        postsAdapter.upsertMany(state, action.payload);
      })
      .addCase("posts/fetchPosts/rejected", (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default postsSlice.reducer;
