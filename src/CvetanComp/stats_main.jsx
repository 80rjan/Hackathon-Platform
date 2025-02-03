import React from 'react';
import styled from 'styled-components';

const Stats_menu = () => {
  const handleBack = () => {
    // Your back navigation logic here
  };

  return (
    <StatsSection>
          <StatsTitle>Why participate in hackathons</StatsTitle>
          <StatsGrid>
            <StatItem>
              <StatValue color="var(--orange)">40%</StatValue>
              <StatLabel>higher chances to land a job</StatLabel>
            </StatItem>
            <Line />
            <StatItem>
              <StatValue color="var(--lightGreen)">15</StatValue>
              <StatLabel>new connections on average</StatLabel>
            </StatItem>
            <Line />
            <StatItem>
              <StatValue color="var(--red)">1</StatValue>
              <StatLabel>new project in your cv</StatLabel>
            </StatItem>
            <Line />
            <StatItem>
              <StatValue color="var(--lightYellow)">50%</StatValue>
              <StatLabel>in real world projects</StatLabel>
            </StatItem>
            <Line />
            <StatItem>
              <StatValue color="var(--brightBlue)">10+</StatValue>
              <StatLabel>skills learned every hackathon</StatLabel>
            </StatItem>
          </StatsGrid>

          <BenefitsBar>
            <div>
              <BenefitText color="var(--brightBlue)">Learn</BenefitText>
              <BenefitText>&</BenefitText>
              <BenefitText>improve skills</BenefitText>
            </div>
            <LineSmall />
            <div>
              <BenefitText>Build you</BenefitText>
              <BenefitText color="var(--red)">network</BenefitText>
            </div>
            <LineSmall />
            <div>
              <BenefitText>Gain recognition</BenefitText>
              <BenefitText>&</BenefitText>
              <BenefitText color="var(--orange)">opportunities</BenefitText>
            </div>
            <LineSmall />
            <div>
              <BenefitText color="var(--lightGreen)">Challenge</BenefitText>
              <BenefitText>yourself</BenefitText>
            </div>
            <LineSmall />
            <div>
              <BenefitText color="var(--gold)">Win </BenefitText>
              <BenefitText >prizes and have fun</BenefitText>
            </div>
          </BenefitsBar>
        </StatsSection>
  );
};

export default Stats_menu;

const StatsSection = styled.section`
  //padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 5rem;
`;

const StatsTitle = styled.h2`
  font-family: 'Electrolize', sans-serif;
  text-align: center;
  color: white;
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: normal;
`;

const StatsGrid = styled.div`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  //box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  gap: 2rem;
`;

const StatItem = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 0.2rem;
  width: 20%;
`;

const StatValue = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.8rem;
  color: ${props => props.color || 'white'};
`;

const StatLabel = styled.div`
  color: rgba(255,255,255,0.8);
  font-size: 1.2em;
  font-family: 'Electrolize', sans-serif;
`;

const Line = styled.div`
  background: rgba(255,255,255,0.6);
  height: 6rem;
  width: 2px;
`


/*------------------------------------------------ BENEFITS */
const BenefitsBar = styled.div`
  display: flex;
  font-size: 1.2rem;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  font-family: 'Electrolize', sans-serif;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  //box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
  
  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const BenefitText = styled.span`
  color: ${props => props.color || "rgba(255,255,255,0.8)"};
`;

const LineSmall = styled.section`
  background: rgba(255,255,255,0.6);
  height: 2rem;
  width: 2px;
`

