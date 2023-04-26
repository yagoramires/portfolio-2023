import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 6000,
});

export const fetchProjects = async () => {
  try {
    const res = await api.get('/projects');

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchAbilities = async () => {
  try {
    const res = await api.get('/abilities');

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchEducation = async () => {
  try {
    const res = await api.get('/education');

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchExperience = async () => {
  try {
    const res = await api.get('/experience');

    return res.data;
  } catch (e) {
    console.log(e);
  }
};
