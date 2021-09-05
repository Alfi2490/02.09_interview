import './Row.css';
import { useState, useEffect } from 'react';
import getFilms from './get';
import RowLittle from './RowLittle';
import RowBig from './RowBig';
import defPoster from './default.jpg';

function Row(props) {

    const [condition, setCondition] = useState(false);
    const [film, setFilm] = useState({ });

    useEffect(() => {
        if(condition && !film.Title) {
            getFilms(props.id, 'i', setFilm);
        }
    }, [condition, props.id, film]);

    return <div className={!condition ? 'Row' : 'BigRow'} onClick={() => setCondition(!condition)} >
        {!condition &&  <RowLittle title={props.title} year={props.year} type={props.type} poster={props.poster} defPoster={defPoster}/>}
        {condition && <RowBig film={film} defPoster={defPoster} />}       
    </div>
}

export default Row;