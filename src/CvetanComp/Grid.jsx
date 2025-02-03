import React from 'react';
import styled from 'styled-components';
import hackathonImage from '../assets/image.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import hackathons from "../Data/hackathons.json"


const Grid_main = () => {
  const navigate = useNavigate(); // Initialize navigate at the top level of the component

  const handleEnterNow = (e, hackathon) => {
    e.stopPropagation();
    navigate('/main/hackathon', {
        state: {
            hackathon: hackathon,
        }
    });
    // Correctly call navigate here
  };
    const avatarImages = require.context('../Data/picturesHackathons', false, /\.(png|jpe?g|svg)$/);
    const filteredHackathons = hackathons.filter(hackathon => !hackathon.isPremium);

  return (
    <GridSection>
      <SectionTitle>Find your hackathon</SectionTitle>
      <HackathonGrid id="hackathonsGrid">
        {filteredHackathons.map((hackathon, index) => (
          <GridCard key={index}>
            <div className="image-container">
              <FaqBadge>FAQ</FaqBadge>
              <img src={avatarImages(`./${hackathon.image.split('/').pop()}`)} alt="Hackathon" />
            </div>
            <div className="card-content">
              <GridCardTitle>{hackathon.name}</GridCardTitle>
              <div className="card-bottom">
                <div className="info-container">
                  <GridCardInfo>{hackathon.city}, {hackathon.location}</GridCardInfo>
                  <GridCardInfo>{hackathon.date}</GridCardInfo>
                </div>
                  <GridEnterButton onClick={(e) => handleEnterNow(e, hackathon)}>Enter Now</GridEnterButton>
              </div>
            </div>
          </GridCard>
        ))}
      </HackathonGrid>
    </GridSection>
  );
};

export default Grid_main;

const GridCard = styled.div`
    background: rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);

    .image-container {
        position: relative;
        height: 12rem;
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
        opacity: 0.9;
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
  letter-spacing: 0.5px;
`;

const GridEnterButton = styled.button`
  //background: rgba(0,255,0,.4);
    background: var(--red);
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  letter-spacing: 1px;
    transition: all .5s ease;

  &:hover {
    background: rgba(0,255,0,0.4);
      scale: 0.9;
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

/* ------------------------------------------------ GRID SECTION */
const GridSection = styled.section`
  padding: 2rem 4rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Electrolize', sans-serif;
  text-align: center;
  color: white;
  font-size: 3rem;
  margin-bottom: 3rem;
  font-weight: normal;
`;

const HackathonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  //max-width: 1200px;
`;
