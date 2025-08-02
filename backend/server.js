const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: "Akshaya",
    referralCode: "akshaya2025",
    donations: 12500
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "Akshaya", donations: 12500 },
    { name: "Ravi", donations: 9800 },
    { name: "Sneha", donations: 7200 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
