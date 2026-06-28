import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { layouts } from '../styles';

export const Footer = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <layouts.NavFooter className="Footer-menu">
      <Title className="app-title">FAANG Connector</Title>
      {location.pathname !== '/' && (
        <layouts.NavButton style={{ marginRight: '15px' }} onClick={() => history.push('/')}>
          Return to homepage
        </layouts.NavButton>
      )}
    </layouts.NavFooter>
  );
};

const Title = styled('h1')`
  margin-left: 15px;
  font-weight: 900;
  font-size: 30px;
  color: white;

  @media (max-width: 320px) {
    font-size: 25px;
    margin-top: 0px;
  }

  @media (min-width: 800px) {
    font-size: 5rem;
  }
`;
