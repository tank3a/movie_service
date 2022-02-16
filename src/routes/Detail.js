import {useParams, Link} from "react-router-dom";
import { useState, useEffect} from "react";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    

    useEffect(() => {
        const getMovie = async () => {
            const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            const json = await res.json();
            setMovie(json.data.movie);
            console.log(json.data.movie);
            setLoading(false);
        }
        getMovie();
      }, [id]);
    return (
        <div>
            {loading ? <h3>Loading</h3> :
            <div>
                <h1>{movie.title}</h1>
                <h4>Created At : {movie.year}</h4>
                <img src={movie.medium_cover_image} alt="Loading"/>
                <ul>
                    {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
                </ul>
                <p>{movie.description_full}</p>
                <b>
                    <Link to="/">Go Back Home</Link>
                </b>
            </div>}
        </div>
    )
}

export default Detail;