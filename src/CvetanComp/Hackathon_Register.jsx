import React from 'react';
import styled from 'styled-components';

const Register = () => {
  const handleBack = () => {
    // Your back navigation logic here
  };

  return (
      <div style={{display: 'flex', justifyContent: 'center', padding: "2rem 24rem"}}>
          <RegisterSection>
              <FormTitle>Start</FormTitle>
              <Input placeholder="People in your team, (3-5)" />
              <Input placeholder="Team name" />
              <Input placeholder="Tag your team members" />
              <SubmitButton>Submit</SubmitButton>
          </RegisterSection>
      </div>
  );
};

export default Register;

/* ------------------------------------------------ REGISTER */
const RegisterSection = styled.div`
    box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
    width: 100%;
    padding: 2rem 4rem;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.10) 50%, rgba(153, 153, 153, 0.10) 100%);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;

const FormTitle = styled.h2`
  font-family: 'Press Start 2P', cursive;
  color: white;
  font-size: 2.5rem;
    margin-bottom: 1rem;
`;

const Input = styled.input`
    text-align: center;
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(0,0,0,0.2);
  border: none;
  border-radius: 2rem;
  color: white;
  font-family: 'Press Start 2P', cursive;
  //font-size: 0.8rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
    font-family: 'Press Start 2P', cursive;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: var(--red);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 3rem;
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: var(--lightGreen);
  }
`;