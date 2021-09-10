import { RootState } from "../../app/store";
import { usersAdapter } from "./usersSlice";

//selectors
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  // Pass in a selector that returns the posts slice of state
} = usersAdapter.getSelectors<RootState>((state) => state.users);
