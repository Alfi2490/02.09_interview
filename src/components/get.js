async function getFilms(search, type,  setInfo) {

    const URL = `http://www.omdbapi.com/?apikey=7c11b80d&${type}=${search}`

    const response = await fetch(URL);
    const result = await response.json();
    
    if(type === 's') {
        setInfo(result.Search);
    };

    if(type === 'i') {
        setInfo(result);
    }
};

export default getFilms;