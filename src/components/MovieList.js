// src/components/MovieList.js
import React from 'react';
import Movie from './Movie';
import { MDBRow } from 'mdb-react-ui-kit';
import movies from './Data/movieData'; // Adjust the path based on your folder structure

function MovieList({ searchQuery, filterRating }) {
  // Filter movies based on search query and rating filter
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!filterRating || movie.rating >= filterRating)
  );

  return (
    <>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4' id="cardSpacing">
        {filteredMovies.map((movie, index) => (
          <Movie key={index} {...movie} />
        ))}
      </MDBRow>
    </>
  );
}

export default MovieList;
