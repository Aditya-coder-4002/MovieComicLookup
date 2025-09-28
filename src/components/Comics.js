import React, { useState, useEffect } from 'react';
import './comic.css';
import { generatePath } from 'react-router-dom';
import { BsNoiseReduction } from 'react-icons/bs';
import { GiDaemonSkull } from 'react-icons/gi';
import { MdFaceRetouchingNatural } from 'react-icons/md';

const MangaList = () => {
  const [genres, setGenres] = useState([]);
  const [mangaList, setMangaList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchGenres();
    fetchMangaByGenre(15, 1); 
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await fetch('https://api.jikan.moe/v4/genres/manga');
      const data = await response.json();
      const allowedGenres = [
        'Action', 'Adventure', 'Award Winning', 'Comedy', 'Drama', 'Horror', 'Mystery', 'Detective',
        'Educational', 'Historical', 'Mythology', 'Military', 'Psychological', 'Time Travel', 'Kids'
      ];
      const filteredGenres = data.data.filter(genre => allowedGenres.includes(genre.name));
      setGenres(filteredGenres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const fetchMangaByGenre = async (genreId, page = 1) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga?genres=${genreId}&page=${page}`);
      const data = await response.json();
      setMangaList(data.data);
      setTotalPages(data.pagination.last_visible_page);
    } catch (error) {
      console.error('Error fetching manga by genre:', error);
    }
  };

  const searchManga = async (page = 1) => {
    if (!searchQuery) return;
    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga?q=${searchQuery}&page=${page}`);
      const data = await response.json();
      setMangaList(data.data);
      setTotalPages(data.pagination.last_visible_page);
    } catch (error) {
      console.error('Error searching manga:', error);
    }
  };

  const truncateSynopsis = (synopsis) => {
    if (!synopsis || typeof synopsis !== 'string') {
      console.warn('Invalid synopsis:', synopsis);
      return 'No synopsis available.';
    }
    const words = synopsis.split(' ');
    if (words.length <= 100) return synopsis;
    return words.slice(0, 100).join(' ') + '...';
  };

  const displayManga = () => {
    if (!mangaList) return null;
    return mangaList
      .filter(item => item && item.genres && !item.genres.some(genre => genre.name === 'Ecchi'))
      .map((item, index) => (
        <div key={index} className="manga-card">
          <span className="rating">{item.score || 'N/A'}</span>
          <span className="chapter">Ch. {item.chapters || 'N/A'}</span>
          <img src={item.images.jpg.image_url} alt={item.title} />
          <h2>{item.title}</h2>
          <div className="about-overlay">
            <span className="about-title">About</span>
            <p>{truncateSynopsis(item.synopsis) || 'No synopsis available.'}</p>
          </div>
        </div>
      ));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (searchQuery) {
      searchManga(newPage);
    } else {
      fetchMangaByGenre(15, newPage); 
    }
  };

  return (
    <div>
      <div id="genre-buttons">
        {genres.map(genre => (
          <button
            key={genre.mal_id}
            onClick={() => {
              setCurrentPage(1);
              fetchMangaByGenre(genre.mal_id, 1);
            }}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <div id="search-bar">
        <input
          type="text"
          id="search-input"
          placeholder="Search for mangas"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => searchManga(1)}>Search</button>
      </div>
      <div id="anime-list">{displayManga()}</div>
      <div id="pagination-controls">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span> {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MangaList;




