import propTypes from "prop-types";

function Movie({title, Image, summary, genres}) {
    return (
        <div>
            <h3>
            {title}
            </h3>
            <img src={Image} alt="load failed"/>
            <p>{summary}</p>
            <ul>
            {genres.map((genre) => <li>{genre}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    Image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired

}
export default Movie;