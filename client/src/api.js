import axios from 'axios';

export const getAllJobs = (company = '') =>
  axios.get(`${process.env.REACT_APP_API_URL}/api/jobs?company=${company}`, { timeout: 5000 });

export const getJobById = (id) =>
  axios.get(`${process.env.REACT_APP_API_URL}/api/jobs/${id}`, { timeout: 5000 });

export const getCandidatesByJobId = (id) =>
  axios.get(`${process.env.REACT_APP_API_URL}/api/candidates/job/${id}`, { timeout: 5000 });
