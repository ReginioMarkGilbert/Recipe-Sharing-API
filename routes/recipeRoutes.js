/**
 * Routes for Recipe Management
 * 
 * These routes handle the web requests to manage recipes in the application. They connect the endpoints with the corresponding
 * functions in the recipeController. This includes operations such as creating, reading, updating, and deleting recipes.
 * 
 * Endpoints:
 * - GET /recipes: Fetches all recipes.
 * - GET /recipes/:id: Fetches a single recipe by its unique ID.
 * - POST /recipes: Creates a new recipe with the provided data in the request body.
 * - PUT /recipes/:id: Updates an existing recipe identified by its ID with new data provided in the request body.
 * - DELETE /recipes/:id: Deletes a recipe identified by its ID.
 * - GET /recipes/title/:title: Fetches a single recipe by its title. This allows for flexible whitespace matching.
 * - GET /recipes/ingredients/:ingredients: Fetches recipes that contain any of the specified ingredients.
 * - GET /recipes/tags/:tags: Fetches recipes that are tagged with any of the specified tags.
 * 
 * The routes are designed to be RESTful and aim to provide clear and intuitive access to the recipe management functionality.
 * Each route is mapped to a specific controller function that handles the request and sends back the appropriate response to the client.
 */

const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Define route to get all recipes
router.get('/recipes', recipeController.getAllRecipes);

// Define route to get a single recipe by ID
router.get('/recipes/:id', recipeController.getRecipeById);

// Define route to create a new recipe
router.post('/recipes', recipeController.createRecipe);

// Define route to update a recipe
router.put('/recipes/:id', recipeController.updateRecipe);

// Define route to delete a recipe
router.delete('/recipes/:id', recipeController.deleteRecipe);

// Define route to get a single recipe by title
router.get('/recipes/title/:title', recipeController.getRecipeByTitle);

// Define route to get recipes by ingredients
router.get('/recipes/ingredients/:ingredients', recipeController.getRecipeByIngredients);

// Define route to get recipes by tag
router.get('/recipes/tags/:tags', recipeController.getRecipesByTag);

module.exports = router;
