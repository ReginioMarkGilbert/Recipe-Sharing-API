/**
 * Defines the schema for a Recipe document in the database.
 * Each Recipe contains a title, ingredients, instructions, and optional tags.
 * 
 * Schema:
 *  - title: Title of the recipe (String, required)
 *  - ingredients: Array of ingredients needed for the recipe (Array of Strings, required)
 *  - instructions: Instructions to prepare the recipe (String, required)
 *  - tags: Optional tags to categorize the recipe (Array of Strings)
 * 
* Example:
{
    "title": "Spaghetti Carbonara",
    "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
    "instructions": "Cook the spaghetti until it's firm. In a separate pan, fry the pancetta until crispy. Whisk the eggs and cheese together. Drain the spaghetti and mix it with the eggs and cheese mixture. Add the pancetta and black pepper. Serve immediately.",
    "tags": ["Italian", "Pasta"]
}

 */

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);
