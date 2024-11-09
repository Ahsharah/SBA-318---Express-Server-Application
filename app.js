const express = require('express');
const path = require('path');
const app = express();
const recipeRoutes = require('./routes/recipeRoutes');

// Setting up our kitchen (server configuration)
const PORT = process.env.PORT || 3000;
