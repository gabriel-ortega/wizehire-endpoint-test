const express = require('express');
const cors = require('cors');
const procesarRoutes = require('./routes/procesarRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', procesarRoutes);

module.exports = app;
