import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const DetailsHack = ({ hackathon }) => {
  const handleBack = () => {
    // Your back navigation logic here
  };


  return (
      <div style={{width: "100%", padding: "1rem 8rem"}}>
          <DetailsSection>
              <DetailItem>
                  <DetailLabel color="var(--brightBlue)">When?</DetailLabel>
                  <DetailValue>{hackathon.date} {hackathon.time}</DetailValue>
              </DetailItem>
              <Line />
              <DetailItem>
                  <DetailLabel color="var(--lightGreen)">Duration?</DetailLabel>
                  <DetailValue>{hackathon.duration} hours</DetailValue>
              </DetailItem>
              <Line />
              <DetailItem>
                  <DetailLabel color="var(--orange)">Where?</DetailLabel>
                  <DetailValue>{hackathon.location}, {hackathon.city}</DetailValue>
              </DetailItem>
              <Line />
              <DetailItem>
                  <DetailLabel color="var(--red)">Difficulty?</DetailLabel>
                  <DetailValue>{hackathon.difficulty}</DetailValue>
              </DetailItem>
          </DetailsSection>
      </div>
  );
};

export default DetailsHack;

/* ------------------------------------------------  DetaileSection */
const DetailsSection = styled.div`
  border-radius: 15px;
    padding: 1rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
`;

const DetailItem = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 25%;
`;

const DetailLabel = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.4rem;
  color: ${props => props.color};
  text-align: center;
`;

const DetailValue = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  color: white;
  text-align: center;
`;

const Line = styled.div`
  background: rgba(255,255,255,0.6);
  height: 6rem;
  width: 2px;
`
