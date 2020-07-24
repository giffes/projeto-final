import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';


class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectedAuthor: '',
      movies: this.props.movies,
    };
    
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedAuthorChange = this.onSelectedAuthorChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }


  onSelectedAuthorChange(event) {
    this.setState({ selectedAuthor: event.target.value });
  }

  onClick(value) {
    this.setState((state) => ({ movies: state.movies.concat(value) }));
  }

  filterList() {
    const array = this.state.movies;
    const { searchText, selectedAuthor } = this.state;
    
    if (searchText !== '') {
      return array.filter((obj) =>
        obj.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        || obj.author.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        || obj.storyline.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    }
    if (selectedAuthor !== '') {
      return array.filter((obj) => obj.author === selectedAuthor);
    }
    return array;
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          selectedAuthor={this.state.selectedAuthor}
          onSelectedAuthorChange={this.onSelectedAuthorChange}
        />
        <MovieList movies={this.filterList(this.state)} />
        
      </div>
    );
  }
}

export default MovieLibrary;
