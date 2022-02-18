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
        <Route exact path={`${process.env.PUBLIC_URL}/coins`} element={Coin}>
          <Coin />
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/todos`} element={ToDoList}>
          <ToDoList />
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/`} element={MovieApp} >
          <MovieApp />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
