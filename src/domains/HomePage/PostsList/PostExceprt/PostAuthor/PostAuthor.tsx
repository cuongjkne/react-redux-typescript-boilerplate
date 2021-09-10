//hooks
import { useAppSelector } from "../../../../../common/utilities/hooks";
import { selectUserById } from "../../../../../features/users/usersSelectors";

export const PostAuthor = ({ userId }) => {
  const author = useAppSelector((state) => selectUserById(state, userId));

  return <p> by {author ? author.name : "Unknown author"}</p>;
};
