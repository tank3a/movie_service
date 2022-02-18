import Home from "./routes/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="movie/:id">
          <Detail />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={Home} >
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
