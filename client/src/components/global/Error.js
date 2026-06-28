import React from 'react';
import styled from 'styled-components';
import walrusHead from '../../assets/walrusHead.png';
import { Layout } from './Layout';

export const Error = () => {
  return (
    <Layout
      topSection={{
        children: <Logo src={walrusHead} alt="Walrus Head" />
      }}
      middleSection={{
        heading: 'An error has occurred... Please refresh this page.'
      }}
    />
  );
};

const Logo = styled('img')`
  height: 40px;

  @media (min-width: 800px) {
    height: 5rem;
  }
`;
