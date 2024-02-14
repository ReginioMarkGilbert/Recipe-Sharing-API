const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Define routes for recipes
router.post('/recipes', recipeController.createRecipe); // Route to create a new recipe
router.get('/recipes', recipeController.getAllRecipes); // Route to get all recipes
router.get('/recipes/title/:title', recipeController.getRecipeByTitle); // Route to get a single recipe by title
router.get('/recipes/ingredients/:ingredients', recipeController.searchByIngredients);
router.get('/recipes/tags/:tag', recipeController.getRecipesByTag); // Route to get recipes by tag
router.get('/recipes/:id', recipeController.getRecipeById); // Route to get a single recipe by ID
router.put('/recipes/:id', recipeController.updateRecipe); // Route to update a recipe by ID
router.delete('/recipes/:id', recipeController.deleteRecipe); // Route to delete a recipe by ID

module.exports = router;
