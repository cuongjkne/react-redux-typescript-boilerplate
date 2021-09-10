import React from "react";

//styles
import { Container } from "./Homepage.style";
import { PostsList } from "./PostsList/PostsList";

function Homepage() {
  return (
    <Container>
      <h1>Homepage</h1>
      <PostsList />
    </Container>
  );
}

export default Homepage;
