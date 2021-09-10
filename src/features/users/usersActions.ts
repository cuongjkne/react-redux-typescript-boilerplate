import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//async
export const fetchUsers = createAsyncThunk("users/fetchPosts", async () => {
  const fakeApi = "https://jsonplaceholder.typicode.com/users";
  // fakeApi is just used to make the example, you should replace it
  const response = await axios.get(fakeApi);
  return response.data;
});
