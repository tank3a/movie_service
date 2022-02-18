import {useParams, Link} from "react-router-dom";
import { useState, useEffect} from "react";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setGenres(json.data.movie.genres);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
      }, [])
      
    return (
        <div>
            {loading ? <h3>Loading</h3> :
            <div>
                <h1>{movie.title}</h1>
                <h4>Created At : {movie.year}</h4>
                <img src={movie.medium_cover_image} alt="Loading"/>
                <ul>
                    {genres.map((genre) => <li key={genre}>{genre}</li>)}
                </ul>
                <p>{movie.description_full}</p>
                <b>
                    <Link to={`${process.env.PUBLIC_URL}/`}>Go Back Home</Link>
                </b>
            </div>}
        </div>
    )
}

export default Detail;