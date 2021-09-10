import React, { useEffect } from "react";

//hooks
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/utilities/hooks";

//selectors
import { selectPostIds } from "../../../features/posts/postsSelectors";

//actions
import { fetchPosts } from "../../../features/posts/postsActions";
import PostExcerpt from "./PostExceprt/PostExceprt";

//styles
import { Container } from "./PostsList.style";

export const PostsList = () => {
  const dispatch = useAppDispatch();

  //selectors
  const postIds = useAppSelector(selectPostIds);
  const postStatus = useAppSelector((state) => state.posts.status);
  const error = useAppSelector((state) => state.posts.error);
  //effects
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (postStatus === "succeeded") {
    content = postIds.map((postId) => {
      return <PostExcerpt key={postId} postId={postId} />;
    });
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <Container>
      <h2>Posts</h2>
      {content}
    </Container>
  );
};
