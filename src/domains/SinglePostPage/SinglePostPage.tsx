//hooks
import { useAppSelector } from "../../common/utilities/hooks";

//selectors
import { selectPostById } from "../../features/posts/postsSelectors";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;
  const post = useAppSelector((state) => selectPostById(state, postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.body}</p>
      </article>
    </section>
  );
};
