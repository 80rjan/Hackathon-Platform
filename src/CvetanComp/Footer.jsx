import React from 'react';
import styled from 'styled-components';

const FooterComponent = () => {
  const handleBack = () => {
    // Your back navigation logic here
  };

  return (
    <Footer>
          <FooterLogo>Hackathon Arena</FooterLogo>
          <FooterNav>
            <FooterLink className="hackatons">Hackatons</FooterLink>
            <FooterLink className="users">Users</FooterLink>
            <FooterLink className="account">Account</FooterLink>
          </FooterNav>
          <Copyright>Copyright 2024</Copyright>
    </Footer>
  );
};

export default FooterComponent;

const Footer = styled.footer`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const FooterLogo = styled.div`
  font-family: 'Press Start 2P', cursive;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  height: 100%;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  flex: 1;
`;

const FooterLink = styled.a`
  font-family: 'Press Start 2P', cursive;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;

  &.hackatons {
    color: white;
  }

  &.users {
    color: white;
  }

  &.account {
    color: #FF0000;
  }
`;

const Copyright = styled.div`
  font-family: 'Press Start 2P', cursive;
  color: white;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  height: 100%;
`;
