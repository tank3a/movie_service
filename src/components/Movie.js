import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({title, Image, summary, genres, id}) {
    return (
        <div>
            <h3>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h3>
            <img src={Image} alt="load failed"/>
            <p>{summary}</p>
            <ul>
            {genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    Image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired

}
export default Movie;