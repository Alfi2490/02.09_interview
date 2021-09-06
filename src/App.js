import './App.css';
import React from 'react';
import List from './components/List';
import SearchBar from './components/SarchBar';
import getFilms from './components/get';
import ls from './components/localStorage';

class App extends React.Component{

    constructor(props) {
      super(props);

    this.state = {
      search: '',
      films: [
        {"Title":"Snow White and the Huntsman","Year":"2012","imdbID":"tt1735898","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGQ5MWNjZGQtOWM2ZC00MjEyLWEwODAtN2JmN2U0OWQ0YzI3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{"Title":"White House Down","Year":"2013","imdbID":"tt2334879","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmI5ZGIxOGMtMjcwMS00Yzk3LWE0YWUtMzc5YTFhNGQ4OWZmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{"Title":"Harold & Kumar Go to White Castle","Year":"2004","imdbID":"tt0366551","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDc2M2I5MDQtNzliMS00ZmFjLWJmNzEtMTQwYTkxOWI4YzJlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Snow White and the Seven Dwarfs","Year":"1937","imdbID":"tt0029583","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQwMzE2Mzc4M15BMl5BanBnXkFtZTcwMTE4NTc1Nw@@._V1_SX300.jpg"},{"Title":"White Chicks","Year":"2004","imdbID":"tt0381707","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_SX300.jpg"},{"Title":"White Collar","Year":"2009–2014","imdbID":"tt1358522","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNDI5MDgyMTYzNF5BMl5BanBnXkFtZTcwMjAwNzk1Mw@@._V1_SX300.jpg"},{"Title":"White Men Can't Jump","Year":"1992","imdbID":"tt0105812","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTc5ZjE2MmEtYWIxYi00OGY0LTk0ZTUtMzJiYjI4OWZmNTVmXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"},{"Title":"Legally Blonde 2: Red, White & Blonde","Year":"2003","imdbID":"tt0333780","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTkwNzExMjk0MF5BMl5BanBnXkFtZTcwOTUzNDcyMw@@._V1_SX300.jpg"},{"Title":"The White Tiger","Year":"2021","imdbID":"tt6571548","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDVkMDRkMzItN2EyYS00ZTI5LTljYzgtNzRmZDQ0OTQ3M2VjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"},{"Title":"White Noise","Year":"2005","imdbID":"tt0375210","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNWVkNGY2NTgtNWVhNi00NWU3LWE4NWMtNDFjMzA1N2QzMjQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"}
      ],
      favorites: [],
      count: 3,
      page: 1,
      error:''
    }

      this.hanleSearchCange = this.hanleSearchCange.bind(this);
      this.handleFilmsChange = this.handleFilmsChange.bind(this);
      this.handleSortFilms = this.handleSortFilms.bind(this);
      this.handleCountChange = this.handleCountChange.bind(this);
      this.handleErrorChange = this.handleErrorChange.bind(this);
      this.handlChangeFavorite = this.handlChangeFavorite.bind(this);

    }

    componentDidMount() {

      if (ls.getFavorite) {
        const fav = ls.getFavorite();
        this.handlChangeFavorite(fav);
        return
      };
      
      ls.initFavorite();

    }

    componentDidUpdate(prevProps, prevState) {

      if(this.state.films !== prevState.films) return;
      if(this.state.count !== prevState.count) return;
      if(this.state.page !== prevState.page) return;
      if(this.state.error !== prevState.error) return;

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        getFilms(this.state.search, 's', this.handleFilmsChange, this.handleErrorChange);
      }, 1000);      
    }

    hanleSearchCange(searchText) {
      this.setState({search: searchText.trim()});
    }

    handleFilmsChange(films) {
      this.setState({films: films});
    }

    handleSortFilms(order) {

      let [...tmp] = this.state.films;
      let YES, NO;

      if (order === 'A' || 'Y') {
        YES = 1;
        NO = -1;
      };

      if (order === 'Z') {
        YES = -1;
        NO = 1;
      };

      tmp.sort((a, b) => {
        if (order !== 'Y'  ? a.Title < b.Title : a.Year < b.Year) {
          return NO;
        }
        if (order !== 'Y' ? a.Title > b.Title : a.Year > b.Year) {
          return YES;
        }
        return 0;
      });

      this.setState({films: tmp});

    }

    handleCountChange(page) {
        this.setState({count: page * 3, page: page});
    }

    handleErrorChange(error) {
      this.setState({error: error});
    }

    handlChangeFavorite(favs) {
      this.setState({favorites: favs});
    }

    componentWillUnmount() {
      clearTimeout(this.timeout);
    }

    render() {

      return <div className="App">

      <SearchBar 
        onSearchChange={this.hanleSearchCange} 
        searchText={this.state.search}
        onFilmsChange={this.handleFilmsChange}
        onSortFilm={this.handleSortFilms} />

        <div className="Error">{this.state.error}</div>

      <List 
        films={this.state.films}
        count={this.state.count}
        onCountChange={this.handleCountChange}
        pagesNumber={Math.ceil(this.state.films.length / 3 || 0)}
        page={this.state.page} />

        </div>
    }
}

export default App;