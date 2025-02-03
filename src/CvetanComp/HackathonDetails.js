import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {useLocation} from "react-router-dom";

import HackathonDetails_Hero from "./HackathonDetails_Hero";
import HackatonDetails_Detail from "./HackatonDetails_Detail";
import Hackathon_Register from "./Hackathon_Register";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  color: white;
  font-family: 'Press Start 2P', cursive;
`;

function HackathonDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { hackathon } = location.state || {};

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <GlobalStyle />
      <PageContainer>

        <HackathonDetails_Hero hackathon={hackathon}/>

        <HackatonDetails_Detail hackathon={hackathon}/>

        <Hackathon_Register/>

      </PageContainer>
    </>
  );
}

export default HackathonDetails;
