import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaApple, FaAmazon, FaGoogle } from 'react-icons/fa';
import { SiNetflix } from 'react-icons/si';
import { colors, layouts } from '../../styles';
import { Layout } from '../global';

export const Companies = () => {
  const history = useHistory();

  return (
    <>
      <Layout
        topSection={{
          heading: `What's FAANG?`,
          button: 'Learn about FAANG',
          customButton: () => window.open('https://en.wikipedia.org/wiki/Big_Tech', '_blank')
        }}
        middleSection={{
          heading: 'Select a FAANG company.',
          paragraph: `Selecting a FAANG company will show you jobs sourced directly from the FAANG company
          website.`,
          children: (
            <ButtonContainer>
              <FacebookButton className="facebook-company-wrapper" title="Facebook">
                <FaFacebookF
                  className="facebook-company-icon"
                  size="24px"
                  alt="Facebook company icon"
                />
              </FacebookButton>
              <AppleButton className="apple-company-wrapper" title="Apple">
                <FaApple className="apple-company-icon" size="24px" alt="Apple company icon" />
              </AppleButton>
              <AmazonButton className="amazon-company-wrapper" title="Amazon">
                <FaAmazon className="amazon-company-icon" size="24px" alt="Amazon company icon" />
              </AmazonButton>
              <NetflixButton className="netflix-company-wrapper" title="Netflix">
                <SiNetflix
                  className="netflix-company-icon"
                  size="24px"
                  alt="Netflix company icon"
                />
              </NetflixButton>
              <GoogleButton
                className="google-company-wrapper"
                title="Google"
                onClick={() => history.push('/companies/google')}>
                <FaGoogle className="google-company-icon" size="24px" alt="Google company icon" />
              </GoogleButton>
            </ButtonContainer>
          )
        }}
      />
    </>
  );
};

const ButtonContainer = styled('div')`
  display: flex;
`;

const CompanyButton = styled(layouts.MiddleSectionButton)`
  background: grey;
  &:hover {
    background: grey;
  }
  width: 50px;
`;

const FacebookButton = styled(CompanyButton)`
  cursor: not-allowed;
`;

const AppleButton = styled(CompanyButton)`
  cursor: not-allowed;
`;

const AmazonButton = styled(CompanyButton)`
  cursor: not-allowed;
`;

const NetflixButton = styled(CompanyButton)`
  cursor: not-allowed;
`;

const GoogleButton = styled(CompanyButton)`
  background: ${colors.gold};
  &:hover {
    background: ${colors.darkGold};
  }
`;
