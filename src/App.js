import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Pages
import Login from "./pages/Login";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import List from "./pages/List";
import NewReleases from "./pages/NewReleases";

//Componenets

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route path={"/search"}>
          <Search />
        </Route>
        <Route path={"/home"}>
          <Home />
        </Route>
        <Route path={"/series"}>
          <Series />
        </Route>
        <Route path={"/movies"}>
          <Movies />
        </Route>
        <Route path={"/list"}>
          <List />
        </Route>
        <Route path={"/new"}>
          <NewReleases />
        </Route>
        <Route path="/" render={() => <Redirect to={"/login"} />} />
      </Switch>
    </Router>
  );
}

export default App;
