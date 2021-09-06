import style from './style';

function RowLittle(props) {
    
    return <>
        <div className="Title">{props.title}</div>
        <div className="Year">{props.year}</div>
        <div className="Type">{props.type}</div>
        <button 
            style={style.button} 
            onClick={e => {
                e.stopPropagation();
                props.addFavorite(props.id);
            }} >Add to favorite</button>    
        <img src={props.poster} alt="Poster" />
    </>
}

export default RowLittle;