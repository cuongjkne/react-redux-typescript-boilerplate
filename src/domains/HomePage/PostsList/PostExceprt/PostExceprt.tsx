//hooks
import { useAppSelector } from "../../../../common/utilities/hooks";
//components
import { PostAuthor } from "./PostAuthor/PostAuthor";
//selectors
import { selectPostById } from "../../../../features/posts/postsSelectors";
//styles
import { Container, Title } from "./PostExceprt.style";

function PostExcerpt({ postId }) {
  const post = useAppSelector((state) => selectPostById(state, postId));
  return (
    <Container className="post-excerpt" to={`/posts/${post.id}`}>
      <Title>{post.title}</Title>
      <PostAuthor userId={post.userId} />
    </Container>
  );
}
export default PostExcerpt;
