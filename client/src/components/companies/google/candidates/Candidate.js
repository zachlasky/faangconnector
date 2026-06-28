import React from 'react';
import styled from 'styled-components';
import { layouts } from '../../../../styles';
import { Layout } from '../../../global';

export const Candidate = ({ candidate, resetGoogleState, setSelectedCandidate }) => {
  const renderPreviousJobs = () => {
    let previousJobsArray = [];
    for (let i = 0; i < candidate.candidate_previous_jobs.length; i++) {
      previousJobsArray.push(candidate.candidate_previous_jobs.slice(i, i + 5));
      i += 5;
    }

    return previousJobsArray;
  };

  const renderSkills = () => {
    let skillsArray = [];
    for (let i = 0; i < candidate.candidate_skills.length; i++) {
      skillsArray.push(candidate.candidate_skills.slice(i, i + 5));
      i += 5;
    }

    return skillsArray;
  };

  return (
    <Layout
      topSection={{
        heading: candidate.candidate_name,
        button: 'Return to candidates',
        customButton: () => setSelectedCandidate({})
      }}
      middleSection={{
        heading: 'Candidate Info',
        paragraph: `Scroll horizontally to see all candidate info.`,
        sliderContent: (
          <>
            <CandidateSection>
              <CandidateSectionHeading>Location</CandidateSectionHeading>
              <p>{candidate.candidate_location}</p>
            </CandidateSection>
            {renderSkills().map((skills) => {
              return (
                <CandidateSection>
                  <CandidateSectionHeading>Skills</CandidateSectionHeading>
                  {skills.map((skill) => (
                    <p>{skill}</p>
                  ))}
                </CandidateSection>
              );
            })}
            <CandidateSection>
              <CandidateSectionHeading>Current Job Title</CandidateSectionHeading>
              <p>{candidate.candidate_job_title}</p>
            </CandidateSection>
            {renderPreviousJobs().map((jobs) => {
              return (
                <CandidateSection>
                  <CandidateSectionHeading>Previous Jobs</CandidateSectionHeading>
                  {jobs.map((job) => (
                    <p>{job}</p>
                  ))}
                </CandidateSection>
              );
            })}
          </>
        ),
        children: (
          <layouts.MiddleSectionButton onClick={() => resetGoogleState()}>
            Return to jobs
          </layouts.MiddleSectionButton>
        )
      }}
    />
  );
};

const CandidateSection = styled('div')`
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

const CandidateSectionHeading = styled('h3')`
  font-weight: bold;
  font-size: 16px;
`;
