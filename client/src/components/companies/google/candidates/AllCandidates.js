import React from 'react';
import { layouts } from '../../../../styles';
import { Layout } from '../../../global';

export const AllCandidates = ({
  selectedJob,
  candidates,
  setSelectedCandidate,
  resetGoogleState
}) => {
  return (
    <Layout
      topSection={{
        heading: selectedJob.job_title,
        button: 'Return to jobs',
        customButton: () => resetGoogleState()
      }}
      middleSection={{
        heading: 'Select a candidate',
        paragraph: `Selecting a candidate will give you more details about the person. Scroll horizontally to see all ${candidates.length} candidates.`,
        sliderContent: candidates.map((candidate) => (
          <layouts.MiddleSectionButton
            key={candidate.id}
            onClick={() => setSelectedCandidate(candidate)}
            style={{ minWidth: '300px' }}>
            {candidate.candidate_name}
          </layouts.MiddleSectionButton>
        ))
      }}
    />
  );
};
