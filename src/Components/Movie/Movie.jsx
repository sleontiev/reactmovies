import './Movie.css';

const Movie = (props) => {
    return (
        <div className="card" onMouseOver={() => props.changeBg(props.movieId)}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.poster} alt=""/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{ props.title }</span>
                <p>{ props.year }</p>
                <p>{ props.type }</p>
                <p><a href="!#">More...</a></p>
            </div>
        </div>
    )
}

export { Movie }