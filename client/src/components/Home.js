import React from 'react';
import { Layout } from '../components/global';

export const Home = () => {
  return (
    <Layout
      topSection={{
        heading: 'Connect top tech jobs with top tech candidates.',
        button: 'View FAANG companies',
        buttonClick: '/companies'
      }}
      middleSection={{
        heading: 'Learn more about FAANG Connector',
        paragraph: `This website uses Google's Puppeteer to scrape job postings and candidates from FAANG
          company websites and SignalHire.`,
        button: 'Learn more',
        buttonClick: '/about'
      }}
    />
  );
};
