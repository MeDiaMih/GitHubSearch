import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

export const getRepositories = async () => {
  try {
    const response = await axiosInstance.get(`/search/repositories`, {
      params: {
        q: 'stars:>1',
        sort: 'stars',
        order: 'desc',
        per_page: 32,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};

export const getSearchRepositories = async (
  query: string,
  sort: string = 'stars',
) => {
  try {
    const response = await axiosInstance.get(`/search/repositories`, {
      params: {
        q: query,
        sort: sort,
        order: 'desc',
        per_page: 32,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error searching repositories:', error);
    throw error;
  }
};

export const getRepositoryDetails = async (owner: string, repo: string) => {
  try {
    const response = await axiosInstance.get(`/repos/${owner}/${repo}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repository details:', error);
    throw error;
  }
};
