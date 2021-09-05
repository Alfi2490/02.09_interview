function RowBig(props) {

    const film = props.film;

    return <>
        <img src={film.Poster} alt="Poster" />
        <div className="Title">{film.Title}</div>
        <div className="Released">Release year: {film.Released}</div>
        <div className="Runtime">Running time: {film.Runtime}</div>
        <div className="Plot">{film.Plot}</div>
    </>
}

export default RowBig;