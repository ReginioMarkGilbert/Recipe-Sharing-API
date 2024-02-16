/**
 * Recipe Controller
 * 
 * This controller module provides functionality to manage recipes, including creating, reading, updating, and deleting recipes.
 * It interacts with a mock database (`recipesData`) to perform these operations. The module uses the `Joi` library for data validation.
 * 
 * Functions:
 * - `validateRecipe(recipe)`: Validates the recipe object against a predefined schema.
 * - `createRecipe(req, res)`: Creates a new recipe and adds it to the `recipesData`.
 * - `getAllRecipes(req, res)`: Retrieves all recipes from `recipesData`.
 * - `getRecipeById(req, res)`: Retrieves a single recipe by its ID.
 * - `getRecipeByTitle(req, res)`: Retrieves a single recipe by its title, allowing for flexible whitespace matching.
 * - `getRecipeByIngredients(req, res)`: Retrieves recipes that contain any of the specified ingredients.
 * - `getRecipesByTag(req, res)`: Retrieves recipes that are tagged with any of the specified tags.
 * - `updateRecipe(req, res)`: Updates an existing recipe by its ID with new data.
 * - `deleteRecipe(req, res)`: Deletes a recipe by its ID.
 * 
 * Parameters:
 * - @req (Request): The HTTP request object, containing parameters and body data.
 * - @res (Response): The HTTP response object used to return data or status codes to the client.
 * 
 * Data Validation:
 * The `validateRecipe` function uses the `Joi` library to ensure that recipe objects conform to the expected structure:
 * - `title`: Required string.
 * - `ingredients`: Required array of strings.
 * - `instructions`: Required string.
 * - `tags`: Required array of strings.
 * 
 * Error Handling:
 * Each function is wrapped in a try-catch block to handle and respond with appropriate HTTP status codes and error messages.
 * 
 * Note: This controller assumes the existence of a `recipesData` array for storing recipe objects. In a real-world application,
 * this would likely be replaced with database operations.
 */

const Joi = require("joi");
const { recipesData } = require("../src/data.js");

// validation for recipe data
function validateRecipe(recipe) {
    const schema = Joi.object({
        title: Joi.string().required(),
        ingredients: Joi.array().items(Joi.string()).required(),
        instructions: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required(),
    });
    return schema.validate(recipe);
}

// Create a new recipe
exports.createRecipe = (req, res) => {
    try {
        const { error } = validateRecipe(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const newRecipe = {
            id: recipesData.length + 1,
            title: req.body.title,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            tags: req.body.tags || [],
        };

        recipesData.push(newRecipe);
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all recipes
exports.getAllRecipes = (req, res) => {
    try {
        res.json(recipesData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single recipe by ID
exports.getRecipeById = (req, res) => {
    try {
        const recipe = recipesData.find((recipe) => recipe.id === parseInt(req.params.id));
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single recipe by title
exports.getRecipeByTitle = (req, res) => {
    try {
        const title = req.params.title.trim().replace(/\s/g, "").toLowerCase();
        const regex = new RegExp("^" + title.split("").join("\\s*") + "$", "i");
        const recipe = recipesData.find(recipe => regex.test(recipe.title));
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get one or multiple recipes by tags
exports.getRecipeByIngredients = (req, res) => {
    try {
        const ingredients = req.params.ingredients.split(',').map(ingredient => ingredient.trim().toLowerCase());
        const recipes = recipesData.filter(recipe => {
            return ingredients.some(ingredient => recipe.ingredients.map(i => i.toLowerCase()).includes(ingredient));
        });
        if (recipes.length === 0) {
            return res.status(404).json({ message: 'No recipes found by the ingredients' });
        }
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get recipes by tag
exports.getRecipesByTag = (req, res) => {
    try {
        // Extract and sanitize the tag parameter from the request
        const tags = req.params.tags.split(',').map(tags => tags.trim().toLowerCase());
        
        // Filter recipes based on the requested tags
        const recipes = recipesData.filter(recipe => {
            return tags.some(tags => recipe.tags.map(t => t.toLowerCase()).includes(tags));
        });

        if (recipes.length === 0) {
            return res.status(404).json({ message: 'No recipes found with those tags' });
        }
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a recipe
exports.updateRecipe = (req, res) => {
    try {
        const recipeIndex = recipesData.findIndex((recipe) => recipe.id === parseInt(req.params.id));
        if (recipeIndex === -1) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        const updatedRecipe = {
            id: recipesData[recipeIndex].id,
            title: req.body.title || recipesData[recipeIndex].title,
            ingredients: req.body.ingredients || recipesData[recipeIndex].ingredients,
            instructions: req.body.instructions || recipesData[recipeIndex].instructions,
            tags: req.body.tags || recipesData[recipeIndex].tags,
        };

        recipesData[recipeIndex] = updatedRecipe;
        res.json(updatedRecipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a recipe by ID
exports.deleteRecipe = (req, res) => {
    try {
        const recipeId = parseInt(req.params.id);
        const index = recipesData.findIndex(recipe => recipe.id === recipeId);
        if (index === -1) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        const deletedRecipe = recipesData.splice(index, 1);
        res.json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
