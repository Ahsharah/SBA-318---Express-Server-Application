const express = require('express');
const router = express.Router();
const RecipeModel = require('../models/recipeModel');

// GET all recipes (with 'optional category' filter)
router.get('/', (req, res) => {
    const { category } = req.query;
    const recipes = category 
        ? RecipeModel.filterByCategory(category)
        : RecipeModel.getAll();
    res.render('recipes/index', { recipes });
});