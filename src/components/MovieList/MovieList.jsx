import React from 'react';

import './MovieList.css'

import MovieCard from '../MovieCard/MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
