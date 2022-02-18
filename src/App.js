import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Detail from "./routes/Detail";
import Coin from "./routes/Coin";
import ToDoList from "./routes/ToDoList";
import MovieApp from "./routes/MovieApp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/coins" >
          <Coin />
        </Route>
        <Route path="/todos" >
          <ToDoList />
        </Route>
        <Route exact path="/" >
          <MovieApp />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
