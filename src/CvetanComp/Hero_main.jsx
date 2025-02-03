import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hackathonImage from '../assets/image.png';
import { useNavigate } from 'react-router-dom';
import hackathons from "../Data/hackathons.json"

const HeroMain = () => {
  // Correct placement of the useNavigate hook
  const navigate = useNavigate();

  const filteredHackathons = hackathons.filter(hackathon => hackathon.isPremium);
  const avatarImages = require.context('../Data/picturesHackathons', false, /\.(png|jpe?g|svg)$/);


  // Move the settings for the slider outside of the handleBack function
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const handleEnterNow = (e, hackathon) => {
    e.stopPropagation();
    navigate('/main/hackathon', {
      state: {
        hackathon: hackathon,
      }
    }); // This ensures it navigates to the correct path
  };

  return (
    <HeroSection>
      <HeroTitle>
        Find Hackathons You Love. Code.<br />
        Connect. Conquer.
      </HeroTitle>
      <CarouselContainer>
        <Slider {...settings}>
          {filteredHackathons.map((item) => (
            <div key={item}>
              <GridCard>
                <div className="image-container">
                  <FaqBadge>FAQ</FaqBadge>
                  <img src={avatarImages(`./${item.image.split('/').pop()}`)} alt="Hackathon" />
                </div>
                <div className="card-content">
                  <GridCardTitle>{item.name}</GridCardTitle>
                  <div className="card-bottom">
                    <div className="info-container">
                      <GridCardInfo>{item.city}, {item.location}</GridCardInfo>
                      <GridCardInfo>{item.date}</GridCardInfo>
                    </div>
                    <GridEnterButton onClick={(e) => handleEnterNow(e, item)}>Enter Now</GridEnterButton>
                  </div>
                </div>
              </GridCard>
            </div>
          ))}
        </Slider>
      </CarouselContainer>
    </HeroSection>
  );
};

export default HeroMain;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HeroTitle = styled.h1`
  font-family: 'Electrolize', sans-serif;
  font-size: 3rem;
  line-height: 1.4;
  color: white;
  font-weight: normal;
`;

const CarouselContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  position: relative;
  padding: 0;

  .slick-slide {
    padding: 0 3rem;
    opacity: 0.5;
    transform: scale(0.9);
    transition: opacity 0.3s ease;

    > div {
      overflow: hidden;
    }
  }

  .slick-center {
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s ease;
    
    > div {
      border-radius: 12px;
      overflow: hidden;
    }
  }

  .slick-list {
    margin: 0 -3rem;
  }

  .slick-prev, .slick-next {
    width: 8rem;
    height: 2rem;
    z-index: 1;
    &:before {
      content: '';
      width: 2rem;
      height: 2rem;
      border: solid white;
      border-width: 0 4px 4px 0;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }

  .slick-prev {
    left: calc(33.33% - 80px);
    &:before {
      transform: translate(-25%, -50%) rotate(135deg);
    }
  }

  .slick-next {
    right: calc(33.33% - 80px);
    &:before {
      transform: translate(-75%, -50%) rotate(-45deg);
    }
  }
`;

const GridCard = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  //width: 20rem;

  .image-container {
    height: 14rem;
    position: relative;
    //aspect-ratio: 4/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .card-content {
    //background: rgba(44, 43, 88, 0.95);
    padding: 1.5rem 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    border-radius: 0 0 15px 15px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    //gap: 0.5rem;
  }
`;

const GridCardTitle = styled.h3`
  font-family: 'Press Start 2P', cursive;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

const GridCardInfo = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Electrolize', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

const GridEnterButton = styled.button`
  //width: 50%;
  background: var(--red);
  color: white;
  border: none;
  padding: 1rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  letter-spacing: 1px;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(215, 35, 35, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
`;

const FaqBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  color: white;
  backdrop-filter: blur(5px);
  letter-spacing: 1px;
`;
