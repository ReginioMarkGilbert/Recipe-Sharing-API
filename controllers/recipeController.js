const Recipe = require('../models/Recipe');

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
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single recipe by ID
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get recipes by tag
// exports.getRecipesByTag = async (req, res) => {
//     try {
//         const recipes = await Recipe.find({ tags: req.params.tag });
//         if (!recipes.length) {
//             return res.status(404).json({ message: 'No recipes found with that tag' });
//         }
//         res.json(recipes);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// Get recipes by tag
exports.getRecipesByTag = async (req, res) => {
    try {
        // Extract and sanitize the tag parameter from the request
        const tag = req.params.tag.trim().replace(/\s/g, "").toLowerCase();
        // Create a regular expression to match the tag with case-insensitivity
        const regex = new RegExp("^" + tag.split("").join("\\s*") + "$", "i");
        const recipes = await Recipe.find({ tags: { $regex: regex } }); // Find recipes that have tags matching the regex        
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
