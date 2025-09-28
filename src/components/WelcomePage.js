import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import MovieCard from './MovieCard';
import ComicCard from './ComicCard';
import styled from 'styled-components';
import backgroundImage from '../images/home-background.png'; 

const WelcomePage = () => {
  return (
    <Container>
      <Navbar />
      <Home/>
      <MovieCard/>
      <ComicCard/>
      <Footer> {}
        <FooterLinks>
          <FooterLink href="AboutUs">Terms and Conditions</FooterLink>
          <FooterLink href="AboutUs">Privacy Policy</FooterLink>
          <FooterLink href="AboutUs">Contact Us</FooterLink>
        </FooterLinks>
        <Copyright>
          © 2024 Your Company. All rights reserved.
        </Copyright>
      </Footer>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  background-image: url(${backgroundImage}); 
  background-size: cover; 
  background-position: center;
  background-attachment: fixed;
  overflow-y: auto;
`;


const Footer = styled.footer`
  background-color: #333; 
  color: white;
  text-align: center; 
  padding: 20px 0; 
  margin-top: 100px; 
`;

const FooterLinks = styled.div`
display: flex;
justify-content: center;
margin-bottom: 10px; 
`;

const FooterLink = styled.a`
color: white; 
margin: 0 35px; 
text-decoration: none; 
&:hover {
  text-decoration: underline; 
}
`;

const Copyright = styled.div`
margin-top: 10px;
margin-left: 30px;
`;

export default WelcomePage;
