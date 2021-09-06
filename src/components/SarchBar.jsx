import style from './style';

function SearchBar(props) {   

    return <form>

        <input 
            type="text" 
            id="search" 
            name="search" 
            value={props.searchText}
            onChange={e => props.onSearchChange(e.target.value)} />

        <button 
            style={style.button} 
            onClick={e => {
                e.preventDefault();
                props.onSortFilm('A');
            }}>A - Z</button>

        <button 
            style={style.button} 
            onClick={e => {
                e.preventDefault();
                props.onSortFilm('Z');
            }}>Z - A</button>
        
        <button 
            style={style.button} 
            onClick={e => {
                e.preventDefault();
                props.onSortFilm('Y');
            }}>Year</button>

    </form>
}

export default SearchBar;