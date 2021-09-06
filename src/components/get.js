async function getFilms(search, type,  setInfo, setError) {

    const URL = `http://www.omdbapi.com/?apikey=7c11b80d&${type}=${search}`

    const response = await fetch(URL);
    const result = await response.json();
    
    if(type === 's') {
        setError('');
        result.Search && setInfo(result.Search);
        result.Error && setError(result.Error);
    };

    if(type === 'i') {
        setError('');
        setInfo(result);
        result.Error && setError(result.Error);
    }
};

export default getFilms;