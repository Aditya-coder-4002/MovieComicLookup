import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import featuredImage1 from '../images/first.png'; 
import featuredImage2 from '../images/second.png';
import featuredImage3 from '../images/third.png';
import featuredImage4 from '../images/fourth.png';

const FeaturedCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        <div>
          <FeaturedImage src={featuredImage1} alt="Featured 1" />
        </div>
        <div>
          <FeaturedImage src={featuredImage2} alt="Featured 2" />
        </div>
        <div>
          <FeaturedImage src={featuredImage3} alt="Featured 3" />
        </div>
        <div>
          <FeaturedImage src={featuredImage4} alt="Featured 4" />
        </div>
      </Slider>
    </CarouselContainer>
  );
};


const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px; 
  background-color: black;
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  padding: 0; 
  margin-top: 60px; 
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export default FeaturedCarousel;