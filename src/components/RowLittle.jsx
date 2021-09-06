import style from './style';

function RowLittle(props) {
    
    return <>

        <div 
            className="Title" 
            style={props.inFavs ? {color: 'yellow'} : null}>
            {props.inFavs && String.fromCharCode(126)} {props.title} {props.inFavs && String.fromCharCode(126)}
        </div>

        <div className="Year">{props.year}</div>

        <div className="Type">{props.type}</div>

        <button 
            style={ props.inFavs 
                    ? style.remove 
                    : style.button} 
            onClick={ props.inFavs 
                    ? (e => props.onRemove(e, props.id)) 
                    : (e => props.onAdd(e, props.id))} > 
                    { props.inFavs ? 'Remove from favorite' : 'Add to favorite' }
        </button>    

        <img src={props.poster} alt="Poster" />
    </>
}

export default RowLittle;