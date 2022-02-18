import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MovieApp() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    const getMovies = async () => {
      const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
      const json = await res.json();
      setMovies(json.data.movies);
      setLoading(false);
    }
  
    useEffect(() => {
      getMovies();
    }, []);
    return (
      <div>
        <div>
          <Link to={`${process.env.PUBLIC_URL}/coins`}>Coin Price</Link>
          </div>
        <div>
          <Link to={`${process.env.PUBLIC_URL}/todos`}>ToDo List</Link>
          </div>

        <h1>Best Movies</h1>
        {loading ? <h3>Loading</h3> : <div>{movies.map((movie) => <Movie key={movie.id} id={movie.id} Image={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}/>)}</div>}
      </div>
  
    )
  }

  export default MovieApp;