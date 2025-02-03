import React from 'react';
import styled from 'styled-components';
import hackathonImage from '../assets/image.png';

const HackathonDetails_Hero = ({ hackathon }) => {
  const handleBack = () => {
    // Your back navigation logic here
  };
    const avatarImages = require.context('../Data/picturesHackathons', false, /\.(png|jpe?g|svg)$/);

  return (
    <MainContent>
          <ContentWrapper>
            <HackathonTitle>{hackathon.name}</HackathonTitle>
            <Description>
                {hackathon.description}
            </Description>
          </ContentWrapper>
          
          <ImageSection>
            {/*<FaqBadge>FAQ</FaqBadge>*/}
            <HackathonImage>
              <img src={avatarImages(`./${hackathon.image.split('/').pop()}`)} alt="Hackathon" />
              {/*<div className="title">SKP CODE</div>*/}
              {/*<div className="year">2024</div>*/}
            </HackathonImage>
          </ImageSection>
        </MainContent>
  );
};

export default HackathonDetails_Hero;

/* ------------------------------------------------ HERO-MAIN */
const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6rem 6rem;
  position: relative;
  //margin: 6rem 0 6rem 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

const HackathonTitle = styled.h1`
  font-family: 'Press Start 2P', cursive;
  font-size: 3rem;
    text-align: center;
  color: white;
  margin-bottom: 3rem;
  letter-spacing: 2px;
  line-height: 1.2;

  //@media (max-width: 1536px) {
  //  font-size: 3rem;
  //  text-align: center;
  //}
`;

const Description = styled.p`
  font-family: 'Electrolize', sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;

  @media (max-width: 1536px) {
    text-align: center;
    margin: 0 auto;
    font-size: 1.2rem;
  }
`;


/* ------------------------------------------------  IMAGE SECTION */
const ImageSection = styled.div`
  position: relative;
  width: 45%;
`;

const FaqBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  color: white;
  z-index: 2;
`;

const HackathonImage = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: #1E1B45;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .title {
    font-family: 'Press Start 2P', cursive;
    font-size: 2.5rem;
    color: #3B82F6;
    text-align: center;
    margin-bottom: 1rem;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .year {
    font-family: 'Press Start 2P', cursive;
    font-size: 3rem;
    color: #3B82F6;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
