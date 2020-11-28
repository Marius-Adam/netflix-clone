import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {  AuthProvider } from "./shared/AuthContext";
//Pages
import Login from "./pages/Login";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import List from "./pages/List";
import NewReleases from "./pages/NewReleases";
import UserProfile from "./pages/UserProfile"

//Componenets
import Sidenav from "./componenets/Sidenav";
import Layout from "antd/lib/layout/layout";

function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout className="flex-row">
        <Sidenav />
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
          <Route path={"/account"}>
            <UserProfile/>
          </Route>
          <Route path="/" render={() => <Redirect to={"/login"} />} />
        </Switch>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
