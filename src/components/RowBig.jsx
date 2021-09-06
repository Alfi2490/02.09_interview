

function RowBig(props) {

    const film = props.film;

    return <>
        <div className="Error">{props.error}</div>
        <img src={film.Poster} alt="Poster" />

        <div 
            className="Title" 
            style={props.inFavs ? {color: 'yellow'} : null}>
            {props.inFavs && String.fromCharCode(126)} {film.Title} {props.inFavs && String.fromCharCode(126)}
        </div>

        <div className="Released">Release year: {film.Released}</div>
        <div className="Runtime">Running time: {film.Runtime}</div>
        <div className="Plot">{film.Plot}</div>
    </>
}

export default RowBig;