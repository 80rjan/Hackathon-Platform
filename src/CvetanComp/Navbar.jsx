import React from 'react';
import styled from 'styled-components';

const NavbarComponent = () => {
  const handleBack = () => {
    // Your back navigation logic here
  };

  return (
    <Header>
      <Logo onClick={handleBack}>Hackathon Arena</Logo>
      <Nav>
        <NavLink className="hackatons">Hackatons</NavLink>
        <NavLink className="users">Users</NavLink>
        <NavLink className="account">Account</NavLink>
      </Nav>
    </Header>
  );
};

export default NavbarComponent;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
`;

const Logo = styled.div`
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  white-space: nowrap;
`;

const Nav = styled.nav`
  display: flex;
  gap: 4rem;
  align-items: center;
`;

const NavLink = styled.a`
  font-family: 'Press Start 2P', cursive;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;

  &.hackatons {
    color: #FFD700;
  }

  &.users {
    color: #00FF9D;
  }

  &.account {
    color: #FF0000;
  }
`;
