import React from 'react';
import { layouts } from '../../../../styles';
import { Layout } from '../../../global';

export const AllJobs = ({ jobs, setSelectedJob }) => {
  return (
    <Layout
      topSection={{
        heading: 'Google',
        button: 'View job source',
        customButton: () => window.open(jobs[0].jobs_url, '_blank')
      }}
      middleSection={{
        heading: 'Select a job',
        paragraph: `Selecting a job will give you more details about the role. Scroll horizontally to see all ${jobs.length} jobs.`,
        sliderContent: jobs.map((job) => (
          <layouts.MiddleSectionButton
            key={job.id}
            onClick={() => setSelectedJob(job.id)}
            style={{ minWidth: '300px' }}>
            {job.job_title}
          </layouts.MiddleSectionButton>
        ))
      }}
    />
  );
};
