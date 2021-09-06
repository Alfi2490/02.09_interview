import './Row.css';
import { useState, useEffect } from 'react';
import getFilms from './get';
import RowLittle from './RowLittle';
import RowBig from './RowBig';
import defPoster from './default.jpg';
import ls from './localStorage';

function Row(props) {

    const [condition, setCondition] = useState(false);
    const [film, setFilm] = useState({ });
    const [error, setError] = useState('');

    useEffect(() => {
        if(condition && !film.Title) {
            getFilms(props.id, 'i', setFilm, setError);
        }
    }, [condition, props.id, film]);

    const inFavs = props.favorites.includes(props.id);

    function add (e, id) {
        e.stopPropagation();
        ls.addFavorite(id);
        const favs = ls.getFavorite();
        props.onChangeFavorites(favs);
    }

    function remove (e, id) {
        e.stopPropagation();
        ls.removeFavorite(id);
        const favs = ls.getFavorite();
        props.onChangeFavorites(favs);
    }

    return <div className={!condition ? 'Row' : 'BigRow'} onClick={() => setCondition(!condition)} >
        {!condition &&  <RowLittle
            id={props.id}
            onAdd={add}
            onRemove={remove}
            inFavs={inFavs} 
            title={props.title} 
            year={props.year} 
            type={props.type} 
            poster={props.poster} 
            defPoster={defPoster}
            onChangeFavorites={props.onChangeFavorites} />}
        {condition && <RowBig
            inFavs={inFavs}
            error={error}
            film={film} 
            defPoster={defPoster} />}       
    </div>
}

export default Row;