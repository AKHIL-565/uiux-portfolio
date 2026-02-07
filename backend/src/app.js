const express = require('express');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/profile', profileRoutes);

app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

module.exports = app;
