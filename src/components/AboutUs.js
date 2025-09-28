import React from 'react';
import styled from 'styled-components';
import { SiCodersrank } from "react-icons/si";
import foundingImage from '../images/team1.jpg'; 
import growthImage from '../images/team2.jpg';
import fundingImage from '../images/team3.jpg';
import backgroundImage from '../images/home-background.png'; 

const AboutUs = () => {
  return (
    <Container>
      <StyledH1>About Us</StyledH1>
      <Section>
        <Content>
          <Text>
            <CustomList>
              <li><IconWrapper><SiCodersrank /></IconWrapper><Highlight>Name:</Highlight> Jaya Prakash Narayan Mishra</li>
              <li><IconWrapper><SiCodersrank /></IconWrapper><Highlight>Role:</Highlight> Team Leader,Backend Devloper, Figma Wire Frame Designer, Flow Chart & E-R Designer</li>
              <li><IconWrapper><SiCodersrank /></IconWrapper><Highlight>E-Mail:</Highlight>23cse307.jayaprakashnarayan@giet.edu</li>
            </CustomList>
          </Text>
          <Image src={foundingImage} alt="Our Founding" />
        </Content>
      </Section>
      <Section>
        <Content>
          <Image src={growthImage} alt="Early Growth" />
          <Text>
            <CustomList>
              <li><IconWrapper><SiCodersrank /></IconWrapper><Highlight>Name:</Highlight> Ladi Naga Vardhan.</li>
              <li><IconWrapper><SiCodersrank /></IconWrapper><Highlight>Role:</Highlight> Documentation, Frontend Designer, Frontend Devloper</li>
              <li><IconWrapper><SiCodersrank /></IconWrapper><Highlight>E-Mail:</Highlight> 23cse299.ladinagavardhan@giet.edu</li>
            </CustomList>
          </Text>
        </Content>
      </Section>
      <Section>
        <Content>
          <Text>
            <CustomList>
              <li><IconWrapper><SiCodersrank /></IconWrapper><Highlight>Name:</Highlight> Aditya Biswal</li>
              <li><IconWrapper><SiCodersrank /></IconWrapper><Highlight>Role:</Highlight> Documentation, Frontend Devloper, Designer, API Handler</li>
              <li><IconWrapper><SiCodersrank /></IconWrapper><Highlight>E-mail:</Highlight> 23cse.adityabiswal@giet.edu </li>
            </CustomList>
          </Text>
          <Image src={fundingImage} alt="Series B Funding" />
        </Content>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: white;
  min-height: 100vh;
  background-image: url(${backgroundImage});
`;

const StyledH1 = styled.h1`
  color: grey;
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 20px;
  font-style: italic;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  flex: 1;
  line-height: 1.6;
  color: orange;
  font-style: italic;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const Highlight = styled.span`
  color: violet;
  font-style: italic;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  border-radius: 10%;
  
  @media (max-width: 768px) {
    order: 1;
    max-width: 100%;
    height: auto;
  } 
`;

const CustomList = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  color: violet;
  font-size: 1.5em;
`;

export default AboutUs;
