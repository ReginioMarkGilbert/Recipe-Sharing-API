/**
 * Router for managing recipe-related endpoints.
 * This module defines routes for handling CRUD operations on recipes.
 * @module routes/recipeRoutes
 */

const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * Route to create a new recipe.
 * @name Create Recipe
 * @route {POST} /recipes
 * @description Creates a new recipe.
 */
router.post('/recipes', recipeController.createRecipe);

/**
 * Route to get all recipes.
 * @name Get All Recipes
 * @route {GET} /recipes
 * @description Retrieves all recipes.
 */
router.get('/recipes', recipeController.getAllRecipes);

/**
 * Route to get a single recipe by title.
 * @name Get Recipe by Title
 * @route {GET} /recipes/title/:title
 * @description Retrieves a recipe by its title.
 * @param {string} title - The title or name of the recipe.
 */
router.get('/recipes/title/:title', recipeController.getRecipeByTitle);

/**
 * Route to search for recipes by ingredients.
 * @name Search Recipes by Ingredients
 * @route {GET} /recipes/ingredients/:ingredients
 * @description Searches for recipes by ingredients.
 * @param {string} ingredients - The ingredients to search for.
 */
router.get('/recipes/ingredients/:ingredients', recipeController.searchByIngredients);

/**
 * Route to get recipes by tag.
 * @name Get Recipes by Tag
 * @route {GET} /recipes/tags/:tag
 * @description Retrieves recipes by tag.
 * @param {string} tag - The tag to filter recipes.
 */
router.get('/recipes/tags/:tag', recipeController.getRecipesByTag);

/**
 * Route to get a single recipe by ID.
 * @name Get Recipe by ID
 * @route {GET} /recipes/:id
 * @description Retrieves a recipe by its ID.
 * @param {string} id - The ID of the recipe.
 */
router.get('/recipes/:id', recipeController.getRecipeById);

/**
 * Route to update a recipe by ID.
 * @name Update Recipe
 * @route {PUT} /recipes/:id
 * @description Updates a recipe by its ID.
 * @param {string} id - The ID of the recipe to update.
 */
router.put('/recipes/:id', recipeController.updateRecipe);

/**
 * Route to delete a recipe by ID.
 * @name Delete Recipe
 * @route {DELETE} /recipes/:id
 * @description Deletes a recipe by its ID.
 * @param {string} id - The ID of the recipe to delete.
 */
router.delete('/recipes/:id', recipeController.deleteRecipe);

module.exports = router;
