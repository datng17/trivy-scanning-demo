const axios = require('axios');

// Trong phiên bản an toàn, API key sẽ được lấy từ biến môi trường
const GITHUB_API_KEY = 'ghp_ThisIsAFakeKeyForADemoDoNotUse12345';


const fetchRepoData = async (repoName) => {
  try {
    const config = {};
    if (GITHUB_API_KEY) {
      config.headers = { 'Authorization': `token ${GITHUB_API_KEY}` };
    }
    const response = await axios.get(`https://api.github.com/repos/${repoName}`, config);
    return { name: response.data.name, stars: response.data.stargazers_count };
  } catch (error) {
    console.error('Error fetching repo data:', error.message);
    throw new Error('Could not fetch repository data.');
  }
};

module.exports = { fetchRepoData };