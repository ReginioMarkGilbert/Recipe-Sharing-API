/**
 * This module exports an array of recipe objects.
 * Each recipe object has the following properties:
 * - id: a unique identifier for the recipe
 * - title: the title of the recipe
 * - ingredients: an array of strings, each representing an ingredient needed for the recipe
 * - instructions: an array of strings, each representing a step in the recipe
 * - tag: an array of strings, each representing a category or tag associated with the recipe
 */

const recipesData = [
    {
        id: 1,
        title: "Chicken Alfredo Pasta",
        ingredients: ["Fettuccine Pasta", "Chicken Breast", "Butter", "Heavy Cream", "Parmesan Cheese", "Garlic", "Salt", "Pepper"],
        instructions: "Cook the fettuccine pasta according to package instructions. In a pan, cook the chicken breast until golden and cooked through. In another pan, melt butter and add garlic, then pour in heavy cream and simmer. Add parmesan cheese until the sauce thickens. Combine pasta, chicken, and sauce. Season with salt and pepper to taste.",
        tags: ["Italian", "Pasta", "Chicken"]
    },

    {
        id: 2,
        title: "Greek Salad",
        ingredients: ["Lettuce", "Cucumber", "Tomatoes", "Red Onion", "Kalamata Olives", "Feta Cheese", "Olive Oil", "Red Wine Vinegar", "Dried Oregano"],
        instructions: "Chop lettuce, cucumber, tomatoes, and red onion. Combine with olives and crumbled feta cheese. Dress with olive oil, red wine vinegar, and dried oregano.",
        tags: ["Greek", "Salad", "Vegetarian"]
    },
    {
        id: 3,
        title: "Vegetable Stir-Fry",
        ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Snap Peas", "Onion", "Garlic", "Ginger", "Soy Sauce", "Sesame Oil"],
        instructions: "Sauté garlic and ginger in sesame oil. Add vegetables and stir-fry until tender-crisp. Season with soy sauce and serve hot.",
        tags: ["Asian", "Stir-Fry", "Vegetarian"]
    },
    {
        id: 4,
        title: "Classic Margherita Pizza",
        ingredients: ["Pizza Dough", "Tomatoes", "Fresh Mozzarella Cheese", "Fresh Basil Leaves", "Olive Oil", "Salt", "Black Pepper"],
        instructions: "Roll out pizza dough and top with sliced tomatoes, mozzarella cheese, and basil leaves. Drizzle with olive oil and season with salt and pepper. Bake until crust is golden and cheese is melted.",
        tags: ["Italian", "Pizza", "Vegetarian"]
    },
    {
        id: 5,
        title: "Grilled Salmon with Lemon-Dill Sauce",
        ingredients: ["Salmon Fillets", "Lemon", "Fresh Dill", "Olive Oil", "Salt", "Black Pepper"],
        instructions: "Season salmon fillets with salt, pepper, and olive oil. Grill until cooked through. Prepare a sauce with lemon juice, chopped dill, and olive oil. Serve salmon with lemon-dill sauce on top.",
        tags: ["Seafood", "Salmon", "Grilling"]
    },
];

module.exports = { recipesData };
