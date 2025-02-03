import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Hero_main from "./Hero_main";
import Stats_menu from "./stats_main";
import Grid_main from "./Grid";
import FooterComponent from "./Footer";
import Profile from "./Users";

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

const AppContainer = styled.div`
  min-height: 100vh;
  color: white;
  font-family: 'Press Start 2P', cursive;
`;



export default function Cvetan() {
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

  return (
    <>
      <GlobalStyle />
      <AppContainer>

      {/* HERO DELOT */}
        <Hero_main />

      {/* STATS */}
        <Stats_menu/>

      {/* GRID */}
        <Grid_main/>

        <Profile />

      </AppContainer>
    </>
  );
}

