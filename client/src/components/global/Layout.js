import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { layouts } from '../../styles';

export const Layout = ({ topSection, middleSection }) => {
  const history = useHistory();

  return (
    <LayoutContainer className="layout-container">
      {topSection && (
        <layouts.TopSection>
          <layouts.TopSectionHeading>{topSection.heading}</layouts.TopSectionHeading>
          {topSection.button && (
            <layouts.TopSectionButton
              onClick={() => {
                topSection.buttonClick
                  ? history.push(topSection.buttonClick)
                  : topSection.customButton();
              }}>
              {topSection.button}
            </layouts.TopSectionButton>
          )}
          {topSection.children && topSection.children}
        </layouts.TopSection>
      )}
      {middleSection && (
        <layouts.MiddleSection>
          <MiddleSectionTextWrapper>
            <layouts.MiddleSectionHeading>{middleSection.heading}</layouts.MiddleSectionHeading>
            {middleSection.paragraph && (
              <layouts.MiddleSectionParagraph>
                {middleSection.paragraph}
              </layouts.MiddleSectionParagraph>
            )}
          </MiddleSectionTextWrapper>
          {middleSection.button && (
            <layouts.MiddleSectionButton onClick={() => history.push(middleSection.buttonClick)}>
              {middleSection.button}
            </layouts.MiddleSectionButton>
          )}
          <MiddleSectionSliderAndChildrenWrapper>
            {middleSection.sliderContent && (
              <layouts.MiddleSectionSliderWrapper>
                {middleSection.sliderContent}
              </layouts.MiddleSectionSliderWrapper>
            )}
            {middleSection.children && middleSection.children}
          </MiddleSectionSliderAndChildrenWrapper>
        </layouts.MiddleSection>
      )}
    </LayoutContainer>
  );
};

const LayoutContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const MiddleSectionTextWrapper = styled('div')`
  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    margin-top: -50px;
  }
`;

const MiddleSectionSliderAndChildrenWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-height: 400px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
