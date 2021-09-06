import Row from "./Row";
import style from './style';

function List(props) {

    const pages = [];

    for (let i = 1; i < props.pagesNumber + 1; i++) {
        let color = '';
        if (props.page === i) color = 'yellow';
        pages.push(<span 
            style={{color: color, marginLeft: '10px'}}
            onClick={() => {
                    props.onCountChange(i);
                }
            }>{i}</span>);
    };
    
    let films = props.films.slice(props.count - 3, props.count);

    return <div>
        <div style={style.pages}>Pages {pages}</div>
        {films.map(film => <Row 
            key={film.imdbID}
            id={film.imdbID} 
            title={film.Title} 
            year={film.Year} 
            type={film.Type} 
            poster={film.Poster} />)}
    </div>
}
export default List;