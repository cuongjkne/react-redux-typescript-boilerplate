import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//async
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const fakeApi = "https://jsonplaceholder.typicode.com/posts";
  // fakeApi is just used to make the example, you should replace it
  const response = await axios.get(fakeApi);
  return response.data;
});
