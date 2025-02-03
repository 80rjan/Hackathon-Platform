import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/image.png';
import {Link} from "react-router-dom"; // Replace with actual profile image
import users from "../Data/users.json";
const plus = <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
const avatarImages = require.context('../Data/pictures', false, /\.(png|jpe?g|svg)$/);


const ProfileGrid = () => {
  return (
    <GridSection>
      <SectionTitle>Connect with another user</SectionTitle>
      <GridContainer>
        {users.map((user, index) => (
          <ProfileCard key={index}>
              <ProfileImage  src={avatarImages(`./${user.image.split('/').pop()}`)}  alt={`altImage`} />
              <ProfileName>{user.name}</ProfileName>
            <ProfileSubtext>{user.programmingLanguages.map((language,index) => language.name + " ")}</ProfileSubtext>
            <StatsSection>
              <Stat>
                <span>{user.completedHackathons.length}</span>
                <label>Participations</label>
              </Stat>
              <Stat>
                <span>{user.completedHackathons.filter(hackathon => hackathon.won === true).length}</span>
                <label>Wins</label>
              </Stat>
            </StatsSection>
              <Link to="/main/user" state={{user}}>
                  <DetailsButton>Details</DetailsButton>
              </Link>
              <PlusWrapper >
                  {plus}
              </PlusWrapper>
            </ProfileCard>
        ))}
      </GridContainer>
    </GridSection>
  );
};

export default ProfileGrid;

/* ------------------------ Styled Components ------------------------ */

/* -------------------------------- Grid Section -------------------------------- */
const GridSection = styled.section`
  padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

/* -------------------------------- Section Title -------------------------------- */
const SectionTitle = styled.h2`
  font-family: 'Electrolize', sans-serif;
  text-align: center;
  color: white;
  font-size: 3rem;
  //margin-bottom: 4rem;
  font-weight: normal;
`;

/* -------------------------------- Grid Container -------------------------------- */
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  //max-width: 1200px;
  //margin: 0 auto;
`;

/* -------------------------------- Profile Card -------------------------------- */

const ProfileCard = styled.div`
    position: relative;
    //background: rgba(0,0,0,.4);
    background: radial-gradient(circle, rgba(255,255,255, .1) 20%, rgba(0,0,0,.04));
    border: 2px solid rgba(0,0,0,.2);
    color: white;
    padding: 1.5rem 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Press Start 2P', cursive;
`;


/* -------------------------------- Profile Image -------------------------------- */
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  //background: white;
`;

/* -------------------------------- Name Title -------------------------------- */
const ProfileName = styled.h3`
  font-size: 1.2rem;
  letter-spacing: 1px;
    margin: .5rem 0;
`;

/* -------------------------------- Subtext -------------------------------- */
const ProfileSubtext = styled.p`
    font-family: "Electrolize", sans-serif;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.7);
`;

/* -------------------------------- Stats Section -------------------------------- */
/* -------------------------------- Stats Section -------------------------------- */
const StatsSection = styled.div`
  display: flex;
  gap: 5rem; /* Increased gap to make it approximately 12px wider */
  margin-top: .5rem;
`;


/* -------------------------------- Stat Component -------------------------------- */
const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  label {
      font-family: "Electrolize", sans-serif;
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.6);
  }

  &:first-child span {
    color: var(--red);
  }

  &:last-child span {
    color: var(--gold);
  }
`;

/* -------------------------------- Connect Button -------------------------------- */
const DetailsButton = styled.button`
  background: #fff;
  color: #1e1b45;
  border: none;
    padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  letter-spacing: 1px;
    margin-top: 1rem;
    transition: all 0.5s ease;

  &:hover {
    opacity: 0.8;
      scale: 0.95;
  }
`;

const PlusWrapper = styled.div`
    display: flex;
    border-radius: 4px;
    background: rgba(255,255,255,0.6);
    padding: 5px;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
        scale: 0.9;
    }
`

