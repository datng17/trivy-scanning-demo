const express = require('express');
const { fetchRepoData } = require('./services/dataFetcher');
const app = express();
const PORT = 3000;

app.get('/repo/:user/:repo', async (req, res) => {
  try {
    const { user, repo } = req.params;
    const repoData = await fetchRepoData(`${user}/${repo}`);
    res.json(repoData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});