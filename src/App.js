import "./App.css";
import Header from "./Header";
import Newsfeed from "./Newsfeed";
import Stats from "./Stats";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <div className="app__header">
              <Header />
            </div>
            <div className="app_body">
              <div className="app__container">
                <Newsfeed />
                <Stats />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="app">
    //   {/* header */}
    //   <div className="app__header">
    //     <Header />
    //   </div>
    //   {/* body */}
    //   <div className="app_body">
    //     <div className="app__container">
    //       <Newsfeed />
    //       <Stats />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
