import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import actionMovieCard from '../images/mc1.png'; 
import adventureMovieCard from '../images/mc2.png';
import blockbusterMovieCard from '../images/mc3.png';
import vipMovieCard from '../images/mc4.png';
import movie95Card from '../images/mc5.png'; 
import movieCard from '../images/mc6.png'; 
import { MdOndemandVideo } from "react-icons/md";

const MovieCardCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  const movies = [
    { image: actionMovieCard,  },
    { image: adventureMovieCard,  },
    { image: blockbusterMovieCard,  },
    { image: vipMovieCard,  },
    { image: movie95Card,  },
    { image: movieCard,  },
  ];

  return (
    <CarouselContainer>
      <LinkContainer href="Movies">
        <MoviesLink>Movies</MoviesLink>
        <MdOndemandVideo size={24} color="#FFFFFF" />
      </LinkContainer>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <MovieCard key={index}>
            <CardImage src={movie.image} alt={movie.title} onError={(e) => e.target.src = 'path/to/placeholder.png'} />
            <CardTitle>{movie.title}</CardTitle>
          </MovieCard>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px; 
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  padding: 0 30px; 
  margin-top: 60px; 
`;

const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  padding-bottom: 20px; 
  text-decoration: none; 
  width: 10%;
`;

const MoviesLink = styled.span`
  color: #FFFFFF; 
    font-size: 24px; 
  margin-right: 10px; 
`;

const MovieCard = styled.div`
  text-align: center;
  margin: 0 10px 0 30px; 
    width: 300px; 
  height: 300px; 
`;

const CardImage = styled.img`
  width: 80%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover; 
`;

const CardTitle = styled.h3`
  font-size: 14px;
  margin-top: 5px;
`;

export default MovieCardCarousel;
