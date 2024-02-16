const Recipe = require('../models/recipe');

// Controller methods for handling recipes

// Create a new recipe
exports.createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.status(201).json(recipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({}, { __v: 0 }); // Exclude the __v field
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single recipe by ID
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id, { __v: 0 });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single recipe by title
exports.getRecipeByTitle = async (req, res) => {
    try {
        // Remove spaces and convert to lowercase
        const title = req.params.title.trim().replace(/\s/g, "").toLowerCase();
        const regex = new RegExp("^" + title.split("").join("\\s*") + "$", "i");
        const recipe = await Recipe.findOne({ title: { $regex: regex } }, { __v: 0 }); // Exclude the __v: 0
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 **  Get recipes using Ingredients
 * Search single by 1 recipe:
 * http://localhost:3000/api/recipes/ingredients/Heavy Cream
 * Search multiple by comma separated:
 * http://localhost:3000/api/recipes/ingredients/Heavy Cream,Ground Beef
*/
exports.searchByIngredients = async (req, res, next) => {
    const ingredients = req.params.ingredients.split(',');
    try {
        const recipes = await Recipe.find({ ingredients: { $in: ingredients } }, { __v: 0});
        if (!recipes) {
            return res.status(404).json({ message: 'No recipe found by the ingredients' });
        }
        res.json(recipes);
    } catch (err) {
        next(err);
    }
};

// Get recipes by tag
exports.getRecipesByTag = async (req, res) => {
    try {
        // Extract and sanitize the tag parameter from the request
        const tag = req.params.tag.trim().replace(/\s/g, "").toLowerCase();
        // Create a regular expression to match the tag with case-insensitivity
        const regex = new RegExp("^" + tag.split("").join("\\s*") + "$", "i");
        const recipes = await Recipe.find({ tags: { $regex: regex } }, { __v: 0 }); // Find recipes that have tags matching the regex        
        if (!recipes) {
            return res.status(404).json({ message: 'No recipes found with that tag' });
        }
        res.json(recipes);
    } catch (err) {
        res.status(500)
        .json({ message: err.message });
    }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
