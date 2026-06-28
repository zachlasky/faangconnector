import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { layouts } from '../styles';
import { Layout } from './global';

export const About = () => {
  const history = useHistory();

  return (
    <Layout
      topSection={{
        heading: 'Welcome to FAANG Connector',
        button: 'Check out FAANG Companies',
        buttonClick: '/companies'
      }}
      middleSection={{
        heading: 'Google jobs are now viewable!',
        paragraph: `Scroll horizontally to read about how this website works.`,
        sliderContent: (
          <>
            <AboutSection>
              This website uses Google's Puppeteer to scrape job postings and candidates from FAANG
              company websites and SignalHire.
            </AboutSection>
            <AboutSection>
              Candidates are compared to the job listings based on their skills. If they are a good
              fit, you will see them listed as a match after selecting a job.
            </AboutSection>
            <AboutSection>
              The server code is written in Node with Express and the user interface is written in
              React. The project is hosted on Netlify and Heroku.
            </AboutSection>
            <AboutSection>
              New jobs and candidates are automatically scraped every day, once a day.
            </AboutSection>
            <AboutSection>
              Candidate contact information is not listed to protect their privacy.
            </AboutSection>
          </>
        ),
        children: (
          <layouts.MiddleSectionButton onClick={() => history.push('/')}>
            Return to homepage
          </layouts.MiddleSectionButton>
        )
      }}
    />
  );
};

const AboutSection = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100px;
  min-width: 200px;
  border-radius: 3px;
  margin: 10px 5px;
  text-align: center;
  font-size: 14px;
  padding: 0 15px;
  overflow-y: scroll;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (min-width: 800px) {
    min-height: 10rem;
    min-width: 15rem;
    font-size: 1rem;
  }
`;
