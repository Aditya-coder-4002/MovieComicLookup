import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = `${BASE_URL}/search/movie?${API_KEY}`;

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 9648, name: 'Mystery' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' }
];

function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [prevPage, setPrevPage] = useState(0);
  const [totalPages, setTotalPages] = useState(100);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [lastUrl, setLastUrl] = useState('');
  const search = useRef();

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const getMovies = (url) => {
    setLastUrl(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length !== 0) {
          setMovies(data.results);
          setCurrentPage(data.page);
          setNextPage(data.page + 1);
          setPrevPage(data.page - 1);
          setTotalPages(data.total_pages);
        } else {
          setMovies([]);
        }
      });
  };

  const showMovies = (data) => {
    return data.map((movie) => {
      const { title, poster_path, vote_average, overview, id } = movie;
      return (
        <div key={id} className="movie">
          <img
            src={poster_path ? IMG_URL + poster_path : 'http://via.placeholder.com/1080x1580'}
            alt={title}
          />
          <div className="movie-info">
            <h3>{title}</h3>
            <span className={getColor(vote_average)}>{vote_average}</span>
          </div>
          <div className="overview">
            <h3>About</h3>
            {overview}
            <br />
          </div>
        </div>
      );
    });
  };

  
  const getColor = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = search.current.value;
    setSelectedGenre([]);
    if (searchTerm) {
      getMovies(searchURL + '&query=' + searchTerm);
    } else {
      getMovies(API_URL);
    }
  };

  const handlePrevClick = () => {
    if (prevPage > 0) {
      pageCall(prevPage);
    }
  };

  const handleNextClick = () => {
    if (nextPage <= totalPages) {
      pageCall(nextPage);
    }
  };

  const pageCall = (page) => {
    const url = `${lastUrl}&page=${page}`;
    getMovies(url);
  };

  const handleGenreClick = (genre) => {
    let updatedGenres;
    if (selectedGenre.includes(genre.id)) {
      updatedGenres = selectedGenre.filter((id) => id !== genre.id);
    } else {
      updatedGenres = [...selectedGenre, genre.id];
    }
    setSelectedGenre(updatedGenres);

    const genreString = updatedGenres.join(',');
    const genreUrl = `${API_URL}&with_genres=${genreString}`;
    getMovies(genreUrl);
  };

  return (
    <div>
      <div id="tags">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className={`tag ${selectedGenre.includes(genre.id) ? 'highlight' : ''}`}
            id={genre.id}
            onClick={() => handleGenreClick(genre)}
          >
            {genre.name}
          </div>
        ))}
      </div>
      <form id="form" onSubmit={handleSearch}>
        <input type="text" placeholder="Search" id="search" className="search" ref={search} />
      </form>
      <main id="main">{showMovies(movies)}</main>
      <div className="pagination">
        <div className="page" id="prev" onClick={handlePrevClick}>
          Previous Page
        </div>
        <div className="current" id="current">
          {currentPage}
        </div>
        <div className="page" id="next" onClick={handleNextClick}>
          Next Page
        </div>
      </div>
    </div>
  );
}

export default MovieApp;

