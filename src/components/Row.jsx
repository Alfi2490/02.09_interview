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

    function addClickHandler(id) {
        ls.addFavorite(id);
    }

    return <div className={!condition ? 'Row' : 'BigRow'} onClick={() => setCondition(!condition)} >
        {!condition &&  <RowLittle
            id={props.id} 
            title={props.title} 
            year={props.year} 
            type={props.type} 
            poster={props.poster} 
            defPoster={defPoster}
            addFavorite={addClickHandler} />}
        {condition && <RowBig
            error={error}
            film={film} 
            defPoster={defPoster} />}       
    </div>
}

export default Row;