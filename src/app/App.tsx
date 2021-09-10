import { Switch, Route } from "react-router";
import { store } from "./store";

//domains
import Homepage from "../domains/HomePage/Homepage";
import { SinglePostPage } from "../domains/SinglePostPage/SinglePostPage";

//styles
import Global from "./styles/global.style";

//actions
import { fetchUsers } from "../features/users/usersActions";

//load users
store.dispatch(fetchUsers());

function App() {
  return (
    <div className="App">
      <Global />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/posts/:postId" component={SinglePostPage} />
      </Switch>
    </div>
  );
}

export default App;
