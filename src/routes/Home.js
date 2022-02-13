import ToDoList from "../components/ToDoList";
import Coin from "../components/Coin";
import MovieApp from "../components/MovieApp";

function Home() {
    return (
        <div>
          <ToDoList />
          <Coin />
          <MovieApp />
        </div>
    );
}

export default Home;